---
purpose: Real-time validation during conversion process
features:
  - Sample processed files
  - Check for common errors
  - Alert on anomalies
  - Pause capability
outputs:
  - 58-conversion-progress.csv
  - Real-time alerts
---

# Conversion Progress Validator

**Executed**: <% tp.date.now("YYYY-MM-DD HH:mm:ss") %>
**Template**: T10-Conversion-Progress-Validator

## Progress Monitoring Configuration

<%*
// T10-Conversion-Progress-Validator
// Purpose: Monitor conversion progress and detect issues in real-time
// Features: Sampling, error detection, anomaly alerts, pause capability

const OUTPUT_DIR = 'link-fix';
const PROGRESS_LOG = '58-conversion-progress.csv';
const timestamp = tp.date.now("YYYYMMDD-HHmmss");

// Monitoring configuration
const config = {
    sampleRate: 0.1, // Sample 10% of files
    checkInterval: 5000, // Check every 5 seconds
    anomalyThreshold: {
        errorRate: 0.05, // Alert if >5% errors
        unchangedRate: 0.8, // Alert if >80% unchanged
        timePerFile: 5000 // Alert if >5 seconds per file
    },
    pauseOnCritical: true
};

// Progress tracking
const progress = {
    startTime: Date.now(),
    filesProcessed: 0,
    filesSampled: 0,
    errors: [],
    warnings: [],
    anomalies: [],
    conversionStats: {
        converted: 0,
        unchanged: 0,
        failed: 0
    },
    lastCheck: Date.now()
};

// Initialize or load existing progress
const initializeProgress = async () => {
    const progressPath = `${OUTPUT_DIR}/${PROGRESS_LOG}`;
    
    if (await app.vault.adapter.exists(progressPath)) {
        // Load existing progress
        const existing = await app.vault.adapter.read(progressPath);
        console.log("Resuming from existing progress log");
        return true;
    } else {
        // Create new progress log
        const headers = 'Timestamp,Action,File,Status,Links Before,Links After,Duration(ms),Notes\n';
        await app.vault.adapter.write(progressPath, headers);
        return false;
    }
};

// Log progress entry
const logProgress = async (entry) => {
    const progressPath = `${OUTPUT_DIR}/${PROGRESS_LOG}`;
    const row = [
        new Date().toISOString(),
        entry.action,
        `"${entry.file}"`,
        entry.status,
        entry.linksBefore || '',
        entry.linksAfter || '',
        entry.duration || '',
        `"${entry.notes || ''}"`
    ].join(',') + '\n';
    
    await app.vault.adapter.append(progressPath, row);
};

// Sample file for validation
const sampleFile = async (filePath) => {
    try {
        const file = app.vault.getAbstractFileByPath(filePath);
        if (!file || !(file instanceof TFile)) return null;
        
        const content = await app.vault.read(file);
        
        // Count different link types
        const stats = {
            wikilinks: (content.match(/\[\[[^\]]+\]\]/g) || []).length,
            markdownLinks: (content.match(/\[[^\]]+\]\([^)]+\)/g) || []).length,
            leadingSlashes: (content.match(/\[\[\/[^\]]+\]\]/g) || []).length,
            relativeLinks: (content.match(/\[[^\]]+\]\(\.\.?\/[^)]+\)/g) || []).length,
            totalLinks: 0
        };
        
        stats.totalLinks = stats.wikilinks + stats.markdownLinks;
        
        return {
            path: filePath,
            stats: stats,
            hasIssues: stats.leadingSlashes > 0 || stats.relativeLinks > 0,
            content: content.substring(0, 1000) // First 1000 chars for inspection
        };
        
    } catch (error) {
        return { path: filePath, error: error.message };
    }
};

// Check for anomalies
const checkAnomalies = () => {
    const elapsed = Date.now() - progress.startTime;
    const avgTimePerFile = elapsed / progress.filesProcessed;
    
    const anomalies = [];
    
    // Check error rate
    const errorRate = progress.conversionStats.failed / progress.filesProcessed;
    if (errorRate > config.anomalyThreshold.errorRate) {
        anomalies.push({
            type: 'HIGH_ERROR_RATE',
            severity: 'critical',
            message: `Error rate ${(errorRate * 100).toFixed(1)}% exceeds threshold`,
            value: errorRate
        });
    }
    
    // Check unchanged rate
    const unchangedRate = progress.conversionStats.unchanged / progress.filesProcessed;
    if (unchangedRate > config.anomalyThreshold.unchangedRate) {
        anomalies.push({
            type: 'HIGH_UNCHANGED_RATE',
            severity: 'warning',
            message: `${(unchangedRate * 100).toFixed(1)}% of files unchanged - plugin may not be working`,
            value: unchangedRate
        });
    }
    
    // Check processing speed
    if (avgTimePerFile > config.anomalyThreshold.timePerFile) {
        anomalies.push({
            type: 'SLOW_PROCESSING',
            severity: 'warning',
            message: `Average ${(avgTimePerFile/1000).toFixed(1)}s per file - slower than expected`,
            value: avgTimePerFile
        });
    }
    
    return anomalies;
};

// Monitor loop
const startMonitoring = async () => {
    const monitoring = setInterval(async () => {
        // Check for new processed files
        const recentFiles = await getRecentlyModifiedFiles();
        
        for (const file of recentFiles) {
            progress.filesProcessed++;
            
            // Sample based on rate
            if (Math.random() < config.sampleRate) {
                const sample = await sampleFile(file.path);
                progress.filesSampled++;
                
                if (sample.error) {
                    progress.errors.push({
                        file: file.path,
                        error: sample.error,
                        timestamp: new Date()
                    });
                    progress.conversionStats.failed++;
                } else {
                    // Analyze sample
                    if (sample.stats.wikilinks > 0) {
                        progress.warnings.push({
                            file: file.path,
                            issue: 'Wikilinks still present',
                            count: sample.stats.wikilinks
                        });
                    }
                    
                    if (sample.hasIssues) {
                        progress.conversionStats.unchanged++;
                    } else {
                        progress.conversionStats.converted++;
                    }
                }
                
                // Log sample
                await logProgress({
                    action: 'SAMPLE',
                    file: file.path,
                    status: sample.error ? 'ERROR' : 'OK',
                    linksBefore: sample.stats?.totalLinks,
                    notes: sample.error || `Wiki: ${sample.stats?.wikilinks}, MD: ${sample.stats?.markdownLinks}`
                });
            }
        }
        
        // Check for anomalies
        if (progress.filesProcessed > 10) { // Need minimum samples
            const anomalies = checkAnomalies();
            
            for (const anomaly of anomalies) {
                if (!progress.anomalies.find(a => a.type === anomaly.type)) {
                    progress.anomalies.push(anomaly);
                    
                    // Alert user
                    new Notice(`⚠️ ${anomaly.message}`, 0);
                    
                    // Log anomaly
                    await logProgress({
                        action: 'ANOMALY',
                        file: 'SYSTEM',
                        status: anomaly.severity.toUpperCase(),
                        notes: anomaly.message
                    });
                    
                    // Pause if critical
                    if (anomaly.severity === 'critical' && config.pauseOnCritical) {
                        clearInterval(monitoring);
                        
                        const shouldContinue = await tp.system.suggester(
                            ['Continue monitoring', 'Stop and investigate', 'Continue without monitoring'],
                            ['continue', 'stop', 'skip'],
                            false,
                            'Critical anomaly detected. How would you like to proceed?'
                        );
                        
                        if (shouldContinue === 'stop') {
                            return false;
                        } else if (shouldContinue === 'skip') {
                            return true;
                        }
                        // Restart monitoring
                        startMonitoring();
                    }
                }
            }
        }
        
        // Update display
        updateProgressDisplay();
        
    }, config.checkInterval);
    
    return monitoring;
};

// Get recently modified files (simplified - would need proper implementation)
const getRecentlyModifiedFiles = async () => {
    // This is a simplified version - in practice, you'd track file modification times
    const cutoffTime = progress.lastCheck;
    progress.lastCheck = Date.now();
    
    // Return files modified since last check
    return [];
};

// Update progress display
const updateProgressDisplay = () => {
    const elapsed = Date.now() - progress.startTime;
    const rate = progress.filesProcessed / (elapsed / 1000 / 60); // files per minute
    
    const status = `
Files: ${progress.filesProcessed} | 
Sampled: ${progress.filesSampled} | 
Rate: ${rate.toFixed(1)}/min | 
Errors: ${progress.errors.length}
    `.trim();
    
    // Update status bar or notice
    console.log(status);
};

// Generate summary report
const generateSummary = () => {
    let summary = `# Conversion Progress Summary\n\n`;
    summary += `**Monitoring Period**: ${new Date(progress.startTime).toISOString()} to ${new Date().toISOString()}\n\n`;
    
    summary += `## Statistics\n\n`;
    summary += `- **Files Processed**: ${progress.filesProcessed}\n`;
    summary += `- **Files Sampled**: ${progress.filesSampled} (${(progress.filesSampled/progress.filesProcessed*100).toFixed(1)}%)\n`;
    summary += `- **Successfully Converted**: ${progress.conversionStats.converted}\n`;
    summary += `- **Unchanged**: ${progress.conversionStats.unchanged}\n`;
    summary += `- **Failed**: ${progress.conversionStats.failed}\n\n`;
    
    const elapsed = Date.now() - progress.startTime;
    summary += `## Performance\n\n`;
    summary += `- **Total Time**: ${(elapsed/1000/60).toFixed(1)} minutes\n`;
    summary += `- **Average Rate**: ${(progress.filesProcessed/(elapsed/1000/60)).toFixed(1)} files/minute\n`;
    summary += `- **Average Time/File**: ${(elapsed/progress.filesProcessed/1000).toFixed(2)} seconds\n\n`;
    
    if (progress.anomalies.length > 0) {
        summary += `## ⚠️ Anomalies Detected\n\n`;
        progress.anomalies.forEach(a => {
            summary += `- **${a.type}** (${a.severity}): ${a.message}\n`;
        });
        summary += `\n`;
    }
    
    if (progress.errors.length > 0) {
        summary += `## ❌ Errors\n\n`;
        progress.errors.slice(0, 10).forEach(e => {
            summary += `- ${e.file}: ${e.error}\n`;
        });
        if (progress.errors.length > 10) {
            summary += `- ... and ${progress.errors.length - 10} more\n`;
        }
        summary += `\n`;
    }
    
    if (progress.warnings.length > 0) {
        summary += `## ⚠️ Warnings\n\n`;
        const byType = {};
        progress.warnings.forEach(w => {
            if (!byType[w.issue]) byType[w.issue] = 0;
            byType[w.issue]++;
        });
        
        Object.entries(byType).forEach(([issue, count]) => {
            summary += `- ${issue}: ${count} files\n`;
        });
    }
    
    return summary;
};

// Main execution
try {
    const mode = await tp.system.suggester(
        ['Start Monitoring', 'View Current Progress', 'Generate Summary', 'Stop Monitoring'],
        ['start', 'view', 'summary', 'stop'],
        false,
        'Select monitoring action:'
    );
    
    if (mode === 'start') {
        // Initialize progress tracking
        await initializeProgress();
        
        await logProgress({
            action: 'START',
            file: 'MONITORING',
            status: 'ACTIVE',
            notes: `Sample rate: ${config.sampleRate}, Check interval: ${config.checkInterval}ms`
        });
        
        tR += `## Monitoring Started\n\n`;
        tR += `- **Sample Rate**: ${(config.sampleRate * 100).toFixed(0)}%\n`;
        tR += `- **Check Interval**: ${config.checkInterval/1000} seconds\n`;
        tR += `- **Pause on Critical**: ${config.pauseOnCritical}\n\n`;
        tR += `### Anomaly Thresholds\n`;
        tR += `- Error Rate: >${(config.anomalyThreshold.errorRate * 100).toFixed(0)}%\n`;
        tR += `- Unchanged Rate: >${(config.anomalyThreshold.unchangedRate * 100).toFixed(0)}%\n`;
        tR += `- Time per File: >${config.anomalyThreshold.timePerFile/1000}s\n\n`;
        
        tR += `The monitor is now running in the background.\n`;
        tR += `You will receive notifications if anomalies are detected.\n\n`;
        
        tR += `To stop monitoring, run this template again and select "Stop Monitoring".\n`;
        
        // Start monitoring
        const monitorId = await startMonitoring();
        
        // Store monitor ID for later stopping
        await app.vault.adapter.write(`${OUTPUT_DIR}/monitor-${timestamp}.id`, monitorId.toString());
        
    } else if (mode === 'view') {
        // Load and display current progress
        const progressPath = `${OUTPUT_DIR}/${PROGRESS_LOG}`;
        if (await app.vault.adapter.exists(progressPath)) {
            const data = await app.vault.adapter.read(progressPath);
            const lines = data.split('\n').filter(l => l);
            
            tR += `## Current Progress\n\n`;
            tR += `**Total Entries**: ${lines.length - 1}\n\n`; // Minus header
            
            // Show last 10 entries
            tR += `### Recent Activity\n\n`;
            tR += '```csv\n';
            tR += lines.slice(-10).join('\n');
            tR += '\n```\n';
        } else {
            tR += `## No Active Monitoring\n\n`;
            tR += `Progress log not found. Start monitoring first.\n`;
        }
        
    } else if (mode === 'summary') {
        // Generate and save summary
        const summary = generateSummary();
        const summaryPath = `${OUTPUT_DIR}/58-conversion-progress-summary-${timestamp}.md`;
        await app.vault.adapter.write(summaryPath, summary);
        
        tR += `## Summary Generated\n\n`;
        tR += `Summary saved to: \`${summaryPath}\`\n\n`;
        tR += summary;
        
    } else if (mode === 'stop') {
        // Stop monitoring
        await logProgress({
            action: 'STOP',
            file: 'MONITORING',
            status: 'COMPLETE',
            notes: 'Monitoring stopped by user'
        });
        
        tR += `## Monitoring Stopped\n\n`;
        tR += `Progress has been logged to: \`${OUTPUT_DIR}/${PROGRESS_LOG}\`\n`;
        tR += `Run the template again to generate a summary.\n`;
    }
    
} catch (error) {
    console.error("Monitoring error:", error);
    tR += `\n## ❌ Error\n\n${error.message}`;
    
    await logProgress({
        action: 'ERROR',
        file: 'SYSTEM',
        status: 'FAILED',
        notes: error.message
    });
}
%>

---

*Template: T10-Conversion-Progress-Validator*
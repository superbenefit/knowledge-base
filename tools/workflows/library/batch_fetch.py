#!/usr/bin/env python3
"""
Batch URL Fetcher for Discord Mining Workflow
Fetches multiple URLs from CSV using Firecrawl API and saves results.

Usage:
    python3 batch_fetch.py --start-row 188 --count 10
    python3 batch_fetch.py --start-row 188 --count 10 --output custom-output.json

Designed to run in GitHub Actions but can also run locally.
"""

import os
import sys
import json
import csv
import argparse
import requests
from datetime import datetime
from pathlib import Path

def load_api_key():
    """Load Firecrawl API key from environment or .env file"""
    # First try environment variable (GitHub Actions)
    api_key = os.getenv('FIRECRAWL_API_KEY')
    if api_key:
        return api_key

    # Fallback to .env file (local development)
    env_file = Path(__file__).parent.parent.parent / '.env'
    if env_file.exists():
        with open(env_file) as f:
            for line in f:
                if line.startswith('FIRECRAWL_API_KEY='):
                    return line.split('=', 1)[1].strip()

    return None

def fetch_url(url, api_key):
    """
    Fetch single URL using Firecrawl API

    Returns:
        dict: {
            'success': bool,
            'status_code': int,
            'url': str,
            'content': str (markdown),
            'title': str,
            'metadata': dict,
            'error': str (if failed)
        }
    """
    api_url = "https://api.firecrawl.dev/v2/scrape"

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    }

    payload = {
        "url": url,
        "formats": ["markdown"]
    }

    try:
        response = requests.post(api_url, headers=headers, json=payload, timeout=60)

        result = {
            'success': response.status_code == 200,
            'status_code': response.status_code,
            'url': url
        }

        if response.status_code == 200:
            data = response.json()
            result['content'] = data.get('data', {}).get('markdown', '')
            result['title'] = data.get('data', {}).get('metadata', {}).get('title', '')
            result['metadata'] = data.get('data', {}).get('metadata', {})
        else:
            result['error'] = f"HTTP {response.status_code}: {response.text[:200]}"
            result['content'] = ''

    except requests.exceptions.Timeout:
        result = {
            'success': False,
            'status_code': 0,
            'url': url,
            'error': 'Request timeout after 60 seconds',
            'content': ''
        }
    except requests.exceptions.ConnectionError as e:
        result = {
            'success': False,
            'status_code': 0,
            'url': url,
            'error': f'Connection error: {str(e)[:100]}',
            'content': ''
        }
    except Exception as e:
        result = {
            'success': False,
            'status_code': 0,
            'url': url,
            'error': f'Unexpected error: {str(e)[:100]}',
            'content': ''
        }

    return result

def load_csv_urls(csv_path, start_row, count):
    """
    Load URLs from CSV file

    Args:
        csv_path: Path to CSV file
        start_row: Row number to start from (1-indexed)
        count: Number of URLs to fetch

    Returns:
        list: List of dicts with row_number and url
    """
    urls = []

    with open(csv_path, 'r', encoding='utf-8') as f:
        reader = csv.reader(f)

        # Skip to start row (accounting for 0-indexing)
        for i, row in enumerate(reader, start=1):
            if i < start_row:
                continue
            if i >= start_row + count:
                break

            if row and row[0]:  # URL is in first column
                urls.append({
                    'row_number': i,
                    'url': row[0],
                    'csv_data': row  # Store full row for context
                })

    return urls

def batch_fetch(csv_path, start_row, count, api_key):
    """
    Fetch multiple URLs in batch

    Returns:
        dict: {
            'batch_info': {...},
            'results': [...]
        }
    """
    print(f"Loading URLs from CSV: rows {start_row} to {start_row + count - 1}")
    urls_to_fetch = load_csv_urls(csv_path, start_row, count)

    print(f"Found {len(urls_to_fetch)} URLs to fetch")

    results = []
    for i, url_info in enumerate(urls_to_fetch, start=1):
        url = url_info['url']
        row_num = url_info['row_number']

        print(f"[{i}/{len(urls_to_fetch)}] Fetching row {row_num}: {url}")

        result = fetch_url(url, api_key)
        result['row_number'] = row_num
        result['csv_data'] = url_info['csv_data']

        results.append(result)

        # Print summary
        if result['success']:
            print(f"  ✓ Success - {len(result['content'])} chars")
        else:
            print(f"  ✗ Failed - {result.get('error', 'Unknown error')}")

    batch_info = {
        'timestamp': datetime.utcnow().isoformat() + 'Z',
        'start_row': start_row,
        'count': count,
        'urls_attempted': len(urls_to_fetch),
        'successful': sum(1 for r in results if r['success']),
        'failed': sum(1 for r in results if not r['success'])
    }

    return {
        'batch_info': batch_info,
        'results': results
    }

def main():
    parser = argparse.ArgumentParser(description='Batch fetch URLs using Firecrawl API')
    parser.add_argument('--start-row', type=int, required=True,
                      help='Row number to start from (1-indexed)')
    parser.add_argument('--count', type=int, required=True,
                      help='Number of URLs to fetch')
    parser.add_argument('--csv', type=str,
                      default='tools/workflows/library/data/superbenefit-discord-urls.csv',
                      help='Path to CSV file')
    parser.add_argument('--output', type=str,
                      help='Output JSON file path (default: auto-generated)')

    args = parser.parse_args()

    # Load API key
    api_key = load_api_key()
    if not api_key:
        print("Error: FIRECRAWL_API_KEY not found in environment or .env file")
        sys.exit(1)

    # Verify CSV exists
    csv_path = Path(args.csv)
    if not csv_path.exists():
        print(f"Error: CSV file not found: {csv_path}")
        sys.exit(1)

    # Determine output path
    if args.output:
        output_path = Path(args.output)
    else:
        output_dir = Path('tools/workflows/library/data/fetched-batches')
        output_dir.mkdir(parents=True, exist_ok=True)
        timestamp = datetime.utcnow().strftime('%Y%m%d-%H%M%S')
        output_path = output_dir / f'batch-rows-{args.start_row}-to-{args.start_row + args.count - 1}-{timestamp}.json'

    # Fetch URLs
    print(f"\n{'='*80}")
    print(f"Batch Fetch Started")
    print(f"{'='*80}\n")

    batch_data = batch_fetch(csv_path, args.start_row, args.count, api_key)

    # Save results
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(batch_data, f, indent=2, ensure_ascii=False)

    # Print summary
    print(f"\n{'='*80}")
    print(f"Batch Fetch Complete")
    print(f"{'='*80}")
    print(f"Timestamp: {batch_data['batch_info']['timestamp']}")
    print(f"Rows processed: {args.start_row} to {args.start_row + args.count - 1}")
    print(f"Successful: {batch_data['batch_info']['successful']}")
    print(f"Failed: {batch_data['batch_info']['failed']}")
    print(f"Results saved to: {output_path}")
    print(f"{'='*80}\n")

    # Always exit successfully so GitHub Action commits results
    # (even if all URLs failed, we want to record the failures)
    if batch_data['batch_info']['successful'] == 0:
        print("Warning: No URLs were successfully fetched (but results were still saved)")

    sys.exit(0)

if __name__ == '__main__':
    main()

#!/usr/bin/env python3
"""
Firecrawl URL Fetcher
Simple wrapper for Firecrawl API to fetch web page content.

Usage:
    python3 fetch_url.py <url>
    python3 fetch_url.py <url> --format json

Returns:
    By default: Pretty-printed status and content
    With --format json: JSON output for programmatic use
"""

import os
import sys
import json
import requests
from pathlib import Path

def load_api_key():
    """Load Firecrawl API key from .env file"""
    env_file = Path(__file__).parent.parent.parent.parent / '.env'

    if env_file.exists():
        with open(env_file) as f:
            for line in f:
                if line.startswith('FIRECRAWL_API_KEY='):
                    return line.split('=', 1)[1].strip()

    # Fallback to environment variable
    return os.getenv('FIRECRAWL_API_KEY')

def fetch_url(url, api_key):
    """
    Fetch URL content using Firecrawl API

    Returns:
        dict: {
            'success': bool,
            'status_code': int,
            'url': str,
            'content': str (markdown),
            'title': str,
            'error': str (if failed)
        }
    """

    # Firecrawl API endpoint
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
        response = requests.post(api_url, headers=headers, json=payload, timeout=30)

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
            'error': 'Request timeout after 30 seconds',
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

def print_pretty(result):
    """Pretty print the result for human reading"""
    print("="*80)
    print(f"URL: {result['url']}")
    print(f"Status: {'✓ SUCCESS' if result['success'] else '✗ FAILED'}")
    print(f"HTTP Status Code: {result['status_code']}")

    if result['success']:
        print(f"Title: {result.get('title', 'N/A')}")
        print("-"*80)
        print("Content (first 500 chars):")
        print(result['content'][:500])
        if len(result['content']) > 500:
            print(f"\n... ({len(result['content']) - 500} more characters)")
    else:
        print(f"Error: {result.get('error', 'Unknown error')}")

    print("="*80)

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 fetch_url.py <url> [--format json]")
        sys.exit(1)

    url = sys.argv[1]
    output_format = 'pretty'

    if len(sys.argv) > 2 and sys.argv[2] == '--format' and len(sys.argv) > 3:
        output_format = sys.argv[3]

    # Load API key
    api_key = load_api_key()
    if not api_key:
        print("Error: FIRECRAWL_API_KEY not found in .env file or environment")
        sys.exit(1)

    # Fetch URL
    result = fetch_url(url, api_key)

    # Output
    if output_format == 'json':
        print(json.dumps(result, indent=2))
    else:
        print_pretty(result)

    # Exit code based on success
    sys.exit(0 if result['success'] else 1)

if __name__ == '__main__':
    main()

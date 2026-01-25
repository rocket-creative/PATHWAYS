#!/bin/bash

################################################################################
# ERROR LOGGER
# Version: 2026.1
#
# Usage:
#   ./log-error.sh                    # Interactive mode (paste error)
#   ./log-error.sh "error message"    # Direct mode
#   cat error.txt | ./log-error.sh    # Pipe mode
#
# This script:
# - Logs errors to .ai-errors.log in project root
# - Keeps file size tiny (auto-rotates at 50KB)
# - Never commits to git (in .gitignore)
# - AI can read to learn from past mistakes
################################################################################

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Find project root (look for .git directory)
find_project_root() {
    local dir="$PWD"
    while [[ "$dir" != "/" ]]; do
        if [[ -d "$dir/.git" ]]; then
            echo "$dir"
            return 0
        fi
        dir=$(dirname "$dir")
    done

    # If no .git found, use current directory
    echo "$PWD"
}

PROJECT_ROOT=$(find_project_root)
ERROR_LOG="$PROJECT_ROOT/.ai-errors.log"
MAX_SIZE=51200  # 50KB in bytes

# Ensure .gitignore includes .ai-errors.log
ensure_gitignore() {
    local gitignore="$PROJECT_ROOT/.gitignore"

    if [[ -f "$gitignore" ]]; then
        if ! grep -q "^\.ai-errors\.log$" "$gitignore" 2>/dev/null; then
            echo "" >> "$gitignore"
            echo "# AI Error Log (never commit)" >> "$gitignore"
            echo ".ai-errors.log" >> "$gitignore"
            echo -e "${GREEN}✓ Added .ai-errors.log to .gitignore${NC}"
        fi
    fi
}

# Rotate log if too large
rotate_log_if_needed() {
    if [[ -f "$ERROR_LOG" ]]; then
        local size=$(stat -f%z "$ERROR_LOG" 2>/dev/null || stat -c%s "$ERROR_LOG" 2>/dev/null || echo 0)

        if [[ $size -gt $MAX_SIZE ]]; then
            # Keep only last 30 entries
            tail -n 30 "$ERROR_LOG" > "$ERROR_LOG.tmp"
            mv "$ERROR_LOG.tmp" "$ERROR_LOG"
            echo -e "${YELLOW}⚠ Log rotated (kept last 30 entries)${NC}"
        fi
    fi
}

# Get error type from content
detect_error_type() {
    local error="$1"

    if echo "$error" | grep -qi "npm\|yarn\|pnpm"; then
        echo "npm"
    elif echo "$error" | grep -qi "typescript\|\.ts\|\.tsx"; then
        echo "typescript"
    elif echo "$error" | grep -qi "eslint\|lint"; then
        echo "eslint"
    elif echo "$error" | grep -qi "build\|webpack\|turbo"; then
        echo "build"
    elif echo "$error" | grep -qi "vercel"; then
        echo "vercel"
    elif echo "$error" | grep -qi "git"; then
        echo "git"
    elif echo "$error" | grep -qi "docker"; then
        echo "docker"
    elif echo "$error" | grep -qi "next"; then
        echo "next"
    elif echo "$error" | grep -qi "react"; then
        echo "react"
    elif echo "$error" | grep -qi "css\|tailwind"; then
        echo "css"
    else
        echo "general"
    fi
}

# Extract key info from error
extract_key_info() {
    local error="$1"

    # Try to find the actual error message
    local key_line=$(echo "$error" | grep -i "error\|failed\|cannot\|undefined\|unexpected" | head -1)

    if [[ -z "$key_line" ]]; then
        # Fallback to first non-empty line
        key_line=$(echo "$error" | grep -v '^$' | head -1)
    fi

    # Truncate if too long
    if [[ ${#key_line} -gt 120 ]]; then
        key_line="${key_line:0:117}..."
    fi

    echo "$key_line"
}

# Log the error
log_error() {
    local error="$1"
    local timestamp=$(date "+%Y-%m-%d %H:%M:%S")
    local error_type=$(detect_error_type "$error")
    local key_info=$(extract_key_info "$error")
    local git_branch=$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo "unknown")

    # Create compact log entry
    cat >> "$ERROR_LOG" <<EOF

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[$timestamp] [$error_type] [$git_branch]
$key_info

Full Error:
$error
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
EOF

    echo -e "${GREEN}✓ Error logged to .ai-errors.log${NC}"
    echo -e "${BLUE}Type: $error_type${NC}"
    echo -e "${BLUE}Branch: $git_branch${NC}"
}

# Show recent errors
show_recent() {
    if [[ ! -f "$ERROR_LOG" ]]; then
        echo -e "${YELLOW}No errors logged yet${NC}"
        return
    fi

    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}Last 3 Errors:${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    tail -n 100 "$ERROR_LOG" | grep -B 50 "━━━━━" | tail -n 50
}

# Show stats
show_stats() {
    if [[ ! -f "$ERROR_LOG" ]]; then
        echo -e "${YELLOW}No errors logged yet${NC}"
        return
    fi

    local total=$(grep -c "^\[2" "$ERROR_LOG" || echo 0)
    local npm_errors=$(grep -c "\[npm\]" "$ERROR_LOG" || echo 0)
    local ts_errors=$(grep -c "\[typescript\]" "$ERROR_LOG" || echo 0)
    local build_errors=$(grep -c "\[build\]" "$ERROR_LOG" || echo 0)
    local size=$(stat -f%z "$ERROR_LOG" 2>/dev/null || stat -c%s "$ERROR_LOG" 2>/dev/null || echo 0)
    local size_kb=$((size / 1024))

    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}Error Log Statistics${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo "Total errors logged: $total"
    echo "File size: ${size_kb}KB / 50KB max"
    echo ""
    echo "By type:"
    echo "  - npm errors: $npm_errors"
    echo "  - TypeScript errors: $ts_errors"
    echo "  - Build errors: $build_errors"
    echo ""
    echo "Location: $ERROR_LOG"
}

# Main logic
main() {
    ensure_gitignore
    rotate_log_if_needed

    # Check for flags
    if [[ "$1" == "--recent" || "$1" == "-r" ]]; then
        show_recent
        exit 0
    fi

    if [[ "$1" == "--stats" || "$1" == "-s" ]]; then
        show_stats
        exit 0
    fi

    if [[ "$1" == "--help" || "$1" == "-h" ]]; then
        cat <<EOF
Error Logger - Log errors for AI learning

Usage:
  ./log-error.sh                    # Interactive mode (paste error)
  ./log-error.sh "error message"    # Direct mode
  cat error.txt | ./log-error.sh    # Pipe mode
  ./log-error.sh --recent           # Show last 3 errors
  ./log-error.sh --stats            # Show statistics
  ./log-error.sh --help             # Show this help

The error log is saved to .ai-errors.log in your project root.
This file is automatically added to .gitignore.

File auto-rotates when it reaches 50KB.
EOF
        exit 0
    fi

    # Get error content
    local error_content=""

    if [[ -n "$1" ]]; then
        # Direct mode: error passed as argument
        error_content="$*"
    elif [[ -p /dev/stdin ]]; then
        # Pipe mode: error piped in
        error_content=$(cat)
    else
        # Interactive mode: prompt for paste
        echo -e "${BLUE}Paste error below, then press Ctrl+D (or Ctrl+Z on Windows):${NC}"
        error_content=$(cat)
    fi

    # Validate we have content
    if [[ -z "$error_content" ]]; then
        echo -e "${RED}✗ No error content provided${NC}"
        exit 1
    fi

    # Log it
    log_error "$error_content"

    # Show stats
    echo ""
    show_stats
}

main "$@"

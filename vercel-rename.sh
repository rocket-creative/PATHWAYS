#!/bin/bash
# Vercel CLI Project Management Script

set -e

echo "🔧 Vercel Project Setup"
echo "======================="
echo ""

# Use local vercel CLI
VERCEL="./node_modules/.bin/vercel"

# Check if logged in
echo "✓ Checking authentication..."
$VERCEL whoami

echo ""
echo "📋 Current projects:"
$VERCEL projects ls | grep pathways

echo ""
echo "⚠️  NOTE: Vercel CLI doesn't support renaming projects"
echo "You need to rename via Dashboard:"
echo ""
echo "1. Go to: https://vercel.com/georges-projects-3ea4d6aa/pathways-8h3u/settings"
echo "2. General → Project Name → Change to: pathways-main"
echo "3. Click Save"
echo ""
echo "After renaming, we'll create the other 3 projects..."

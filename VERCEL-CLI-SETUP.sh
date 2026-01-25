#!/bin/bash
# Vercel CLI Setup Script
# Configures multiple Vercel projects from one repo

set -e  # Exit on error

echo "🚀 Pathways Vercel Configuration"
echo "================================="
echo ""

# Configuration
TEAM="georges-projects-3ea4d6aa"
REPO="rocket-creative/PATHWAYS"
BRANCH_PROD="main"
BRANCH_DEV="dev"

# Project names
PROJECT_MAIN="pathways-main"
PROJECT_WISDOM="pathways-wisdom"
PROJECT_WELLNESS="pathways-wellness"
PROJECT_CRM="pathways-crm"

echo "📋 Step 1: Creating/Updating Projects"
echo "--------------------------------------"

# Main project
echo "→ Configuring $PROJECT_MAIN..."
npx vercel project add $PROJECT_MAIN --team=$TEAM || echo "  Project may already exist"

# Wisdom project
echo "→ Configuring $PROJECT_WISDOM..."
npx vercel project add $PROJECT_WISDOM --team=$TEAM || echo "  Project may already exist"

# Wellness project
echo "→ Configuring $PROJECT_WELLNESS..."
npx vercel project add $PROJECT_WELLNESS --team=$TEAM || echo "  Project may already exist"

# CRM project
echo "→ Configuring $PROJECT_CRM..."
npx vercel project add $PROJECT_CRM --team=$TEAM || echo "  Project may already exist"

echo ""
echo "📋 Step 2: Linking Projects to Repository"
echo "------------------------------------------"

# Link each project to the GitHub repo
for project in $PROJECT_MAIN $PROJECT_WISDOM $PROJECT_WELLNESS $PROJECT_CRM; do
    echo "→ Linking $project to GitHub..."
    npx vercel project link $project --repo=$REPO --team=$TEAM || echo "  Already linked"
done

echo ""
echo "📋 Step 3: Setting Production Branch"
echo "-------------------------------------"

for project in $PROJECT_MAIN $PROJECT_WISDOM $PROJECT_WELLNESS $PROJECT_CRM; do
    echo "→ Setting production branch for $project..."
    npx vercel git connect --production-branch=$BRANCH_PROD --team=$TEAM $project || echo "  Already configured"
done

echo ""
echo "✅ Vercel CLI configuration complete!"
echo ""
echo "Next steps:"
echo "1. Add custom domains in Vercel Dashboard"
echo "2. Configure DNS (CNAME records)"
echo "3. Deploy from main branch"
echo ""

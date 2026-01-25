#!/bin/bash

################################################################################
# PROJECT SETUP AUTOMATION SCRIPT
# Version: 2026.1
# Author: George's Development System
#
# Usage:
#   ./new-project.sh PROJECTNAME [--next] [--vercel] [--simple]
#
# This script automates:
# - Git initialization with PROJECT_DEV and PROJECT_MAIN branches
# - GitHub repository creation
# - Initial numbered commit (001_chore_initial-project-setup)
# - Stack installation (Next.js or simple)
# - HIPAA vs Regular compliance selection
# - Boilerplate file generation
# - Vercel linking (optional)
################################################################################

set -e  # Exit on error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper functions
print_step() {
    echo -e "${BLUE}▶ $1${NC}"
}

print_success() {
    echo -e "${GREEN}✓ $1${NC}"
}

print_error() {
    echo -e "${RED}✗ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠ $1${NC}"
}

################################################################################
# CHECK PREREQUISITES
################################################################################

check_prerequisites() {
    print_step "Checking prerequisites..."

    # Check for git
    if ! command -v git &> /dev/null; then
        print_error "git is not installed. Please install git first."
        exit 1
    fi

    # Check for gh (GitHub CLI)
    if ! command -v gh &> /dev/null; then
        print_error "GitHub CLI (gh) is not installed."
        echo "Install with: brew install gh"
        exit 1
    fi

    # Check if authenticated with GitHub
    if ! gh auth status &> /dev/null; then
        print_error "Not authenticated with GitHub."
        echo "Run: gh auth login"
        exit 1
    fi

    # Check for node/npm (if doing web project)
    if [[ "$PROJECT_TYPE" == "next" ]] && ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi

    print_success "All prerequisites met"
}

################################################################################
# PARSE ARGUMENTS
################################################################################

PROJECT_NAME=""
PROJECT_TYPE="next"  # Default to Next.js
LINK_VERCEL=false
COMPLIANCE_TYPE=""  # Will be set via prompt

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        --next)
            PROJECT_TYPE="next"
            shift
            ;;
        --simple)
            PROJECT_TYPE="simple"
            shift
            ;;
        --vercel)
            LINK_VERCEL=true
            shift
            ;;
        --help)
            echo "Usage: ./new-project.sh PROJECTNAME [OPTIONS]"
            echo ""
            echo "Options:"
            echo "  --next      Create Next.js project (default)"
            echo "  --simple    Create simple project (no framework)"
            echo "  --vercel    Link to Vercel after setup"
            echo "  --help      Show this help message"
            echo ""
            echo "Examples:"
            echo "  ./new-project.sh MYAPP --next --vercel"
            echo "  ./new-project.sh MYTOOL --simple"
            exit 0
            ;;
        *)
            if [[ -z "$PROJECT_NAME" ]]; then
                PROJECT_NAME="$1"
            else
                print_error "Unknown argument: $1"
                exit 1
            fi
            shift
            ;;
    esac
done

# Validate project name
if [[ -z "$PROJECT_NAME" ]]; then
    print_error "Project name is required"
    echo "Usage: ./new-project.sh PROJECTNAME [OPTIONS]"
    exit 1
fi

# Convert project name to uppercase for consistency
PROJECT_NAME=$(echo "$PROJECT_NAME" | tr '[:lower:]' '[:upper:]')

################################################################################
# COMPLIANCE TYPE PROMPT
################################################################################

ask_compliance_type() {
    echo ""
    print_step "Select compliance type:"
    echo "  1) Regular (standard web app)"
    echo "  2) HIPAA Compliant (handles Protected Health Information)"
    echo ""
    read -p "Enter choice [1-2]: " choice

    case $choice in
        1)
            COMPLIANCE_TYPE="regular"
            print_success "Selected: Regular (standard)"
            ;;
        2)
            COMPLIANCE_TYPE="hipaa"
            print_success "Selected: HIPAA Compliant"
            print_warning "HIPAA mode requires specific infrastructure:"
            print_warning "- AWS or Google Cloud (with BAA)"
            print_warning "- Encrypted database (RDS/Cloud SQL)"
            print_warning "- Auth0 Healthcare or AWS Cognito"
            print_warning "- No Vercel standard tier (no BAA)"

            if [[ "$LINK_VERCEL" == true ]]; then
                print_warning "Disabling Vercel linking (not HIPAA compliant without enterprise BAA)"
                LINK_VERCEL=false
            fi
            ;;
        *)
            print_error "Invalid choice"
            exit 1
            ;;
    esac
}

################################################################################
# CREATE PROJECT DIRECTORY
################################################################################

create_directory() {
    print_step "Creating project directory: $PROJECT_NAME"

    if [[ -d "$PROJECT_NAME" ]]; then
        print_error "Directory $PROJECT_NAME already exists"
        read -p "Delete and recreate? [y/N]: " confirm
        if [[ "$confirm" != "y" ]]; then
            exit 1
        fi
        rm -rf "$PROJECT_NAME"
    fi

    mkdir "$PROJECT_NAME"
    cd "$PROJECT_NAME"
    print_success "Created directory: $PROJECT_NAME"
}

################################################################################
# INITIALIZE GIT
################################################################################

init_git() {
    print_step "Initializing git repository..."

    git init -b main
    print_success "Git initialized"
}

################################################################################
# CREATE GITHUB REPOSITORY
################################################################################

create_github_repo() {
    print_step "Creating GitHub repository: $PROJECT_NAME"

    gh repo create "$PROJECT_NAME" \
        --private \
        --source=. \
        --remote=origin \
        --description "Auto-generated project: $PROJECT_NAME"

    print_success "GitHub repository created"
}

################################################################################
# CREATE BRANCHES
################################################################################

create_branches() {
    print_step "Creating project branches..."

    # Create DEV branch
    git checkout -b "${PROJECT_NAME}_DEV"
    print_success "Created branch: ${PROJECT_NAME}_DEV"

    # Create MAIN branch
    git checkout -b "${PROJECT_NAME}_MAIN"
    print_success "Created branch: ${PROJECT_NAME}_MAIN"

    # Switch back to DEV for work
    git checkout "${PROJECT_NAME}_DEV"
    print_success "Switched to ${PROJECT_NAME}_DEV for development"
}

################################################################################
# INSTALL DEPENDENCIES
################################################################################

install_dependencies() {
    if [[ "$PROJECT_TYPE" == "next" ]]; then
        print_step "Installing Next.js with TypeScript..."

        if [[ "$COMPLIANCE_TYPE" == "hipaa" ]]; then
            print_step "Installing HIPAA-compliant stack..."

            npx create-next-app@latest . \
                --typescript \
                --tailwind \
                --app \
                --no-src-dir \
                --import-alias "@/*" \
                --use-npm

            # Install HIPAA-specific dependencies
            npm install --save \
                zod \
                bcrypt \
                @aws-sdk/client-s3 \
                @aws-sdk/client-cloudwatch-logs

            npm install --save-dev \
                @types/bcrypt

            print_success "Installed HIPAA-compliant Next.js stack"

        else
            print_step "Installing standard Next.js stack..."

            npx create-next-app@latest . \
                --typescript \
                --tailwind \
                --app \
                --no-src-dir \
                --import-alias "@/*" \
                --use-npm

            # Install standard dependencies
            npm install --save zod

            print_success "Installed standard Next.js stack"
        fi

        # Install dev dependencies
        npm install --save-dev \
            eslint-config-next \
            prettier \
            @playwright/test

        print_success "Dev dependencies installed"
    else
        print_step "Skipping framework installation (simple project)"

        # Create basic package.json for simple projects
        cat > package.json <<EOF
{
  "name": "$(echo "$PROJECT_NAME" | tr '[:upper:]' '[:lower:]')",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
}
EOF
        print_success "Created basic package.json"
    fi
}

################################################################################
# CREATE BOILERPLATE FILES
################################################################################

create_boilerplate_files() {
    print_step "Creating boilerplate files..."

    # .gitignore
    cat > .gitignore <<'EOF'
# Dependencies
node_modules/
.pnp/
.pnp.js

# Testing
coverage/
.nyc_output/

# Production
build/
dist/
.next/
out/

# Environment
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Vercel
.vercel

# TypeScript
*.tsbuildinfo
next-env.d.ts
EOF
    print_success "Created .gitignore"

    # .env.example
    if [[ "$COMPLIANCE_TYPE" == "hipaa" ]]; then
        cat > .env.example <<'EOF'
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# AWS Configuration (HIPAA)
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_S3_BUCKET_NAME=

# Database (AWS RDS with encryption)
DATABASE_URL=postgresql://user:password@host:5432/dbname?sslmode=require

# Auth (Auth0 Healthcare or AWS Cognito)
AUTH_SECRET=
AUTH_URL=
AUTH_ISSUER=

# Logging (AWS CloudWatch)
CLOUDWATCH_LOG_GROUP=
CLOUDWATCH_LOG_STREAM=

# Session timeout (HIPAA requires 15min max)
SESSION_TIMEOUT_MINUTES=15

# Analytics (NO PHI in tracking)
# NEXT_PUBLIC_GA_MEASUREMENT_ID=
EOF
    else
        cat > .env.example <<'EOF'
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Analytics (Consent-Gated)
NEXT_PUBLIC_GA_MEASUREMENT_ID=
NEXT_PUBLIC_GOOGLE_ADS_ID=
NEXT_PUBLIC_META_PIXEL_ID=

# Database (if needed)
# DATABASE_URL=

# API Keys (server-side only)
# API_SECRET_KEY=
EOF
    fi
    print_success "Created .env.example"

    # README.md
    cat > README.md <<EOF
# $PROJECT_NAME

Compliance: **$(echo "$COMPLIANCE_TYPE" | tr '[:lower:]' '[:upper:]')**

## Getting Started

\`\`\`bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Git Workflow

- **Development:** \`${PROJECT_NAME}_DEV\`
- **Production:** \`${PROJECT_NAME}_MAIN\`

### Commit Format

\`\`\`
NNN_type_brief-description
\`\`\`

Types: \`chore\`, \`feat\`, \`fix\`, \`update\`, \`refactor\`, \`docs\`, \`test\`, \`style\`, \`perf\`

### Version Tags

\`v01\`, \`v02\`, \`v03\`, etc.

## Stack

- Framework: Next.js (App Router)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS
$(if [[ "$COMPLIANCE_TYPE" == "hipaa" ]]; then
echo "- Hosting: AWS (HIPAA compliant with BAA)"
echo "- Database: AWS RDS PostgreSQL (encrypted)"
echo "- Auth: Auth0 Healthcare / AWS Cognito"
echo "- Storage: AWS S3 (encrypted)"
else
echo "- Hosting: Vercel"
echo "- Database: Vercel Postgres / Supabase"
fi)

## Deployment

$(if [[ "$COMPLIANCE_TYPE" == "hipaa" ]]; then
echo "⚠️ **HIPAA Compliance Required**"
echo ""
echo "- All services must have signed BAA"
echo "- Encryption at rest and in transit"
echo "- Audit logging enabled"
echo "- MFA required for all users"
echo "- 15-minute session timeout"
echo "- NO PHI in logs or localStorage"
else
echo "\`\`\`bash"
echo "# Deploy to production"
echo "git checkout ${PROJECT_NAME}_MAIN"
echo "git merge ${PROJECT_NAME}_DEV"
echo "git tag vNN"
echo "git push origin ${PROJECT_NAME}_MAIN --tags"
echo "\`\`\`"
fi)

---

Created: $(date +"%Y-%m-%d")
EOF
    print_success "Created README.md"

    # Create next.config.js with security headers (if Next.js)
    if [[ "$PROJECT_TYPE" == "next" ]]; then
        cat > next.config.js <<'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
EOF
        print_success "Created next.config.js with security headers"
    fi

    # Add .ai-errors.log to .gitignore if not already there
    if ! grep -q "^\.ai-errors\.log$" .gitignore 2>/dev/null; then
        echo "" >> .gitignore
        echo "# AI Error Log (never commit)" >> .gitignore
        echo ".ai-errors.log" >> .gitignore
        print_success "Added .ai-errors.log to .gitignore"
    fi
}

################################################################################
# CREATE INITIAL COMMIT
################################################################################

create_initial_commit() {
    print_step "Creating initial commit..."

    git add .
    git commit -m "$(cat <<'EOF'
001_chore_initial-project-setup

- Initialized git repository
- Created GitHub repository
- Set up branches: PROJECT_DEV, PROJECT_MAIN
- Installed dependencies
- Created boilerplate files
- Compliance: COMPLIANCE_TYPE

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
EOF
)" | sed "s/PROJECT/${PROJECT_NAME}/g; s/COMPLIANCE_TYPE/${COMPLIANCE_TYPE}/g"

    print_success "Initial commit created: 001_chore_initial-project-setup"
}

################################################################################
# PUSH TO GITHUB
################################################################################

push_to_github() {
    print_step "Pushing to GitHub..."

    # Push DEV branch
    git push -u origin "${PROJECT_NAME}_DEV"
    print_success "Pushed ${PROJECT_NAME}_DEV to GitHub"

    # Push MAIN branch
    git checkout "${PROJECT_NAME}_MAIN"
    git push -u origin "${PROJECT_NAME}_MAIN"
    print_success "Pushed ${PROJECT_NAME}_MAIN to GitHub"

    # Switch back to DEV
    git checkout "${PROJECT_NAME}_DEV"
    print_success "Back on ${PROJECT_NAME}_DEV"
}

################################################################################
# LINK TO VERCEL (OPTIONAL)
################################################################################

link_vercel() {
    if [[ "$LINK_VERCEL" == true ]]; then
        print_step "Linking to Vercel..."

        if ! command -v vercel &> /dev/null; then
            print_warning "Vercel CLI not installed. Skipping Vercel linking."
            echo "Install with: npm i -g vercel"
            return
        fi

        vercel link --yes
        print_success "Linked to Vercel"

        # Set environment variables
        print_step "Setting Vercel environment variables..."
        vercel env add NEXT_PUBLIC_SITE_URL production

        print_success "Vercel configuration complete"
    fi
}

################################################################################
# PRINT SUMMARY
################################################################################

print_summary() {
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    print_success "PROJECT SETUP COMPLETE!"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "Project:     $PROJECT_NAME"
    echo "Type:        $(if [[ "$PROJECT_TYPE" == "next" ]]; then echo "Next.js"; else echo "Simple"; fi)"
    echo "Compliance:  $(echo "$COMPLIANCE_TYPE" | tr '[:lower:]' '[:upper:]')"
    echo ""
    echo "Branches:"
    echo "  ✓ ${PROJECT_NAME}_DEV (current)"
    echo "  ✓ ${PROJECT_NAME}_MAIN"
    echo ""
    echo "Next Steps:"
    echo ""
    echo "  1. cd $PROJECT_NAME"
    if [[ "$PROJECT_TYPE" == "next" ]]; then
        echo "  2. cp .env.example .env.local"
        echo "  3. npm run dev"
    fi
    echo ""
    echo "  Your next commit will be: 002_type_description"
    echo ""

    if [[ "$COMPLIANCE_TYPE" == "hipaa" ]]; then
        print_warning "HIPAA COMPLIANCE REMINDERS:"
        echo "  • All vendors must have signed BAA"
        echo "  • Enable encryption at rest and in transit"
        echo "  • Configure audit logging"
        echo "  • Require MFA for all users"
        echo "  • Set 15-minute session timeout"
        echo "  • NEVER log PHI"
        echo "  • NEVER store PHI in localStorage"
    fi

    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
}

################################################################################
# MAIN EXECUTION
################################################################################

main() {
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "  PROJECT SETUP AUTOMATION"
    echo "  Version: 2026.1"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""

    check_prerequisites
    ask_compliance_type
    create_directory
    init_git
    install_dependencies
    create_boilerplate_files
    create_branches
    create_initial_commit
    create_github_repo
    push_to_github
    link_vercel
    print_summary
}

# Run main function
main

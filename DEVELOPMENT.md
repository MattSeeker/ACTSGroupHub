# ACTS Group Hub - Development Guide

## Getting Started

### Prerequisites
- Python 3.x (for local server) OR Node.js (alternative)
- Git
- Web browser

### Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mattseeker/ACTSGroupHub.git
   cd ACTSGroupHub
   ```

2. **Switch to development branch:**
   ```bash
   git checkout development
   ```

3. **Start local development server:**
   
   **Option A - Python (recommended):**
   ```bash
   npm run dev
   # or directly: python3 -m http.server 8000
   ```
   
   **Option B - Node.js:**
   ```bash
   npm install
   npm run dev-node
   ```

4. **Open in browser:**
   - Visit: `http://localhost:8000`

### Project Structure
- `index.html` - Main landing page
- `acts_admin_dashboard.html` - Admin dashboard
- `acts_calendar.html` - ACTS calendar view
- `acts_newsletter.html` - Newsletter page
- `stf_calendar.html` - STF calendar view
- `acts_project_summary.md` - Project documentation

### Development Workflow
1. Work on the `development` branch
2. Test changes locally
3. Commit and push to `development` branch
4. Pull from `development` on other machines
5. Merge to `main` when ready for production

### Multi-Machine Development
- Always pull latest changes: `git pull origin development`
- Push changes regularly: `git push origin development`
- Use meaningful commit messages
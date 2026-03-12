# CRM Opportunity Dashboard

Single-page CRM with Opportunity, Profile, and System Settings. Each section has three layout designs (Design 1, Design 2, Design 3).

## Contents

- **index.html** – Main app:
  - **Opportunity** – Dashboard (Overview, Opportunity Info, Lead & Referral, Notes, Schedule, Measurement, Estimates, Gallery, Tasks, Communication, Insurance, Checklist).
  - **Profile** – User profile with Basic / Job / Emergency and three layout designs.
  - **System Settings** – Company Info, Locations, Departments, Zipcodes, Integrations, Email, Payment Obligations with three layout designs.

## Run locally

Open `index.html` in a browser (no build step).

## Publish to GitHub (public)

1. Create a new repository on [GitHub](https://github.com/new) (e.g. `crm-opportunity-dashboard`), **do not** add README or .gitignore.
2. In this folder, add the remote and push:

   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

3. In GitHub: **Settings → General → Danger Zone → Change visibility → Public**.

## Deploy to GitHub Pages

1. In the repo go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` (or run the workflow manually: **Actions** → **Deploy to GitHub Pages** → **Run workflow**).
4. When the workflow finishes, open **https://YOUR_USERNAME.github.io/YOUR_REPO/**.

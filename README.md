# CRM Opportunity Dashboard

CRM with Opportunity, Profile, and Company Info (System Settings). Multiple layout designs per section.

**ดูเว็บได้ที่:** [https://muekotchamon.github.io/opportunity-dashboard/](https://muekotchamon.github.io/opportunity-dashboard/)

## Contents

- **crm-dashboard/** – Next.js app:
  - **Opportunity** – Dashboard (Overview, Opportunity Info, Lead & Referral, Notes, Schedule, Measurement, Estimates, Gallery, Tasks, Communication, Insurance, Checklist).
  - **Profile** – User profile with Basic / Job / Document and multiple layout designs.
  - **Company Info** – Settings: Locations, Departments, Zipcodes, Integrations, Email, Payment Obligations with multiple layout designs.

## Run locally

```bash
cd crm-dashboard
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser.

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

### ถ้าไซต์ยังไม่ Public (หรือเข้าไม่ได้)

- **Repo ต้องเป็น Public:** **Settings** → **General** → เลื่อนลงถึง **Danger Zone** → **Change repository visibility** → เลือก **Public** → ยืนยัน
- **Pages ต้อง deploy จาก Actions:** **Settings** → **Pages** → **Build and deployment** → **Source** เลือก **GitHub Actions** (ไม่ใช่ Deploy from a branch)
- หลังเปลี่ยนแล้ว รอ workflow ใน **Actions** ทำงานเสร็จ แล้วลองเปิด **https://muekotchamon.github.io/opportunity-dashboard/** อีกครั้ง

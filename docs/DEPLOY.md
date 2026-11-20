# UV Equipments — GitHub & Vercel Deployment Guide

This guide provides the complete step-by-step instructions for publishing the **UV Equipments** codebase to GitHub, deploying the Next.js production application to Vercel, and configuring the official domain `uvequipments.com` with DNS and SSL certification.

> **CRITICAL NOTICE**: As per project specifications, **THE WEBSITE IS NOT CURRENTLY LIVE**. It is built, tested, and staged locally in your workspace. It will only become live on the internet once you complete the GitHub push and Vercel import steps outlined below.

---

## Prerequisites

1. A [GitHub](https://github.com/) account.
2. A [Vercel](https://vercel.com/) account (can sign in with GitHub).
3. Access to your Domain Registrar DNS Management console for `uvequipments.com` (e.g. GoDaddy, Namecheap, Google Domains / Squarespace, Cloudflare).

---

## Step 1: Initialize Git & Commit Code (Local)

The repository has been initialized locally. If you ever need to create a fresh commit, run:

```bash
cd "C:\Users\Dell\.gemini\antigravity\scratch\uv-equipments"

# Verify git status
git status

# Stage all files
git add .

# Create initial commit
git commit -m "feat: complete industrial Next.js platform for UV Equipments"
```

---

## Step 2: Create a New GitHub Repository

1. Open your browser and navigate to [github.com/new](https://github.com/new).
2. Enter the repository details:
   - **Repository name**: `uv-equipments` (or your preferred name)
   - **Description**: `Official web platform for UV Equipments — Industrial Crushing and Screening Solutions`
   - **Visibility**: **Private** (recommended) or **Public**
   - **Do NOT** initialize with a README, .gitignore, or license (these already exist in the project).
3. Click **Create repository**.
4. Copy the remote URL provided by GitHub (e.g. `https://github.com/<your-username>/uv-equipments.git`).

---

## Step 3: Link Remote & Push to GitHub

In your terminal or command prompt, link your local repository and push the `main` branch:

```bash
# Set branch to main
git branch -M main

# Add your GitHub repository as origin
git remote add origin https://github.com/<your-username>/uv-equipments.git

# Push the codebase (requires your GitHub credentials / token)
git push -u origin main
```

> **Note**: Do not push without confirming your repository name and having your GitHub access token or SSH key ready.

---

## Step 4: Import Project into Vercel

1. Log into your [Vercel Dashboard](https://vercel.com/).
2. Click **Add New...** → **Project**.
3. Under **Import Git Repository**, locate and select `uv-equipments`. Click **Import**.
4. In the **Configure Project** screen:
   - **Project Name**: `uv-equipments`
   - **Framework Preset**: `Next.js` (detected automatically)
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `next build` (leave default)
   - **Output Directory**: `.next` (leave default)
   - **Install Command**: `npm install` (leave default)
   - **Environment Variables**: No environment variables are required for default operation.
5. Click **Deploy**.
6. Vercel will run `npm install`, `npm run build`, and deploy the production artifacts to an Edge network URL (e.g., `uv-equipments.vercel.app`).

---

## Step 5: Add Custom Domain (`uvequipments.com`)

1. In your Vercel Project Dashboard, navigate to **Settings** → **Domains**.
2. In the input box, enter `uvequipments.com` and click **Add**.
3. When prompted, select **Add uvequipments.com and redirect www.uvequipments.com to it** (or vice versa).
4. Vercel will display the exact DNS records required:
   - **Apex Record (Root Domain)**:
     - Type: `A`
     - Name: `@` (or leave blank depending on registrar)
     - Value: `76.76.21.21`
   - **CNAME Record (Subdomain)**:
     - Type: `CNAME`
     - Name: `www`
     - Value: `cname.vercel-dns.com`

---

## Step 6: Configure DNS at Your Domain Registrar

1. Log in to your domain registrar (where `uvequipments.com` was purchased).
2. Go to the **DNS Management / DNS Zone Editor** section for `uvequipments.com`.
3. Add or update the following records:

| Record Type | Host / Name | Target / Value / Points to | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `76.76.21.21` | Automatic / 3600 |
| **CNAME** | `www` | `cname.vercel-dns.com` | Automatic / 3600 |

4. Save the DNS configuration.
5. Return to the Vercel **Domains** settings page. DNS propagation typically takes between 2 minutes and 24 hours. Once verified, Vercel will automatically provision a valid **Let's Encrypt SSL/TLS Certificate** and show a green **Valid Configuration** status.

---

## Step 7: Post-Deployment Verification Checklist

Once Vercel confirms the domain is active:
- [ ] Open `https://www.uvequipments.com` in a browser and verify the SSL padlock icon.
- [ ] Visit all six product pages:
  - `/products/grizzly-feeder`
  - `/products/vertical-wave-jaw-crusher`
  - `/products/horizontal-wave-cone-crusher`
  - `/products/circular-wave-screen`
  - `/products/multi-wave-vertical-shaft-impactor`
  - `/products/sand-washer-bucket-classifier`
- [ ] Test the Enquiry Form on `/contact` to verify the pre-filled `mailto:` link launches with the correct product and details.
- [ ] Verify `/sitemap.xml` and `/robots.txt` load correctly.

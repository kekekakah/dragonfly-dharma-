# Deployment Guide

## Live URL
**https://dragonfly-dharma.vercel.app**

## GitHub Repository
**https://github.com/kekekakah/dragonfly-dharma-**

---

## Auto-Deploy Setup (One-time, ~5 minutes)

The GitHub Actions workflow is in `.github/workflows/deploy.yml` but requires a GitHub token with `workflow` scope to push. Here's how to complete the auto-deploy pipeline:

### Step 1 — Regenerate GitHub token with workflow scope
1. Go to: https://github.com/settings/tokens/new
2. Name: `dragonfly-dharma-deploy`
3. Check scopes: **`repo`** AND **`workflow`**
4. Generate and copy the token

### Step 2 — Add Vercel secrets to GitHub repo
Go to: https://github.com/kekekakah/dragonfly-dharma-/settings/secrets/actions

Add these 3 secrets:
| Secret Name | Value |
|---|---|
| `VERCEL_TOKEN` | *(your Vercel token — from vercel.com/account/tokens)* |
| `VERCEL_ORG_ID` | `team_e9Uez9LdX84rWYYNEtfnPn0I` |
| `VERCEL_PROJECT_ID` | `prj_ofntSg93KwhWj3l9VSAKjlvyp3iY` |

### Step 3 — Push the workflow file
With the new token (that has `workflow` scope), run:
```bash
git push https://YOUR_NEW_TOKEN@github.com/kekekakah/dragonfly-dharma-.git main
```

After that, every push to `main` will automatically build + Pagefind-index + deploy to Vercel.

---

## Manual Deploy (Until auto-deploy is wired)

From your terminal:
```bash
cd dragonfly-dharma
pnpm build
vercel deploy --prebuilt --token YOUR_VERCEL_TOKEN --yes
```

---

## How to Add a New Content Page (3 lines)

1. Create `src/content/treasury/your-slug.mdx` — copy `spring-mugwort.mdx` as template
2. Push to `main` branch on GitHub
3. Done — page is live at `/treasury/your-slug/` within ~2 minutes

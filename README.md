# Dragonfly Dharma 食养 Treasury Hub

**蜻蜓法门 · 食养文库** — A bilingual (EN + 中文) educational resource on classical Chinese seasonal food wisdom.

> Educational & cultural reference only — not medical advice, diagnosis, or treatment. Consult a licensed practitioner. · 仅供教育与文化参考，非医疗建议、诊断或治疗，请咨询持牌专业人士。

---

## Stack

- **Framework:** [Astro](https://astro.build) v6 (static output)
- **Content:** MDX content collections with frontmatter schema
- **Search:** [Pagefind](https://pagefind.app) (client-side, multilingual, runs post-build)
- **i18n:** Astro built-in i18n routing — English at `/`, Chinese at `/zh/`
- **Styling:** Custom CSS design system (warm rice-paper aesthetic, no framework)
- **Deploy:** Vercel (free tier) with GitHub Actions auto-deploy

---

## How to Add a New Markdown Page (3-line version)

1. **Create** a new `.mdx` file in `src/content/treasury/your-slug.mdx` with the required frontmatter (copy an existing file as template).
2. **Commit & push** to the `main` branch — GitHub Actions will run `pnpm build` (which includes Pagefind re-indexing) and deploy to Vercel automatically.
3. **Done** — your page is live at `/treasury/your-slug/` (EN) and `/zh/treasury/your-slug/` (ZH) within ~2 minutes.

---

## Frontmatter Schema

Every treasury entry must include these frontmatter fields:

```yaml
---
title: "English Title"
titleZh: "中文标题"
season: "spring"          # spring | summer | late-summer | autumn | winter | all
food: ["Food Name", "食材名"]
topic: ["Topic 1", "Topic 2"]
organ: ["Liver", "Spleen"]   # optional
classicalQuote: "古典原文引用"
classicalQuoteSource: "《典籍名称》 (Source Name)"
classicalQuoteZh: "白话释义（可选）"
summary: "Short English summary for card display."
summaryZh: "中文摘要，用于卡片展示。"
publishDate: 2024-03-01
draft: false              # set to true to hide from production
---
```

---

## Page Template Structure

Each article page renders:

1. **Article Header** — bilingual title, season badge, food/topic/organ tags
2. **Classical Quote Block** — verbatim cited passage (serif, gold border, source line)
3. **MDX Body** — your content, structured as:
   - `section-reading` — English contextual reading
   - `section-baihua` — 白话 Chinese explanation
   - `in-practice` — short "In Practice / 在生活中" note
4. **Community CTA** — email capture placeholder (NOT wired to Kajabi yet)
5. **Sources & Disclaimer** — full citation + bilingual educational disclaimer

---

## Kajabi / Make.com Integration (Placeholder)

The email capture form on every page is **intentionally disabled and not wired**. Look for this comment block in the source:

```html
<!-- ╔══════════════════════════════════════════════════════════╗ -->
<!-- ║  KAJABI / MAKE.COM INTEGRATION PLACEHOLDER              ║ -->
<!-- ║  Wire this email form to Kajabi via Make.com LATER.     ║ -->
<!-- ╚══════════════════════════════════════════════════════════╝ -->
```

To wire it later: replace the disabled form with a live form posting to a Make.com webhook, configure Make.com to forward to Kajabi contacts, and remove the `disabled` attributes.

---

## Custom Domain

The site is built to support `learn.dragonflydharma.org`. To swap in the custom domain:

1. In Vercel dashboard → Project Settings → Domains → Add `learn.dragonflydharma.org`
2. Add the CNAME record at your DNS provider as instructed by Vercel
3. No code changes needed

---

## Local Development

```bash
pnpm install        # Install dependencies
pnpm dev            # Start dev server at http://localhost:4321
pnpm build          # Build + Pagefind index (production)
pnpm preview        # Preview production build
```

---

## GitHub Actions Secrets Required

For the auto-deploy workflow, add these secrets to your GitHub repo Settings → Secrets:

| Secret | Where to find it |
|--------|-----------------|
| `VERCEL_TOKEN` | Vercel → Account Settings → Tokens |
| `VERCEL_ORG_ID` | Vercel → Account Settings → General |
| `VERCEL_PROJECT_ID` | Vercel → Project Settings → General |

---

## Disclaimer

All content is for **educational and cultural purposes only**. Nothing constitutes medical advice, diagnosis, or treatment. Consult a licensed healthcare practitioner for any health concerns.

仅供教育与文化参考，非医疗建议、诊断或治疗，请咨询持牌专业人士。

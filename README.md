# Isabella Café — Website

A handwritten static site for Isabella Café, Gżira. Plain HTML / CSS / a
sprinkle of JS. No build step, no framework, no analytics — drop the folder
on any host and it works.

## Files

```
index.html         Home (hero, day-parts, story, reviews, find-us)
menu.html          Full menu with item images and prices
visit.html         Hours, address, map, practical notes
assets/css/style.css     Custom design system (warm cream + olive + terracotta)
assets/js/main.js        Mobile nav + sticky category nav + image fallback
assets/img/              (empty — drop the owner's photos here when ready)
```

## What's different from the old site

The previous site was a React/Tailwind/shadcn SPA with:

- Generic alt text on every photo ("Food Presentation Detail", "Café Ambiance")
- A Google Maps screenshot used as the Open Graph image
- Marketing-flat copy ("savour every moment", "More than your morning coffee")
- A black/white shadcn aesthetic indistinguishable from a hundred other sites
- A menu that was missing about 40 real Wolt items (no Pastizzi, no Kinnie, no Iced Matcha…)
- Single-page only — `/menu`, `/about`, `/contact` all returned the same shell
- Identifiable AI-builder code traces in the bundle (`data-loc` annotations on every node)

The new site replaces all of that with:

- A warm Mediterranean palette (cream paper / olive / terracotta / gold) — not stark monochrome
- A custom Fraunces + Inter type pairing with real italic display headlines
- Place-rooted copy that names actual streets, dishes, people and Maltese cultural items (pastizzi, ftira, ġbejniet, Kinnie, Cisk)
- A real `/menu.html` page with item images and a sticky category nav
- A real `/visit.html` page with hours, map and practical notes
- The full Wolt menu — 99 items across 9 categories, plus the dine-in breakfasts, platters, cocktails and wine
- Zero framework code, ~22 KB of CSS, ~1 KB of JS

## Images

All product photography is currently sourced from Unsplash via hot-linked URLs.
**This is the one thing the owner should replace** with real Isabella photos
to make the site fully his.

Two options for swapping in real photos:

1. **Quick path** — replace each `<img src="https://images.unsplash.com/…">`
   with `<img src="assets/img/your-photo.jpg">`. Keep the `data-fallback`
   attribute and the `alt` text descriptive.
2. **Best path** — commission a half-day shoot. Espresso pour, the bar,
   the breakfast plates, a panini split open, a board of platter at golden
   hour. About 25 photos will do the whole site.

If any remote image fails to load, JS automatically replaces it with a styled
cream placeholder that shows the alt-text — the page never looks broken.

## Editing the menu

All prices and items live directly in `menu.html`. To change a price, edit
the number — that's it. The Wolt prices used here are the dine-in delivery
prices as of November 2026; the on-site dine-in menu prices may differ
slightly (e.g. espresso is €1.70 in-house, €1.80 on Wolt).

## To host

Any static host will do:

- Drop the folder into Netlify / Cloudflare Pages / Vercel as a static site
- Or onto a cheap shared host via FTP
- No build, no Node, no environment variables

## Local preview

Just open `index.html` in a browser. Or, for nicer routing:

```sh
cd "Isabella Cafe"
python3 -m http.server 8000
# then visit http://localhost:8000
```

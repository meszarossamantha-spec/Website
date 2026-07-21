# Meszaros Administrative Solutions — Website

A simple static website (plain HTML/CSS/JS, no build step) for Meszaros
Administrative Solutions.

## Structure

```
index.html          Home
about.html           About / founder bio
services.html        Engagement tiers, full service matrix, pricing
insights.html        Blog / insights index
insights/*.html      Individual blog posts
contact.html         Contact form + direct contact info
css/style.css        All site styling
js/main.js           Mobile nav toggle + contact form handling
404.html             Custom not-found page
robots.txt           Search engine crawling rules
```

No build tools, frameworks, or dependencies — every file can be opened
directly in a browser or deployed as-is to any static host.

## Editing content

Every page is plain HTML. Open any `.html` file in a text editor and edit
the text between tags directly. Shared styling lives in `css/style.css`;
colors are defined as CSS variables at the top of that file (`--navy`,
`--brass`, `--cream`, etc.) if you want to adjust the palette later.

## Contact form

The form on `contact.html` works out of the box with **no setup**: when
someone submits it, it opens their email client with the message
pre-filled to `meszarossamantha@gmail.com`. That's a reasonable default
but relies on the visitor's device having an email client configured.

To upgrade to a proper backend (recommended once you're ready):

1. Sign up free at [formspree.io](https://formspree.io) and create a form.
2. Copy the form ID from the endpoint Formspree gives you
   (`https://formspree.io/f/XXXXXXXX` — the `XXXXXXXX` part).
3. Open `js/main.js` and set `FORMSPREE_ID = "XXXXXXXX"` near the top.

That's it — submissions will go straight to your inbox without opening
the visitor's mail app.

## Deploying + connecting your domain

Since you already own a domain, pick a host, deploy the site, then point
your domain at it. All of these have free tiers suitable for a small
business site:

### Option A — Netlify (easiest, recommended)

1. Create a free account at [netlify.com](https://netlify.com).
2. Drag-and-drop this project folder onto the Netlify dashboard
   ("Deploy manually"), or connect it to a GitHub repo for automatic
   deploys on every push.
3. In **Site settings → Domain management**, add your custom domain.
4. Netlify gives you DNS records (usually a single `A` record or Netlify
   DNS nameservers) — add those at your domain registrar (GoDaddy,
   Namecheap, Google Domains, etc.). Netlify provides free HTTPS
   automatically once DNS propagates.

### Option B — GitHub Pages

1. Push this repo to GitHub (already set up if you're reading this from
   the repo).
2. In the repo's **Settings → Pages**, set the source to the branch/root
   containing these files.
3. Add a `CNAME` file at the project root containing just your domain,
   e.g. `www.meszarosadminsolutions.com`.
4. At your domain registrar, add a `CNAME` record pointing your domain
   (or `www` subdomain) to `<your-github-username>.github.io`, and/or the
   `A` records GitHub Pages documents for apex domains.

### Option C — Vercel

Similar flow to Netlify: import the project, deploy, then add your domain
under **Project Settings → Domains** and update DNS as instructed.

## Recommended next steps

- Swap the placeholder favicon/logo mark for a real logo once you have one.
- Add real project photos or a headshot if you'd like a more personal feel.
- Update the contact email once you have a dedicated business address
  (search for `meszarossamantha@gmail.com` across the HTML/JS files).
- Consider adding Google Analytics or Plausible once the site is live, to
  see what's working.

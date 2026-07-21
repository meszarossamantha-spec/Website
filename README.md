# Meszaros Administrative Solutions — Website

A simple static website (plain HTML/CSS/JS, no build step) for Meszaros
Administrative Solutions.

## Structure

Every file lives flat in one folder — no subfolders — so it uploads
cleanly even through file managers that only support flat file uploads:

```
index.html                        Home
about.html                        About / founder bio
services.html                     Engagement tiers, full service matrix
insights.html                     Blog / insights index
why-small-teams-need-systems.html Blog post
discovery-audit-explained.html    Blog post
signs-youve-outgrown-diy.html     Blog post
contact.html                      Contact form + direct contact info
style.css                         All site styling
main.js                           Mobile nav toggle + contact form handling
404.html                          Custom not-found page
robots.txt                        Search engine crawling rules
```

No build tools, frameworks, or dependencies — every file can be opened
directly in a browser or deployed as-is to any static host. All internal
links are relative and assume every file sits in the same directory —
don't move files into subfolders without updating the links.

## Editing content

Every page is plain HTML. Open any `.html` file in a text editor and edit
the text between tags directly. Shared styling lives in `style.css`;
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
3. Open `main.js` and set `FORMSPREE_ID = "XXXXXXXX"` near the top.

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

### Option D — cPanel-style hosting (e.g. Spaceship)

If your domain already has hosting with a File Manager like Spaceship's
(the classic cPanel-style file manager with File / Folder / Upload /
Extract buttons):

1. In File Manager, navigate into the folder your domain serves from —
   often `public_html`, or a folder named after your domain itself (e.g.
   `yourdomain.com/`) if you're on a multi-domain hosting plan.
2. Click **Upload**, then upload the `meszaros-website.zip` file (just
   the one zip — no need to unzip it yourself first).
3. Once the upload finishes, go back to the file listing, select the
   `.zip` file's checkbox, and click **Extract** in the toolbar. This
   unzips all the site files directly into that folder.
4. Since every file in the zip is flat (no subfolders), they'll land
   correctly right alongside each other — no manual folder creation
   needed.
5. Delete the `.zip` file afterward (optional cleanup) and visit your
   domain to confirm it loads styled correctly.

If the zip upload itself fails, try again — a stalled upload is usually
a transient network hiccup rather than a real quota or folder problem.

## Recommended next steps

- Swap the placeholder favicon/logo mark for a real logo once you have one.
- Add real project photos or a headshot if you'd like a more personal feel.
- Update the contact email once you have a dedicated business address
  (search for `meszarossamantha@gmail.com` across the HTML/JS files).
- Consider adding Google Analytics or Plausible once the site is live, to
  see what's working.

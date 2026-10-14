# FINAL DOMAIN SETUP

After the domain is purchased, run a project-wide Find/Replace:

`[FINAL_DOMAIN]` → your real domain only, for example `www.yourdomain.co.nz` (do not include `https://`).

Locations prepared for replacement:

- canonical URL on every HTML page
- `og:url` on every HTML page
- absolute `og:image` on every HTML page
- JSON-LD `url` on every HTML page
- `sitemap.xml`
- `robots.txt`

Then publish, add the domain to Google Search Console, add the DNS TXT verification record, verify ownership, submit `https://YOUR-DOMAIN/sitemap.xml`, and request indexing.

Also replace `[FORM_ENDPOINT_REQUIRED]` in `contact.html` after a secure form delivery service is configured.

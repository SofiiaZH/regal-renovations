# Regal Renovations website

Production-oriented static website for Regal Renovations, Auckland. No framework or build step is required.

## Pages

- `index.html` — home
- `services.html` — services
- `projects.html` — project gallery
- `about.html` — business story
- `contact.html` — contact details and enquiry form

## Structure

- `css/base/` — colours, reset and typography
- `css/layout/` — header and curved footer
- `css/components/` — buttons, service/project cards, FAQ
- `css/pages/` — page-specific layouts
- `js/main.js` — mobile menu, FAQ and form validation/submission
- `assets/images/logo/` — supplied Regal logo
- `assets/images/brand/hero-home.jpg` — replaceable full-screen hero photo
- `assets/images/services/` — replaceable service images
- `assets/images/projects/` — replaceable gallery images
- `assets/icons/` — favicons generated from the supplied logo

## Editing text/services

Open the relevant HTML file in VS Code. Services are grouped in `services.html`; home service cards are in `index.html`. There are no prices currently because none were supplied.

## Replacing images

The easiest method is to export the new image with the SAME filename and replace the existing file. This avoids changing HTML. Keep project/service images around 1600px wide and compressed JPG/WebP where possible.

## Contact form

Client-side validation and a honeypot spam field are implemented. **Email delivery is NOT connected yet.** The form intentionally shows a truthful message until a secure external form endpoint/backend is configured. Put the endpoint in `contact.html` by replacing `[FORM_ENDPOINT_REQUIRED]`. Never put secret API keys in frontend files.

## CMS / Dale project uploads

The current static project gallery is production-ready as a frontend, but Dale's protected CMS is a separate backend/authentication feature and is **not falsely simulated here**. For final deployment, connect a real authenticated CMS/storage solution. Dale gets a protected login and can create project titles/descriptions/galleries; public visitors remain read-only; GitHub access is not required for Dale. This must be configured before claiming CMS uploads are live.

## SEO

Every page includes unique title/description, one H1, semantic content, canonical/OG placeholders, social metadata and LocalBusiness-style structured data using only supplied facts. `robots.txt` and `sitemap.xml` are included.

## FINAL DOMAIN SETUP

See `FINAL-DOMAIN-SETUP.md`. Search the whole project for `[FINAL_DOMAIN]` and replace it only after buying the domain.

## Before publication

1. Replace placeholder hero/service/project images with approved Regal photography.
2. Configure the secure contact form endpoint.
3. Implement/configure the protected CMS for Dale if self-service project uploads are required at launch.
4. Purchase/connect domain and replace `[FINAL_DOMAIN]`.
5. Publish over HTTPS.
6. Verify Google Search Console and submit sitemap.

## DONE

- Responsive multi-page frontend
- Dark black/green branding
- Full-screen hero photo slot
- Curved footer, contact details and navigation
- Service cards and professional service page
- 3-column project gallery (4 columns on very wide screens)
- Supplied About copy
- Clickable phone/email/Facebook
- Mobile menu and FAQ interactions
- Form validation + spam honeypot
- Favicons
- SEO/OG/schema scaffolding
- robots.txt, sitemap.xml, .gitignore

## MANUAL ACTION REQUIRED

- Final approved project photography
- Secure form-delivery service/backend account and endpoint
- Protected CMS/backend/storage and Dale login
- Domain purchase and `[FINAL_DOMAIN]` replacement
- Hosting/domain DNS connection
- Google Search Console DNS verification and sitemap submission

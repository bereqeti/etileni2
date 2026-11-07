# Etileni 2

Website for Pastrimi Kimik Etileni 2, N.P.Z Etileni 2, Prishtina.

Vite, React 18, Tailwind CSS 3, react-router-dom 6. Satoshi is self hosted
from `public/fonts`, so the site loads no third party fonts.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # serve the built dist/ locally
```

Node 20 or newer.

## Where the content lives

`src/data.js` is the single source of truth. Opening hours, the four
locations, the example prices, the FAQ, the Google reviews and the social
links are all there. Edit that file, not the components.

Social links: a channel with an empty string disappears from the footer, the
mobile menu and the contact card. Never point one at a service homepage. A
dead link costs more than a missing icon.

Reviews: `REVIEWS` holds the real Google reviews copied by hand, with
`REVIEWS_CAPTURED` recording the date. Google shows ages rather than dates,
so each review is stored by the month it was left. Refresh these every few
months or they will read as stale.

## Contact form on GitHub Pages

The request form uses the third-party provider **FormSubmit**:
`https://formsubmit.co/info@etileni2.com`. Submissions and optional JPG/PNG
photos (8 MB maximum) are emailed to **info@etileni2.com**. The browser
navigates to FormSubmit for confirmation/captcha; this is intentional to
support documented multipart file uploads. The customer's email is included
in the submission for replies. The form is not processed by GitHub.

**Required one-time activation:** After deployment, send a test request using
the live form. FormSubmit will email an activation link to info@etileni2.com.
The mailbox owner must click that link before notifications are delivered.
Then send a second test request with a small photo and confirm receipt and
attachment. Do not rely on the form until this end-to-end test passes.

Review FormSubmit's data-handling terms/privacy before launching the form.
The website privacy policy discloses the form processor.

## Deploying on GitHub Pages

The repo includes `.github/workflows/deploy.yml`, which installs dependencies,
builds the Vite app and publishes `dist` to GitHub Pages.

1. Upload/extract the **contents** of this project into the repository root;
   do not merely upload the ZIP.
2. In Settings > Pages > Build and deployment, choose **GitHub Actions**.
3. Commit to `main` and follow the workflow under the **Actions** tab.
4. Confirm GitHub Pages still shows `etileni2.com` as its custom domain and
   `Enforce HTTPS` is checked.
5. Verify homepage and refresh each navigation page. The URL format is
   `https://etileni2.com/#/services`, `/#/contact`, etc. This prevents
   refresh-related 404s on GitHub Pages.

`public/CNAME` is included in the build so the custom domain stays assigned.
Put your preferred favicon at `public/favicon.png` if you do not want to use
`public/logo.png`.

## Still outstanding

- The site is English only. The customers are in Prishtina.
- Photography is optional. The homepage currently uses static brand gradients.
- Per page titles and meta descriptions. All pages currently share one.
- Only the home page has an `h1`.
- No `LocalBusiness` structured data, no `sitemap.xml`, no `robots.txt`.
- The full price list. The site says 94 items and shows eight.
- Facebook, TikTok and the YouTube channel URL.
- Privacy and Terms have not been reviewed by a lawyer.

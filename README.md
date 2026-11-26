# Laurent Crisci

A minimal static Astro website.

```sh
npm install
npm run dev
```

Run `npm run build` to generate the static website in `dist/`, or
`npm run preview` to preview that build.

- `src/pages/index.astro`: home page with the centered Paris image.
- `src/pages/knowledge.astro`: interests index linking to each category.
- `src/pages/knowledge/[category].astro`: individual category pages.
- `src/pages/links.astro`: GitHub, LinkedIn, and Business links.
- `src/pages/contact.astro`: contact email displayed as plain, obfuscated text.
- `src/data/interests.ts`: seven categories and their selections. Add entries with a `title`, optional `href`, and optional one-line `note`.
- `src/data/books.ts`: book titles, page slugs, and categories, transcribed from `../books.md`.
- `src/components/BookList.astro`: book links on the books index.
- `src/pages/books/index.astro`: books index.
- `src/pages/books/[slug].astro`: individual book pages; replace the temporary message with your notes.
- `src/layouts/Layout.astro`: shared HTML and styles.
- `public/CNAME`: existing custom domain, copied into the build.
- `archive/`: all original site files, preserved unchanged and excluded from the new website build.

The top navigation links to Home, Knowledge, Links, and Contact. The Knowledge page
links to separate pages for Music, Philosophy, Books, Movies, Anime, Videogames,
and Computing. Book and philosophy entries link to
individual notes pages. Categories without supplied selections show a short
placeholder. The book and philosophy list is also available at `/books/`.

## GitHub Pages

This repository deploys the static `dist/` output using
`.github/workflows/deploy.yml` on every push to `master`. No server is required.
The archive stays in Git and is excluded from the deployed website.

For the initial deployment:

1. Open <https://github.com/lcrisci/lcrisci.github.io/settings/pages>.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Keep **Custom domain** set to `www.crisci.io` and enable **Enforce HTTPS** when available.
4. Commit the site and workflow, then push to `master`.
5. Check the **Deploy Astro to GitHub Pages** run in the repository's **Actions** tab.

The Astro `site` setting and `public/CNAME` both preserve `www.crisci.io`.
No repository-name base path is needed for this user-site repository.
Custom domains must also be configured in GitHub's Pages settings; the `CNAME`
file alone does not configure a custom domain for an Actions deployment.

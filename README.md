# www.emanuelmoench.com

Personal website of Emanuel Mönch, built with [Jekyll](https://jekyllrb.com) and hosted for free on GitHub Pages.
Every change saved to the `main` branch goes live automatically within about a minute.

PDFs, replication code, photos and media screenshots stay in the other branches of this repository
(`Journal-Publications`, `Working-Papers`, `Other-Publications`, `Replication-Codes`, `Pictures-Videos`, `Media`, `About`)
and are linked from the site.

---

## Everyday editing (in the browser, no software needed)

Open a file on github.com, click the **pencil icon** (✎), make the change, then click **Commit changes**.

| I want to… | Edit this file |
|---|---|
| Add or change a journal publication | `_data/journal_publications.yml` |
| Add or change a working paper | `_data/working_papers.yml` |
| Add a policy brief, column or blog post | `_data/other_publications.yml` |
| Add a media appearance | `_data/media.yml` |
| Change the advisory roles on “Other” | `_data/affiliations.yml` |
| Change the bio | `index.md` (English) and `german/uber-mich.md` (German) |
| Change address, e-mail, phone, CV link | `_config.yml` |
| Change the imprint / privacy text | `imprint.md`, `data-protection.md`, `german/impressum.md`, `german/datenschutz.md` |
| Change menu words or button labels | `_data/i18n.yml` |

The publication and media lists are shared by the English and German pages, so you only edit them once.

### Adding a new paper

Copy an existing entry in the YAML file, paste it at the **top** (lists are shown in file order) and edit it:

```yaml
- title: My New Paper
  url: https://link-to-journal-or-ssrn
  with: Jane Doe and John Smith          # leave this line out for a solo paper
  details: CEPR Discussion Paper No. 12345, March 2027
  abstract: >-
    The abstract goes here. It can run over
    several lines as long as each line is indented.
  bibtex: |-
    @article{...}
  links:
    - { label: PDF, url: "https://github.com/EmanuelMoench/website/blob/Working-Papers/MyNewPaper.pdf" }
    - { label: Code, url: "https://..." }
```

Rules of thumb for YAML:
- Keep the indentation (two spaces) exactly as in the other entries.
- If a title or detail contains a colon followed by a space (`Title: Subtitle`), wrap it in double quotes.
- In `details` you can use `*italic*`, `**bold**` and `[link text](https://...)`.

### Uploading a PDF

Switch to the right branch (e.g. **Working-Papers**) with the branch selector on github.com,
click **Add file → Upload files**, drop the PDF, commit. Then use the link
`https://github.com/EmanuelMoench/website/blob/<Branch>/<FileName>.pdf` in the YAML entry.

### Adding a media screenshot

Upload a JPG/PNG (about 800 px wide is plenty) to `assets/images/media/` on the `main` branch and put its file name in
the `image:` field of the media entry. Entries without an image simply show the text card.

### When a working paper is published

Cut its entry from `_data/working_papers.yml`, paste it at the top of `_data/journal_publications.yml`, and update `details`.

---

## One-time setup: switching the domain to GitHub Pages

1. **Publish the site from this repo.** GitHub → this repo → **Settings → Pages** → *Build and deployment*:
   Source **Deploy from a branch**, Branch **main**, folder **/ (root)** → Save.
   (This repo also has an old `gh-pages` branch; make sure **main** is selected.)
2. **Verify the domain** (protects it from takeover): GitHub → your profile picture → **Settings → Pages → Add a domain**,
   enter `emanuelmoench.com`. GitHub shows a TXT record; add it in Namecheap (step 4) and click **Verify**.
3. **Set the custom domain**: back in the repo's **Settings → Pages**, enter `www.emanuelmoench.com` under *Custom domain* → Save.
   (The `CNAME` file in this repo already contains it.)
4. **Namecheap DNS**: Namecheap → Domain List → **Manage** → **Advanced DNS**. Delete the existing A / CNAME records for
   `@` and `www` that point to the current web developer's hosting, then add:

   | Type | Host | Value |
   |---|---|---|
   | A Record | @ | 185.199.108.153 |
   | A Record | @ | 185.199.109.153 |
   | A Record | @ | 185.199.110.153 |
   | A Record | @ | 185.199.111.153 |
   | CNAME Record | www | emanuelmoench.github.io. |
   | TXT Record | (as shown by GitHub in step 2) | (as shown) |

   Leave any MX/e-mail records untouched. Changes usually take effect within an hour (up to 24 h).
5. **HTTPS**: once GitHub shows the DNS check as successful, tick **Enforce HTTPS** in **Settings → Pages**.
6. **Cancel the old hosting** only after the new site is live at www.emanuelmoench.com.

---

## Previewing on your own computer (optional)

Not needed for normal edits. If you want to see changes before publishing:

```bash
brew install ruby        # macOS, once
bundle install           # in this folder, once
bundle exec jekyll serve # then open http://localhost:4000
```

## Structure

```
_config.yml          site settings, contact details
_data/               all lists (publications, media, roles) and translations
_layouts/, _includes/ page templates (normally no need to touch)
assets/css/style.css colours, fonts, layout
assets/images/       logo, portraits, partner logos, media screenshots
index.md …           English pages     german/ …  German pages
```

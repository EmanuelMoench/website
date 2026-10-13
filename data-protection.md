---
ref: privacy
permalink: /data-protection
title: Data protection
narrow: true
cta: false
---
{% if site.analytics.umami_website_id != "" %}{% assign n = 1 %}{% else %}{% assign n = 0 %}{% endif %}

### 1. Controller

Prof. Dr. Emanuel Mönch, Frankfurt School of Finance & Management gGmbH, Adickesallee 32-34, 60322 Frankfurt am Main, Germany, email: [e.moench@fs.de](mailto:e.moench@fs.de).

### 2. Overview

This is a purely informational, static website. It sets **no cookies**, uses {% if site.analytics.umami_website_id != "" %}**no tracking tools** (only cookie-free, anonymous statistics, see section 4){% else %}**no analytics or tracking tools**{% endif %} and embeds **no third-party content** (such as maps, videos, externally hosted fonts or contact forms). All fonts and images are served from the same server as the page itself.

### 3. Hosting by GitHub Pages

This website is hosted on GitHub Pages, a service of GitHub Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA (a subsidiary of Microsoft Corporation). When you visit the site, GitHub processes technically necessary data, in particular your IP address, date and time of access, the page requested, browser type and operating system. This data is stored in server log files in order to deliver the website and keep it secure.

The legal basis is Art. 6(1)(f) GDPR; my legitimate interest lies in providing the website securely and reliably. Data may be transferred to the USA. GitHub is certified under the EU-US Data Privacy Framework; transfers rely on the European Commission's adequacy decision (Art. 45 GDPR). See [GitHub's privacy statement](https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement) for details.

{% if site.analytics.umami_website_id != "" -%}
### 4. Visitor statistics (Umami)

To understand which pages are read, this website uses the privacy-friendly statistics service Umami (Umami Software, Inc., Umami Cloud). Umami sets **no cookies** and stores **no personal data**: IP addresses are not stored, and visitors cannot be identified or tracked across websites. Only aggregated information is recorded, such as the page visited, the referring website, browser, operating system, device type and country. The legal basis is Art. 6(1)(f) GDPR; my legitimate interest is in improving the website. See [Umami's privacy policy](https://umami.is/privacy).

{% endif -%}
### {{ 4 | plus: n }}. Contact by email or phone

If you contact me by email or phone, I process your details solely to handle your enquiry (Art. 6(1)(b) or (f) GDPR). The data is deleted once it is no longer needed for this purpose, unless statutory retention obligations apply.

### {{ 5 | plus: n }}. External links

This website contains links to external websites (e.g. journals, media reports, Google Scholar, LinkedIn, Google Maps). Data is only transmitted to the respective provider once you click such a link; their privacy policies apply.

### {{ 6 | plus: n }}. Your rights

You have the right of access (Art. 15 GDPR), rectification (Art. 16), erasure (Art. 17), restriction of processing (Art. 18), data portability (Art. 20) and to object to processing (Art. 21 GDPR). You may also lodge a complaint with a data protection supervisory authority, such as the Hessian Commissioner for Data Protection and Freedom of Information.

*Last updated: October 2026*

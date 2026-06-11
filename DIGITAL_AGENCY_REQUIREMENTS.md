# Digital Marketing Agency Website Requirements

Universal technical and design requirements for building a modern digital marketing agency website.

## 1. Project Setup

- Build a lightweight website using static HTML, CSS, vanilla JavaScript, and optional PHP for form handling.
- Keep the codebase simple and easy to edit without a framework unless a project specifically requires one.
- Use a shared central config file for company-level data:
  - company name
  - brand name
  - domain
  - website URL
  - email address
  - address
  - company ID or registration number
  - service list
- All repeated company data must be editable from the config file instead of hardcoded across pages.
- Use semantic HTML and clear class names.
- Keep assets organized by page or section, for example:
  - `img/home/`
  - `img/services/`
  - `css/base.css`
  - `css/pages/home.css`
  - `css/pages/content.css`
  - `js/main.js`
  - `js/site-config.js`

## 2. Core Pages

The website should include:

- Home page: `index.html`
- Services hub: `services.html`
- Individual service pages for each service area
- About page: `about.html`
- Contact page: `contact.html`
- Privacy Policy page
- Terms of Service or Terms & Conditions page
- Cookie Policy page

Optional SEO files such as `robots.txt` and `sitemap.xml` may be added only if the project needs them.

## 3. Service Structure

Use a clear digital marketing service system. A recommended five-service structure:

- Strategy Consulting
- Performance Marketing
- Creative Systems
- Marketing Operations
- Conversion Intelligence

Each service page should include:

- hero section
- service navigation/sidebar linking to all service pages
- representative image
- detailed service explanation
- clear deliverables or process blocks
- strategic approach section
- FAQ section
- CTA section

The service content must be unique and informative. Avoid copying placeholder/reference text directly.

## 4. Visual Direction

Use a modern dark digital agency aesthetic:

- deep navy / charcoal background
- royal blue primary accent
- cyan secondary accent
- white or near-white headings
- muted blue-gray body text
- strong but clean typography
- restrained rounded corners
- cards and panels with subtle borders, not heavy decoration
- gradients used carefully, not excessive RGB effects

Avoid:

- generic placeholder-looking icons
- fake or low-quality brand logos
- excessive neon/rainbow effects
- oversized empty cards on mobile
- content copied directly from references
- decorative clutter that does not support the section

## 5. Typography

- Use a strong modern sans-serif such as Inter.
- Headings should be bold and clear.
- Body text should remain readable and not overly large on mobile.
- Mobile typography must be adjusted per section, not simply scaled from desktop.
- Avoid cramped text in buttons, cards, and nav items.
- Hero titles should be large but not overwhelming on mobile.

## 6. Header

The header should include:

- brand/logo
- navigation
- Services dropdown
- CTA button such as `Let's Talk`
- mobile burger menu

Technical requirements:

- Header should be fixed or sticky.
- CTA button must not be inside the `<nav>` element.
- Services dropdown should work on desktop and mobile.
- Current page should be highlighted in the menu.
- Service detail pages should highlight `Services` as the parent navigation item.
- Mobile menu should open full width and height from left to right.
- Mobile menu must feel light, not like heavy stacked boxes.
- Mobile dropdown chevron must only rotate when the dropdown is actually open.
- Closing the mobile menu should reset open dropdown state.

## 7. Footer

Footer should be consistent across all pages.

Recommended footer columns:

- About us
- Company
- Resources / Services
- Other links

Footer requirements:

- Include company brand/logo.
- Include address placeholder or real address.
- Include email from central config.
- Do not include fake phone numbers.
- Include all service links.
- Include full legal link names:
  - Terms & Conditions
  - Privacy Policy
  - Cookie Policy
- Add hover states to footer links.
- Keep spacing between footer links compact.
- Use a proper copyright symbol or `&copy;`.

## 8. Home Page Sections

Recommended home page sections:

- Hero with strong background image
- Trust/rating strip
- Services preview
- Story / agency positioning section
- Approach tabs
- Integrations section
- Testimonials / social proof
- Pricing
- CTA
- Footer

Each section must be responsive and meaningful, not just decorative.

## 9. Hero Section

- Use a real or project-provided background image.
- Add dark overlay for readability.
- Keep hero text readable on mobile.
- CTA buttons should be visible and not buried.
- Avoid using placeholder stock-like layout if a relevant image is available.

## 10. Trust / Ratings Section

- Match reference layout on desktop with rating cards and brand marks.
- Use real/original brand marks where possible.
- Do not invent fake logos.
- On mobile:
  - reduce font sizes
  - reduce logo sizes
  - tighten padding and gaps
  - avoid overly tall stacked blocks

## 11. Services Preview

- Service cards should use contextually appropriate icons.
- Avoid invented random icons that do not match service meaning.
- Include a visually interesting CTA/banner leading to `services.html`, not just a plain boring button.
- Button/banner colors must match the site style.

## 12. Story Section

- Use provided story image if available.
- Add visual overlays only if they support the section.
- Avoid money-specific graphics if the agency theme is broader.
- Keep section height controlled.
- Mobile metrics should be compact, centered, and in one row if possible.

## 13. Approach Section

- Approach tabs must switch content.
- Every tab must have unique, rewritten content.
- Do not copy reference text directly.
- Tabs should have hover states with tasteful blue borders.
- On mobile:
  - convert tabs into a horizontal swipe/scroll row
  - keep tab labels small and compact
  - avoid a tall vertical list before content

## 14. Integrations Section

- Use real brand logos for integration examples.
- Logo rows may move as marquee banners:
  - rows 1 and 3 move right
  - rows 2 and 4 move left
- On mobile:
  - center section title, text, icons, and button
  - reduce oversized headings
  - keep the section visually balanced

## 15. Testimonials / Social Proof

- Testimonials should not require photos unless specifically requested.
- Names should use first name plus first initial of surname, for example `Emily T.`
- Show role only if requested; remove company names when not needed.
- Cards should keep consistent size and should not jump depending on content length.
- Add multiple testimonials, not just one.
- On desktop, arrows may be used.
- On mobile, testimonials must be swipeable.

## 16. Pricing Section

- Prices should use a `from` format, not fixed absolute claims.
- Add a note that exact service cost can be clarified with a manager.
- Include monthly/yearly toggle.
- Toggle should be smooth, not abrupt.
- On mobile:
  - pricing cards should become a horizontal swiper
  - use scroll-snap
  - hide scrollbar
  - reduce card height and price typography

## 17. CTA Section

- Use a compact dark panel matching the site style.
- Headline should be strong but not oversized on mobile.
- CTA should lead to contact or meeting request.
- Mobile version should reduce text size and section height.

## 18. Services Page

The services hub should include:

- hero section
- visual mini-map or service system visual
- `The Growth Workflow` section
- FAQ
- CTA

Requirements:

- Service cards must link to individual service pages.
- `The Growth Workflow` should be a vertical/visual workflow on desktop.
- On mobile:
  - convert workflow cards into a horizontal swiper
  - use the section image as a background
  - hide duplicate visual image block
  - keep cards readable with dark overlay/blur

## 19. About Page

About page should include:

- hero section
- story/focus section
- mission section
- principles/values
- testimonials
- FAQ
- CTA

Requirements:

- Keep hero content concise.
- Reduce title size on mobile.
- Mission section should be centered on mobile if surrounding design is centered.
- Stats should not appear as large empty boxes on mobile; use compact badges or rows.
- Reduce excessive vertical gaps between sections on mobile.

## 20. Contact Page

Contact page should include:

- hero section
- contact form
- company details
- map under the form at full width

Form fields:

- name
- email
- message

Requirements:

- Form should post to PHP handler.
- Show clear success confirmation after successful send.
- Show meaningful validation/server error if form is incomplete.
- Email address must come from central config where possible.
- Do not hardcode final company details in many places.

## 21. PHP Form Handler

Recommended behavior:

- Only accept `POST`.
- Read recipient email, company name, and domain from `js/site-config.js`.
- Validate:
  - name is not empty
  - message is not empty
  - email is valid
- Send plain text email via `mail()` or hosting-specific mailer.
- Use `Reply-To` as the sender email.
- Redirect to `contact.html?sent=1` on success.
- Show a visible success message on the contact page when `sent=1`.
- Return HTTP `422` for invalid data.
- Return HTTP `500` if mail sending fails.

Important hosting note:

- PHP `mail()` depends on server configuration. On hosting where `mail()` is disabled or unreliable, replace it with SMTP or a provider API.

## 22. Central Config Requirements

Use a file such as `js/site-config.js`:

```js
window.siteConfig = {
  companyName: "COMPANY NAME",
  brandName: "Brand Name",
  domain: "example.com",
  website: "https://example.com",
  email: "support@example.com",
  address: "ADDRESS PLACEHOLDER",
  companyId: "COMPANY ID PLACEHOLDER",
  services: []
};
```

HTML should support:

- `data-config="companyName"`
- `data-config="brandName"`
- `data-config="email"`
- `data-config="address"`
- `data-config="companyId"`
- `data-config-href="email"`

JavaScript should:

- replace text content from config
- update `mailto:` links from config
- set current year automatically
- highlight active menu item

PHP should:

- read email/company/domain from the same config file
- support both single and double quotes in config values if possible

## 23. Cookie Banner

Cookie banner should be styled, not a plain browser-like box.

Requirements:

- dark panel matching the site style
- short title
- clear explanation
- link to Cookie Policy
- `Accept` and `Decline` buttons
- store choice in `localStorage`
- hide after choice
- mobile responsive

Recommended localStorage keys:

- `hc-cookie-choice`: `accepted` or `declined`
- optional legacy support: `hc-cookie-ok`

## 24. Legal Pages

Legal pages should not be placeholders.

Required pages:

- Privacy Policy
- Terms of Service / Terms & Conditions
- Cookie Policy

Requirements:

- Use full readable content.
- Use dates:
  - effective date
  - last updated where applicable
- Break content into numbered sections.
- Use lists where appropriate.
- Cookie Policy should include a cookie details table.
- Tables must be horizontally scrollable on mobile.
- Legal pages must use the same header/footer as the rest of the site.

## 25. Favicon

- Add a favicon.
- SVG favicon is acceptable.
- Connect it in all HTML pages:

```html
<link rel="icon" type="image/svg+xml" href="favicon.svg">
```

## 26. Mobile Requirements

Mobile behavior must be checked section by section.

General requirements:

- no horizontal overflow
- no huge empty vertical gaps
- no oversized headings
- no overlapping text
- no tiny unreadable controls
- cards should not become overly tall when there are many items
- long card sections can become horizontal swipers
- images may become section backgrounds when that saves space
- important content should remain centered if the section design calls for it

Use swipers for:

- pricing cards
- workflow cards
- testimonials
- approach tabs as horizontal scroll controls

Use `scroll-snap` for native CSS-based swipers where possible.

## 27. Icons and Logos

- Use Lucide icons for interface and abstract service concepts.
- Icons must match context.
- Do not use random invented shapes when a proper icon exists.
- Use real brand logos for ratings/integrations where brand marks are shown.
- Avoid fake brand marks unless clearly abstract and not presented as real logos.

## 28. Content Rules

- Content must be unique to the agency.
- References are for style and layout, not for copying text.
- Keep wording clear, businesslike, and specific to digital marketing.
- Avoid excessive filler.
- Service pages should be detailed and useful.
- Home page content can be lighter but must still feel intentional.

## 29. QA Checklist

Before delivery, check:

- all pages load
- all CSS and JS paths work
- favicon is connected everywhere
- header works on desktop and mobile
- Services dropdown works on desktop and mobile
- active nav item is highlighted
- footer is consistent on all pages
- all service links work
- contact form fields have correct names
- PHP handler reads config values
- success message appears after `?sent=1`
- cookie banner appears before choice and hides after choice
- legal pages are populated
- mobile sections do not overflow or feel excessively tall
- no broken copyright symbols
- no fake phone numbers
- no deleted/unused SEO files unless needed



Theme: Japanese café — calm, minimal, warm “kissaten” vibe.
Project name: “KISSA HANA” (a modern Japanese café & dessert bar).

Goal: Practice real-world layout, responsiveness, and reusable components using ONLY HTML + CSS (no JS, no frameworks).

Tech rules:
- Use ONLY HTML5 + CSS3 (no JS).
- Mobile-first, responsive at 360px / 768px / 1024px / 1280px.
- Use CSS variables, Flexbox, Grid, clamp(), and media queries.
- Semantic HTML + accessibility (skip link, focus states, labels, alt text).
- Use BEM naming (e.g., .hero__title, .menu-card__price, .btn--primary).
- Add light + dark theme using CSS variables (default light; dark via prefers-color-scheme).
- Use a CSS-only mobile nav (checkbox toggle).
- Use FAQ accordion via <details><summary>.
- No external libraries. Optional Google Font, but include fallback stack.
- Add print styles (print.css) for the menu page.

Site structure (multi-page):
1) index.html (Home)
2) menu.html (Drinks + Desserts + Light Meals)
3) about.html (Story + values)
4) gallery.html (image grid layout; placeholders)
5) reservations.html (form UI only; no submission)
6) locations.html (hours, directions text; no embedded maps)
7) faq.html
8) styleguide.html (components showcase)

Global layout requirements:
- Sticky header with logo + nav
- Hero section on Home
- Reusable components:
  buttons, cards, badges, section headers, feature list,
  menu cards, pricing table (set menu),
  testimonials, newsletter box, form fields, callout banner
- One “complex layout” per page:
  - Home: alternating split sections
  - Menu: category tabs look (CSS-only), plus responsive menu grid
  - About: timeline section
  - Gallery: masonry-like grid (CSS columns or grid)
  - Reservations: form layout with field groups
  - Locations: responsive cards + hours table
  - FAQ: multi-accordion using details/summary
  - Styleguide: tokens + components

Design system (set in :root CSS variables):
- Colors (calm + warm):
  --bg, --surface, --text, --muted, --border
  --primary (matcha green)
  --accent (sakura pink)
  --ink (deep charcoal)
- Typography scale using clamp()
- Spacing scale (xs/sm/md/lg/xl)
- Soft shadows, rounded corners, subtle hover effects

Assets + folders:
- /assets/css/main.css
- /assets/css/print.css
- /assets/img/ (placeholders, named like: latte-01.jpg, mochi-01.jpg, interior-01.jpg)
- /assets/icons/ (optional)

Deliverables:
- Output full folder structure and full contents of every file.
- Ensure all pages link together with consistent header/footer.
- Use the site content below exactly as written (minor formatting ok).

Website content (KISSA HANA)
Brand basics

Name: KISSA HANA

Tagline: Matcha, mochi, and quiet moments.

One-liner: A Japanese-inspired café serving hand-whisked matcha, pour-over coffee, and seasonal desserts in a calm, minimalist space.

Navigation labels

Home · Menu · About · Gallery · Reservations · Locations · FAQ · Styleguide

Home (index.html)
Hero

Headline: A quiet Japanese café for slow sips and sweet bites
Subheadline: Hand-whisked matcha, small-batch desserts, and warm hospitality — designed for your everyday reset.
Primary CTA: View the menu
Secondary CTA: Book a table

Trust strip (small highlights)

Ceremonial-grade matcha

House-made mochi & custards

Pour-over + espresso bar

Seasonal specials weekly

Section: Signature experiences

Title: What we’re known for
Cards:

Matcha made properly — Whisked to order, balanced for flavor, not bitterness.

Desserts with restraint — Not too sweet, always smooth, often seasonal.

Coffee for the curious — Espresso classics and rotating single origins.

A space to breathe — Soft light, quiet corners, and clean design.

Section: Today’s recommended

Title: Today’s recommended
Items:

Uji Matcha Latte — Creamy, nutty, and gently sweet.

Hojicha Cream Float — Roasted tea with a cloud of vanilla.

Yuzu Honey Soda — Bright citrus, lightly sparkling.

Mochi Trio Plate — Strawberry, kinako, and black sesame.

Section: Story teaser

Title: Inspired by kissaten culture
Paragraph: KISSA HANA is a modern take on Japan’s old-school cafés — a place where quality matters, time slows down, and simple things feel special.

Testimonials

“The matcha tastes clean and calm — like it was made with care.”

“Desserts are perfectly balanced. I finally get why ‘not too sweet’ is a compliment.”

“The space feels quiet without being cold. I can actually relax here.”

Newsletter box

Title: Seasonal drops + limited desserts
Text: Get a short note when we release new sweets and small-batch specials. No spam, just updates.

Menu (menu.html)
Menu intro

Title: Menu
Text: Our menu is small on purpose. Quality first, always. Seasonal items may change weekly.

Drinks — Matcha

Uji Matcha (Hot) — Straight, vibrant, and smooth.

Uji Matcha Latte (Hot/Iced) — Creamy matcha with milk of choice.

Sakura Matcha Latte (Seasonal) — Matcha with a floral finish.

Matcha Tonic (Iced) — Crisp, sparkling, surprisingly refreshing.

Drinks — Tea

Hojicha (Hot/Iced) — Roasted, toasty, low bitterness.

Genmaicha (Hot) — Green tea with roasted rice aroma.

Yuzu Tea (Hot) — Citrus comfort in a cup.

Drinks — Coffee

Espresso

Long Black / Americano

Flat White / Latte

Pour-over (Single Origin) — Ask what’s on rotation.

Sweets

Mochi Trio Plate — 3 seasonal mochi with sauce drizzle.

Matcha Tiramisu Cup — Soft layers, deep matcha finish.

Hojicha Panna Cotta — Roasted tea custard with caramel.

Black Sesame Cookie — Nutty, rich, crisp edges.

Light bites

Tamago Sando — Soft egg salad on milk bread.

Onigiri Set (2 pcs) — Salmon + ume with miso soup (limited).

Seasonal Toast — Sweet butter toast with rotating topping.

Set menu table (great for CSS table styling)

Title: Set Menus

Calm Set — Any hot tea + one dessert cup

Focus Set — Pour-over + tamago sando

Share Set — Two drinks + mochi trio plate

About (about.html)
Story

Title: Our story
Paragraph 1: KISSA HANA started as a small idea: make matcha approachable without cutting corners.
Paragraph 2: We keep the menu curated so we can obsess over details — temperature, texture, and balance.

Values

Quiet quality — No loud flavors, no shortcuts.

Seasonal rhythm — We rotate desserts to match the mood of the month.

Warm hospitality — Calm service, thoughtful pacing.

Timeline (for a nice CSS layout)

2019 — First experiments with matcha and desserts at pop-ups

2021 — Found our style: modern kissaten, minimalist warmth

2023 — Opened KISSA HANA with a small, curated menu

Today — Seasonal desserts, rotating coffee, steady improvements

Gallery (gallery.html)

Title: Gallery
Text: A few quiet moments — matcha, light, texture, and the space we share.

Suggested placeholder captions:

Matcha whisking station

Dessert counter detail

Soft morning light inside

Mochi plate close-up

Espresso pour

Seasonal latte

Reservations (reservations.html)

Title: Reservations
Text: Book a table for a slow catch-up or a quiet solo session. Walk-ins welcome when space allows.

Form fields (UI only):

Name

Email

Phone (optional)

Date

Time

Party size

Seating preference (counter / table / quiet corner)

Notes (allergies, celebration, etc.)

Microcopy:
Note: We hold reservations for 10 minutes. If you’re running late, please let us know.

Locations (locations.html)

Title: Locations & Hours
Location card 1:

KISSA HANA — Central

Hours: Mon–Fri 8:00–18:00, Sat–Sun 9:00–19:00

Address: 123 Blossom Lane, City Center

Notes: Quiet seating available until 12pm.

Location card 2:

KISSA HANA — Riverside

Hours: Daily 9:00–19:00

Address: 8 Lantern Walk, Riverside

Notes: Best for groups, more open seating.

FAQ (faq.html)

Use <details> blocks for these:

Do you use ceremonial-grade matcha?
Yes — we use ceremonial-grade matcha for all whisked drinks.

Can I choose alternative milk?
Yes. We offer oat and soy options.

Are desserts made in-house?
Most desserts are made in-house in small batches. Some seasonal items may be limited.

Is the café good for working?
We welcome quiet laptop use. For busier hours, shorter stays help everyone.

Do you have gluten-free options?
Some items can be made gluten-free, but cross-contact is possible.

Do you take large bookings?
For groups over 6, please use the reservation notes and we’ll confirm availability.
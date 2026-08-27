// ─────────────────────────────────────────────────────────────
//  YOUR WORK — edit this file to add / remove projects.
//  `images` are your project photos (Cloudinary URLs). Swap them
//  for real work when you have it. `figure` is the fallback style.
// ─────────────────────────────────────────────────────────────

export const works = [
  {
    id: 'northwind-banking',
    title: 'Northwind Banking App',
    client: 'Northwind Bank, Amsterdam',
    category: 'Mobile App',
    year: '2025',
    role: 'Product Design, UX',
    deliverables: 'iOS App, Design System, Prototype',
    figure: 0,
    images: [
      'https://res.cloudinary.com/dvt5nm1vy/image/upload/v1787835794/portfolio/portfolio/rilo-coffee-1.jpg',
      'https://res.cloudinary.com/dvt5nm1vy/image/upload/v1787835799/portfolio/portfolio/rilo-coffee-2.jpg',
      'https://res.cloudinary.com/dvt5nm1vy/image/upload/v1787835803/portfolio/portfolio/rilo-coffee-3.jpg',
    ],
    featured: true,
    overview:
      'A retail banking app that had to feel calm in a category built on anxiety. We rebuilt the product around three screens that matter — balance, move, pay — and tucked the rest away until it was asked for. Fewer taps, fewer numbers on screen at once, more trust.',
    body: [
      {
        heading: 'Three screens, not thirty',
        text: 'Research showed users opened the app for one of three reasons. So the home screen became those three jobs, each a large target, with secondary actions folded into a quiet menu. Support tickets about "where do I find X" dropped sharply in the first month.',
      },
      {
        heading: 'A system, not a skin',
        text: 'Every component ships from a token set — colour, radius, type, spacing — so the iOS and web apps stay in lockstep. New screens are assembled, not drawn. The brand survives the next two years of features because the system, not the mockup, is the source of truth.',
      },
    ],
  },
  {
    id: 'lumen-web',
    title: 'Lumen Web Platform',
    client: 'Lumen, Remote',
    category: 'Web Design',
    year: '2025',
    role: 'UI, Front-end',
    deliverables: 'Marketing Site, App Shell',
    figure: 1,
    images: [
      'https://res.cloudinary.com/dvt5nm1vy/image/upload/v1787835808/portfolio/portfolio/papier-monthly-1.jpg',
      'https://res.cloudinary.com/dvt5nm1vy/image/upload/v1787835813/portfolio/portfolio/papier-monthly-2.jpg',
      'https://res.cloudinary.com/dvt5nm1vy/image/upload/v1787835818/portfolio/portfolio/papier-monthly-3.jpg',
    ],
    featured: true,
    overview:
      'A distributed team needed a website that explained a technical product without a wall of jargon. We led with a single clear product statement, then let the interface do the proving — live demos, not stock promises. Built to feel fast because it is fast.',
    body: [
      {
        heading: 'One statement, then proof',
        text: 'The old site opened with a paragraph. The new one opens with a sentence and a working widget. Time-on-page for the key demo went up because visitors understood the offer in the first five seconds instead of the fifth scroll.',
      },
      {
        heading: 'Designed for the viewport',
        text: 'Type scales on a fluid grid, images are lazy and the whole thing ships under budget on any connection. A website is a product, not a brochure — so it got the same care a native app would, including the empty states.',
      },
    ],
  },
  {
    id: 'cadence-system',
    title: 'Cadence Design System',
    client: 'Cadence Software',
    category: 'Design System',
    year: '2024',
    role: 'Design Systems, UI',
    deliverables: 'Tokens, Components, Docs',
    figure: 2,
    images: [
      'https://res.cloudinary.com/dvt5nm1vy/image/upload/v1787835822/portfolio/portfolio/stadt-theatre-1.jpg',
      'https://res.cloudinary.com/dvt5nm1vy/image/upload/v1787835827/portfolio/portfolio/stadt-theatre-2.jpg',
      'https://res.cloudinary.com/dvt5nm1vy/image/upload/v1787835833/portfolio/portfolio/stadt-theatre-3.jpg',
    ],
    featured: true,
    overview:
      'A SaaS company with six products that looked like six companies. Cadence is the shared language — tokens, components and docs — that lets four teams ship interfaces which clearly belong to one brand.',
    body: [
      {
        heading: 'Tokens first',
        text: 'Colour, type and space are defined once and referenced everywhere. Change the brand blue in one place and it moves across the entire suite by the next build. Designers stop debating hex codes and start solving product problems.',
      },
      {
        heading: 'Docs people read',
        text: 'A component is only useful if engineers trust it. Each one ships with a live example, the do and the don’t, and the exact code. Adoption rose because the system answered the question before the Slack message got sent.',
      },
    ],
  },
  {
    id: 'pulse-dashboard',
    title: 'Pulse Fitness Dashboard',
    client: 'Pulse, Berlin',
    category: 'Dashboard',
    year: '2024',
    role: 'Data Viz, Product',
    deliverables: 'Analytics, Widgets',
    figure: 3,
    images: [
      'https://res.cloudinary.com/dvt5nm1vy/image/upload/v1787835836/portfolio/portfolio/nordwind-records-1.jpg',
      'https://res.cloudinary.com/dvt5nm1vy/image/upload/v1787835841/portfolio/portfolio/nordwind-records-2.jpg',
      'https://res.cloudinary.com/dvt5nm1vy/image/upload/v1787835846/portfolio/portfolio/nordwind-records-3.jpg',
    ],
    featured: true,
    overview:
      'A training app drowning in numbers. Pulse turns the data into one glanceable dashboard — today’s load, this week’s trend, and the one chart that actually changes behaviour — so athletes open it and act instead of analyse.',
    body: [
      {
        heading: 'One chart that matters',
        text: 'Most dashboards show everything and mean nothing. We cut to a single primary visual per goal, then let the detail expand on tap. Engagement with the analytics view more than doubled once it stopped being homework.',
      },
      {
        heading: 'Calm by default',
        text: 'A fitness dashboard is opened after a hard session, not in a calm office. So the palette stays quiet, the type stays large, and the layout survives a sweaty thumb. Clarity is a feature, not a style.',
      },
    ],
  },
  {
    id: 'orbit-landing',
    title: 'Orbit Landing Page',
    client: 'Self-initiated',
    category: 'Landing Page',
    year: '2023',
    role: 'Web, Motion',
    deliverables: 'Page, Animation',
    figure: 4,
    images: [
      'https://res.cloudinary.com/dvt5nm1vy/image/upload/v1787835851/portfolio/portfolio/grotesk-foundry-1.jpg',
      'https://res.cloudinary.com/dvt5nm1vy/image/upload/v1787835857/portfolio/portfolio/grotesk-foundry-2.jpg',
      'https://res.cloudinary.com/dvt5nm1vy/image/upload/v1787835862/portfolio/portfolio/grotesk-foundry-3.jpg',
    ],
    featured: false,
    overview:
      'A study in restraint: a single-product landing page that earns its scroll with motion instead of noise. One hero idea, three sections, and animation used only to explain — never to decorate.',
    body: [
      {
        heading: 'Motion with a job',
        text: 'Every transition answers a question the eye was about to ask. Elements settle into place rather than bounce. The page feels considered because the motion is doing editorial work, not showing off the library.',
      },
      {
        heading: 'One idea, held',
        text: 'Most landing pages argue. This one states. The copy stays at one sentence per section and the layout gives each its own breath of space. Conversion is a side effect of being understood.',
      },
    ],
  },
  {
    id: 'echo-motion',
    title: 'Echo Motion Identity',
    client: 'Echo Studio',
    category: 'Motion',
    year: '2023',
    role: 'Brand, Motion',
    deliverables: 'Logo, Reel',
    figure: 5,
    images: [
      'https://res.cloudinary.com/dvt5nm1vy/image/upload/v1787835868/portfolio/portfolio/helsinki-school-1.jpg',
      'https://res.cloudinary.com/dvt5nm1vy/image/upload/v1787835874/portfolio/portfolio/helsinki-school-2.jpg',
      'https://res.cloudinary.com/dvt5nm1vy/image/upload/v1787835880/portfolio/portfolio/helsinki-school-3.jpg',
    ],
    featured: false,
    overview:
      'A motion studio whose old mark sat still. Echo is a living identity — a logo that loops, a type treatment that reacts, and a short reel that does the pitching a PDF never could.',
    body: [
      {
        heading: 'A mark that moves',
        text: 'The wordmark was rebuilt as a set of timed strokes, so it can introduce a video, watermark a frame or loop as a loader without losing the brand. Identity is no longer a file; it is a behaviour.',
      },
      {
        heading: 'The reel sells it',
        text: 'Instead of a static case study, the launch is a fifteen-second cut that shows the system in motion. Prospects understood the offer before the call started — because they had already watched it happen.',
      },
    ],
  },
]

export const categories = [...new Set(works.map((w) => w.category))]

import Image from "next/image";

type CraftCategory = {
  title: string;
  description: string;
};

type GalleryItem = {
  src: string;
  alt: string;
  title: string;
};

const craftCategories: CraftCategory[] = [
  {
    title: "Hand-Painted Pottery",
    description:
      "Functional and decorative pottery finished by hand, with colour, pattern, and detail chosen to feel personal and timeless.",
  },
  {
    title: "Mosaic",
    description:
      "Textured mosaic pieces that add warmth and story to a room, made with patient craftsmanship and a love for colour.",
  },
  {
    title: "Paintings",
    description:
      "Original painted works created to bring softness, character, and a handcrafted focal point into your home.",
  },
  {
    title: "Pewter",
    description:
      "Beautiful pewter pieces shaped and finished by hand for gifting, display, and memorable once-off keepsakes.",
  },
];

const galleryItems: GalleryItem[] = [
  {
    src: "/pottery.jpg",
    alt: "Placeholder image for hand-painted pottery",
    title: "Hand-painted pottery collection",
  },
  {
    src: "/mosaic.jpg",
    alt: "Placeholder image for mosaic artwork",
    title: "Decorative mosaic artwork",
  },
  {
    src: "/painting.jpg",
    alt: "Placeholder image for original paintings",
    title: "Original painted pieces",
  },
  {
    src: "/pewter.jpg",
    alt: "Placeholder image for pewter work",
    title: "Hand-finished pewter details",
  },
];

const whyChooseUs = [
  "Every piece is handmade by the studio owner with care and intention.",
  "No two items are exactly alike, giving each creation its own personality.",
  "Locally made for South African homes, gifts, and meaningful spaces.",
  "Custom requests and made-on-order pieces are part of the studio journey.",
];

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p
        className={`text-sm font-semibold uppercase tracking-[0.3em] ${
          light ? "text-white/80" : "text-[var(--color-accent)]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-3xl font-semibold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-[var(--color-ink)]"
        }`}
      >
        {title}
      </h2>
      <p
        className={`mt-4 text-base leading-7 sm:text-lg ${
          light ? "text-white/85" : "text-[var(--color-muted)]"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-[var(--color-cream)] text-[var(--color-ink)]">
      <header className="sticky top-0 z-50 border-b border-white/40 bg-[color:rgba(247,240,231,0.9)] backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-[var(--color-sand)] bg-white shadow-sm">
              {/* Replace /logo-placeholder.svg with your real logo file in /public later. */}
              <Image
                src="/cccs-logo.png"
                alt="Crazy Chameleon Craft Studio logo placeholder"
                width={48}
                height={48}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div>
              <p className="font-serif text-lg leading-none text-[var(--color-ink)]">
                Crazy Chameleon
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">
                Craft Studio
              </p>
            </div>
          </a>

          <nav aria-label="Primary navigation" className="w-full md:w-auto">
            <ul className="flex flex-wrap items-center gap-3 text-sm font-medium text-[var(--color-muted)] md:gap-6">
              <li>
                <a
                  href="#home"
                  className="inline-flex rounded-full px-3 py-2 transition hover:bg-white hover:text-[var(--color-accent)]"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="inline-flex rounded-full px-3 py-2 transition hover:bg-white hover:text-[var(--color-accent)]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="inline-flex rounded-full px-3 py-2 transition hover:bg-white hover:text-[var(--color-accent)]"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="inline-flex rounded-full px-3 py-2 transition hover:bg-white hover:text-[var(--color-accent)]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="relative isolate overflow-hidden px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-28"
      >
        <div className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top,rgba(183,110,60,0.20),transparent_60%)]" />
        <div className="absolute left-1/2 top-20 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[color:rgba(129,140,89,0.12)] blur-3xl" />

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="max-w-2xl">
            <p className="inline-flex rounded-full border border-[var(--color-sand)] bg-white/90 px-4 py-2 text-sm font-medium text-[var(--color-accent)] shadow-sm">
              Handmade local artistry from South Africa
            </p>
            <h1 className="mt-6 font-serif text-4xl leading-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
              Beautiful handmade pieces crafted to bring warmth, colour, and character into everyday spaces.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
              Crazy Chameleon Craft Studio creates hand-painted pottery, mosaic art,
              paintings, and pewter work made one piece at a time. This is a place for
              thoughtful gifts, personal touches, and locally made artistry with heart.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#gallery"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[color:rgba(183,110,60,0.25)] transition hover:-translate-y-0.5 hover:bg-[var(--color-accent-strong)]"
              >
                View Gallery
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-sand)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-ink)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--color-accent)]"
              >
                Contact Us
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-8 hidden h-24 w-24 rounded-full bg-[color:rgba(183,110,60,0.16)] blur-2xl sm:block" />
            <div className="absolute -right-4 bottom-8 hidden h-24 w-24 rounded-full bg-[color:rgba(129,140,89,0.2)] blur-2xl sm:block" />
            <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white p-3 shadow-[0_24px_70px_rgba(84,62,43,0.12)]">
              <Image
                src="/hero-showcase.svg"
                alt="Illustrated handmade craft studio hero image placeholder"
                width={880}
                height={960}
                className="h-full w-full rounded-[1.5rem] object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] border border-white/60 bg-white/75 p-8 shadow-[0_18px_50px_rgba(84,62,43,0.08)] backdrop-blur lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
          <div className="rounded-[1.75rem] bg-[var(--color-clay)]/12 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              The Studio Story
            </p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-[var(--color-ink)]">
              Handmade with patience, personality, and a love for meaningful detail.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-[var(--color-muted)]">
            <p>
              Crazy Chameleon Craft Studio is a celebration of making things by hand.
              Each piece begins as an idea, grows through careful craftsmanship, and is
              finished with the kind of detail that only comes from personal attention.
            </p>
            <p>
              From colourful pottery and mosaic designs to original paintings and pewter
              work, the studio is built around creating pieces that feel special, useful,
              and full of character. Nothing is mass-produced. Everything is made by the
              owner, one piece at a time.
            </p>
            <p>
              {/* Replace this story with your own brand journey when you are ready. */}
              This section is a polished placeholder for your brand story and can easily
              be updated with your own journey, inspiration, and creative process.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Craft Categories"
            title="Handcrafted collections with an artisan touch"
            description="Each category offers something a little different, while keeping the same warm, handmade feeling across the studio."
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {craftCategories.map((category) => (
              <article
                key={category.title}
                className="group rounded-[1.75rem] border border-white/60 bg-white p-6 shadow-[0_14px_35px_rgba(84,62,43,0.08)] transition hover:-translate-y-1"
              >
                <div className="h-12 w-12 rounded-2xl bg-[linear-gradient(135deg,rgba(183,110,60,0.18),rgba(129,140,89,0.16))]" />
                <h3 className="mt-6 text-xl font-semibold text-[var(--color-ink)]">
                  {category.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                  {category.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Featured Gallery"
            title="A first glimpse into the studio"
            description="These placeholder images are ready to be swapped out for real product and studio photography whenever you are ready."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {galleryItems.map((item, index) => (
              <figure
                key={item.title}
                className={`overflow-hidden rounded-[2rem] border border-white/60 bg-white p-3 shadow-[0_18px_40px_rgba(84,62,43,0.1)] ${
                  index === 0 || index === 3 ? "sm:translate-y-6" : ""
                }`}
              >
                {/* Replace each SVG in /public with real images later.
                    Example files to swap:
                    - /public/gallery-pottery.svg
                    - /public/gallery-mosaic.svg
                    - /public/gallery-painting.svg
                    - /public/gallery-pewter.svg
                */}
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={900}
                  height={700}
                  className="h-72 w-full rounded-[1.5rem] object-cover"
                />
                <figcaption className="px-2 pb-2 pt-4">
                  <p className="text-base font-semibold text-[var(--color-ink)]">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                    Elegant placeholder imagery for version one of the website.
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[var(--color-olive)] px-8 py-12 text-white shadow-[0_24px_60px_rgba(98,105,69,0.22)] lg:px-12">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Crafted for people who value the personal touch"
            description="The studio is rooted in care, originality, and the kind of quality that comes from making things by hand."
            light
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {whyChooseUs.map((reason) => (
              <div
                key={reason}
                className="rounded-[1.5rem] border border-white/20 bg-white/10 p-5 backdrop-blur-sm"
              >
                <p className="text-base leading-7 text-white/90">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/60 bg-white p-8 shadow-[0_18px_50px_rgba(84,62,43,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-accent)]">
              Contact
            </p>
            <h2 className="mt-4 font-serif text-3xl text-[var(--color-ink)]">
              Let’s talk about a piece you’ll love for years.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
              Custom requests and personal gifting ideas are welcome. A dedicated custom
              request system is coming soon, but you can already get in touch using the
              details below.
            </p>

            <dl className="mt-8 space-y-5 text-sm text-[var(--color-muted)]">
              <div>
                <dt className="font-semibold text-[var(--color-ink)]">Phone</dt>
                <dd>{/* Replace with your real phone number. */}+27 00 000 0000</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--color-ink)]">WhatsApp</dt>
                <dd>{/* Replace with your real WhatsApp link or number. */}+27 00 000 0000</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--color-ink)]">Email</dt>
                <dd>{/* Replace with your real email address. */}hello@crazychameleoncraftstudio.co.za</dd>
              </div>
              <div>
                <dt className="font-semibold text-[var(--color-ink)]">Location</dt>
                <dd>{/* Replace with your town/city. */}Based in South Africa</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-[2rem] border border-white/60 bg-white p-8 shadow-[0_18px_50px_rgba(84,62,43,0.08)]">
            <h3 className="text-2xl font-semibold text-[var(--color-ink)]">Send an enquiry</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              This front-end-only form is ready for styling and layout today. You can connect
              it to email, Formspark, Formspree, or another service later when you are ready.
            </p>

            <form className="mt-8 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--color-ink)]">
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-2xl border border-[var(--color-sand)] bg-[var(--color-cream)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--color-ink)]">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  className="w-full rounded-2xl border border-[var(--color-sand)] bg-[var(--color-cream)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-[var(--color-ink)]">
                  Tell us what you are looking for
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="I’m interested in a handmade gift, a custom pottery piece, or something special for my home."
                  className="w-full rounded-2xl border border-[var(--color-sand)] bg-[var(--color-cream)] px-4 py-3 text-sm text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
                />
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[color:rgba(183,110,60,0.25)] transition hover:bg-[var(--color-accent-strong)]"
              >
                Send Message
              </button>

              <p className="text-sm leading-6 text-[var(--color-muted)]">
                This form is a visual placeholder for version one and does not send yet.
                Custom request functionality is coming soon.
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/50 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm text-[var(--color-muted)] sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-serif text-lg text-[var(--color-ink)]">
              Crazy Chameleon Craft Studio
            </p>
            <p className="mt-1">
              © {new Date().getFullYear()} Crazy Chameleon Craft Studio. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            {/* Replace these placeholders with your real social profile links later. */}
            <a href="#" className="transition hover:text-[var(--color-accent)]">
              Facebook
            </a>
            <a href="#" className="transition hover:text-[var(--color-accent)]">
              Instagram
            </a>
            <a href="#" className="transition hover:text-[var(--color-accent)]">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

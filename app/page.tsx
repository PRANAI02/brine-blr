import Nav from "@/components/Nav";
import ScrollReveal from "@/components/ScrollReveal";
import Footer from "@/components/Footer";
import InstaFeed from "@/components/InstaFeed";
import { INFO, SIGNATURES, MENU, REVIEWS, HOURS, INSTA_POSTS } from "@/lib/data";

// A curated slice of the full card for the homepage preview.
const PREVIEW = MENU.slice(0, 4);

const waBook = `https://wa.me/${INFO.whatsappRaw}?text=${encodeURIComponent(
  `Hi Brine, I'd like to request a table.`
)}`;

export default function Home() {
  return (
    <>
      <Nav />
      <ScrollReveal />
      <main id="top">
        {/* ---------------- HERO ---------------- */}
        <header className="hero">
          <div className="hero-bg">
            <video autoPlay muted loop playsInline poster="/images/hero-poster.jpg">
              <source src="/video/hero.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="wrap hero-content">
            <p className="eyebrow">{INFO.addressShort} · {INFO.city}</p>
            <h1 className="display">
              Salt. Fire. <span className="accent">Ferment.</span>
            </h1>
            <p className="lead">
              A modern-European bar &amp; kitchen built on brine — where salt,
              water and time preserve and heighten everything that reaches the
              table. Brutalist concrete, a copper bar, and a menu that never
              sits still.
            </p>
            <div className="hero-cta">
              <a
                href={INFO.reserveUrl}
                target="_blank"
                rel="noopener"
                className="btn btn-primary"
              >
                Book a Table
              </a>
              <a href="/menu" className="btn btn-ghost">
                See the Menu
              </a>
            </div>
            <div className="hero-meta">
              <span>
                <i />
                {INFO.hours}
              </span>
              <span>
                <i />
                Bar &amp; Kitchen
              </span>
              <span>
                <i />
                Indiranagar, Bengaluru
              </span>
            </div>
          </div>
        </header>

        {/* ---------------- STORY ---------------- */}
        <section className="section" id="story">
          <div className="wrap story-grid">
            <div className="story-figure reveal">
              <img src="/images/story.jpg" alt="Inside Brine — the concrete room, glass brick and communal tables" />
              <span className="tag">The Room · Indiranagar</span>
            </div>
            <div className="story reveal">
              <p className="eyebrow">The Idea</p>
              <h2 className="h2">Preserved by salt &amp; time.</h2>
              <p className="lead">
                Brine takes its name from the oldest trick in the kitchen — salt,
                water and patience to preserve and deepen flavour. That idea runs
                through the whole room: house ferments, aged sauces, and a menu
                that keeps evolving with the season.
              </p>
              <p className="muted">
                Set inside a brutalist shell of raw concrete, glass brick and a
                warm copper bar, Brine is a cuisine-agnostic kitchen and bar in
                the heart of Indiranagar — from the founders behind Brik Oven,
                with a kitchen led by chef Arjun Joseph Mathew.
              </p>
              <div className="stat-row">
                <div className="stat">
                  <b>120</b>
                  <span>Seats across the rooms</span>
                </div>
                <div className="stat">
                  <b>12</b>
                  <span>Signature cocktails</span>
                </div>
                <div className="stat">
                  <b>0%</b>
                  <span>House ferments &amp; brews</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- SIGNATURES ---------------- */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="eyebrow">Plates &amp; Pours</p>
                <h2 className="h2">Signatures worth the trip</h2>
              </div>
              <a href="/menu" className="btn btn-ghost">
                Full Menu
              </a>
            </div>
            <div className="dish-grid">
              {SIGNATURES.map((d) => (
                <article className="dish reveal" key={d.name}>
                  <img src={d.img} alt={d.name} loading="lazy" />
                  <div className="dish-body">
                    <div className="k">{d.key} · {d.price}</div>
                    <h3>{d.name}</h3>
                    <p>{d.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- INTERIOR SLAB ---------------- */}
        <section className="slab">
          <div
            className="slab-bg"
            style={{ backgroundImage: "url(/images/slab.jpg)" }}
          />
          <div className="wrap slab-content reveal">
            <p className="eyebrow">The Bar</p>
            <h2 className="h2">A copper bar that ferments its own.</h2>
            <p className="lead">
              Behind the glass brick, the bar builds its own brines, ferments and
              acids — folding them into drinks like Salt &amp; Pepper, Weeds and
              the Vesper. Zero-proof? The house kombucha and sencha brews hold
              their own.
            </p>
          </div>
        </section>

        {/* ---------------- MENU PREVIEW ---------------- */}
        <section
          className="section"
          style={{
            background: "var(--ink-2)",
            borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <div className="wrap">
            <div className="sec-head center">
              <p className="eyebrow center">Eat &amp; Drink</p>
              <h2 className="h2">A menu that keeps moving</h2>
            </div>
            <div className="menu-cats reveal">
              {PREVIEW.map((cat) => (
                <div className="menu-cat" key={cat.title}>
                  <h3>
                    {cat.title}
                    <em>{cat.kicker}</em>
                  </h3>
                  {cat.items.slice(0, 4).map((it) => (
                    <div className="menu-item" key={it.name}>
                      <div>
                        <span className={`veg ${it.veg ? "v" : "n"}`} />
                        <span className="nm">{it.name}</span>
                        {it.desc && <div className="ds">{it.desc}</div>}
                      </div>
                      <span className="dots" />
                      <span className="pr">{it.price}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: 48 }}>
              <a href="/menu" className="btn btn-primary">
                See the Full Menu
              </a>
            </div>
          </div>
        </section>

        {/* ---------------- INSTAGRAM ---------------- */}
        <section className="section insta" id="insta">
          {INSTA_POSTS.length > 0 ? (
            <div className="wrap">
              <div className="sec-head center">
                <p className="eyebrow center">Follow Along</p>
                <h2 className="h2">See it first on Instagram</h2>
                <p className="insta-handle">@{INFO.handle}</p>
              </div>
              <InstaFeed posts={INSTA_POSTS} />
              <div style={{ textAlign: "center", marginTop: 44 }}>
                <a href={INFO.instagram} target="_blank" rel="noopener" className="btn btn-primary">
                  Follow @{INFO.handle}
                </a>
              </div>
            </div>
          ) : (
            <div className="wrap insta-grid">
              <div className="reveal">
                <p className="eyebrow">Follow Along</p>
                <h2 className="h2">See it first on Instagram.</h2>
                <p className="insta-handle">@{INFO.handle}</p>
                <p className="lead">
                  New plates, new pours and the day&apos;s specials land on the grid
                  first. It&apos;s also the quickest way to reach us — bookings and
                  questions go straight to the DMs.
                </p>
                <div className="hero-cta">
                  <a
                    href={INFO.instagram}
                    target="_blank"
                    rel="noopener"
                    className="btn btn-primary"
                  >
                    Follow @{INFO.handle}
                  </a>
                </div>
              </div>
              <div className="insta-tiles reveal">
                {[
                  { img: "/images/bar-1.jpg", alt: "Salt & Pepper cocktail" },
                  { img: "/images/dish-mackerel.jpg", alt: "Charred mackerel" },
                  { img: "/images/twig.jpg", alt: "Inside Brine" },
                  { img: "/images/bar-2.jpg", alt: "Coffee cocktail" },
                ].map((t) => (
                  <a
                    key={t.img}
                    href={INFO.instagram}
                    target="_blank"
                    rel="noopener"
                    aria-label={`${t.alt} on Instagram`}
                  >
                    <img src={t.img} alt={t.alt} loading="lazy" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* ---------------- PRESS ---------------- */}
        <section className="section">
          <div className="wrap">
            <div className="sec-head center">
              <p className="eyebrow center">In the Press</p>
              <h2 className="h2">Talk of the town</h2>
            </div>
            <div className="rev-grid">
              {REVIEWS.map((r, i) => (
                <div className="rev reveal" key={i}>
                  <span className="stars">✦</span>
                  <p>&ldquo;{r.text}&rdquo;</p>
                  <div className="who">— {r.who}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- LOCATION ---------------- */}
        <section
          className="section"
          id="visit"
          style={{
            background: "var(--ink-2)",
            borderTop: "1px solid var(--line)",
          }}
        >
          <div className="wrap">
            <div className="sec-head">
              <div>
                <p className="eyebrow">Find Us</p>
                <h2 className="h2">Come hungry</h2>
              </div>
              <a
                href={INFO.mapsUrl}
                target="_blank"
                rel="noopener"
                className="btn btn-ghost"
              >
                Get Directions
              </a>
            </div>
            <div className="visit-figure reveal">
              <img src="/images/exterior.jpg" alt="Brine — the glass-brick facade on 80 Feet Road, Indiranagar" loading="lazy" />
            </div>
            <div className="loc-grid reveal">
              <div className="loc-info">
                <div className="loc-row">
                  <div className="k">Address</div>
                  <div className="v">{INFO.address}</div>
                </div>
                <div className="loc-row">
                  <div className="k">Hours</div>
                  <div className="v">
                    <ul className="hours-list">
                      {HOURS.map((h) => (
                        <li
                          key={h.day}
                          className={h.times[0] === "Closed" ? "closed" : ""}
                        >
                          <span className="d">{h.day}</span>
                          <span className="t">{h.times.join(" · ")}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="loc-row">
                  <div className="k">Bookings</div>
                  <div className="v">
                    <a href={INFO.districtUrl} target="_blank" rel="noopener" className="red">
                      District
                    </a>
                    {"  ·  "}
                    <a href={INFO.dineoutUrl} target="_blank" rel="noopener" className="red">
                      Dineout
                    </a>
                    {"  ·  "}
                    <a href={waBook} target="_blank" rel="noopener" className="red">
                      WhatsApp
                    </a>
                  </div>
                </div>
                <div className="loc-row">
                  <div className="k">Good to know</div>
                  <div className="v muted">
                    {INFO.costForTwo} · {INFO.hoursNote}
                  </div>
                </div>
              </div>
              <div className="loc-map">
                <iframe
                  title={`${INFO.name} map`}
                  src={INFO.mapEmbed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- RESERVE + FOLLOW (merged) ---------------- */}
        <section className="slab reserve-slab" id="reserve">
          <div
            className="slab-bg"
            style={{ backgroundImage: "url(/images/interior.jpg)" }}
          />
          <div className="wrap slab-content reveal" style={{ textAlign: "center", margin: "0 auto" }}>
            <p className="eyebrow center">Reservations</p>
            <h2 className="h2">Book your table</h2>
            <p className="lead" style={{ margin: "22px auto 0", maxWidth: "52ch" }}>
              Reserve on District or Dineout, or message us on WhatsApp — weekends
              fill fast, so a heads-up helps.
            </p>
            <div className="reserve-cta">
              <a href={INFO.districtUrl} target="_blank" rel="noopener" className="btn btn-primary">
                Book on District
              </a>
              <a href={INFO.dineoutUrl} target="_blank" rel="noopener" className="btn btn-ghost">
                Book on Dineout
              </a>
              <a href={waBook} target="_blank" rel="noopener" className="btn btn-ghost">
                Book on WhatsApp
              </a>
            </div>
            <p className="reserve-follow">
              New plates &amp; the day&apos;s specials land first on{" "}
              <a href={INFO.instagram} target="_blank" rel="noopener" className="red">
                Instagram @{INFO.handle}
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

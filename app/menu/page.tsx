import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { INFO, MENU, BUTTERS, MenuItem } from "@/lib/data";

export const metadata: Metadata = {
  title: `Menu — ${INFO.name}, ${INFO.city}`,
  description: `The ${INFO.name} menu. ${INFO.tagline}.`,
};

function List({ items }: { items: MenuItem[] }) {
  return (
    <>
      {items.map((it) => (
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
    </>
  );
}

export default function MenuPage() {
  // Split categories across two columns (even index → left, odd → right).
  const left = MENU.filter((_, i) => i % 2 === 0);
  const right = MENU.filter((_, i) => i % 2 === 1);

  return (
    <>
      <Nav />
      <ScrollReveal />
      <main>
        <section className="menu-hero">
          <div className="wrap">
            <a href="/" className="back-link">
              ← Back to {INFO.name}
            </a>
            <h1 className="display" style={{ marginTop: 20 }}>
              The Menu
            </h1>
            <p className="lead" style={{ marginTop: 18 }}>
              {INFO.tagline}. A selection is shown below.
            </p>
            <p className="note" style={{ marginTop: 14 }}>
              <span className="veg v" style={{ marginRight: 6 }} />
              Vegetarian
              <span className="veg n" style={{ margin: "0 6px 0 20px" }} />
              Non-vegetarian
            </p>
          </div>
        </section>

        <section className="section" style={{ paddingTop: 64 }}>
          <div className="wrap menu-page-grid">
            {[left, right].map((col, ci) => (
              <div key={ci}>
                {col.map((cat, idx) => (
                  <div className="menu-cat menu-block reveal" key={cat.title}>
                    <h3>
                      {cat.title}
                      <em>{cat.kicker}</em>
                    </h3>
                    <List items={cat.items} />
                    {/* Optional add-on row under the first left-column category */}
                    {ci === 0 && idx === 0 && BUTTERS.length > 0 && (
                      <div style={{ marginTop: 18 }}>
                        <List items={BUTTERS} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="wrap">
            <p className="note" style={{ marginTop: 8, textAlign: "center" }}>
              Prices in ₹. Taxes & service charge as applicable. {INFO.costForTwo}.
            </p>
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <a href={INFO.reserveUrl} target="_blank" rel="noopener" className="btn btn-primary">
                Book a Table
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import { INFO } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="brand">
              <img
                className="logo"
                src="/images/logo.png"
                alt={`${INFO.name} logo`}
              />
              <span className="brand-txt">
                <b>{INFO.name}</b>
                <span>
                  {INFO.addressShort} · {INFO.city}
                </span>
              </span>
            </div>
            <p className="muted" style={{ marginTop: 18, maxWidth: "34ch" }}>
              {INFO.tagline}.
            </p>
          </div>
          <div className="foot-col">
            <h4>Visit</h4>
            <p>{INFO.address}</p>
            <p>
              {INFO.hours} · {INFO.hoursNote}
            </p>
            <a href={`https://wa.me/${INFO.whatsappRaw}`} target="_blank" rel="noopener">
              WhatsApp {INFO.whatsappDisplay}
            </a>
            <a href={INFO.instagram} target="_blank" rel="noopener">
              @{INFO.handle}
            </a>
          </div>
          <div className="foot-col">
            <h4>Explore</h4>
            <a href="/#story">Story</a>
            <a href="/menu">Menu</a>
            <a href="/#insta">Instagram</a>
            <a href="/#reserve">Book a Table</a>
            <a href={INFO.mapsUrl} target="_blank" rel="noopener">
              Directions
            </a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>
            © {new Date().getFullYear()} {INFO.name} — {INFO.city}
          </span>
          <span>{INFO.addressShort}</span>
        </div>
      </div>
    </footer>
  );
}

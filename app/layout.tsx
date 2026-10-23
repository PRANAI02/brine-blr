import type { Metadata } from "next";
// FONT CHOICE — swap these three per brand. Common pairings:
//   Display: Anton / Archivo_Black / Bebas_Neue / Fraunces (serif)
//   Body:    Inter / Manrope / Work_Sans        Mono: Space_Mono / DM_Mono
import { Anton, Inter, Space_Mono } from "next/font/google";
import "./globals.css";
import WhatsAppFab from "@/components/WhatsAppFab";
import { INFO } from "@/lib/data";

// TODO: confirm the real production URL once deployed.
const SITE_URL = "https://brine-blr.vercel.app";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-mono",
});

const TITLE = `${INFO.name} — ${INFO.addressShort}, ${INFO.city}`;
const DESC = `${INFO.tagline}. ${INFO.name} in ${INFO.addressShort}, ${INFO.city}.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    locale: "en_IN",
    siteName: INFO.name,
    // The share-preview card. Build /public/images/og.jpg at 1200x630
    // (see the skill's reference/gotchas.md for the one-liner).
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: INFO.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESC,
    images: ["/images/og.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <body>
        {children}
        <WhatsAppFab />
      </body>
    </html>
  );
}

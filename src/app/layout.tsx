import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Instrument_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Praneetha Gandikota — UI/UX Designer",
    template: "%s — Praneetha Gandikota",
  },
  description:
    "Praneetha Gandikota is a UI/UX designer with a background in artificial intelligence. She turns research into clear, warm, considered product experiences.",
  keywords: [
    "Praneetha Gandikota",
    "UI/UX designer",
    "product designer",
    "UX research",
    "interaction design",
    "Chicago designer",
  ],
  authors: [{ name: "Praneetha Gandikota" }],
  creator: "Praneetha Gandikota",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Praneetha Gandikota — UI/UX Designer",
    description:
      "UI/UX designer with a background in artificial intelligence. Research-led, craft-obsessed product design.",
    siteName: "Praneetha Gandikota",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Praneetha Gandikota — UI/UX Designer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Praneetha Gandikota — UI/UX Designer",
    description:
      "UI/UX designer with a background in artificial intelligence. Research-led, craft-obsessed product design.",
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#fafaf8",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${instrumentSans.variable} ${ibmPlexMono.variable} antialiased`}
    >
      <body id="top" className="grain flex min-h-dvh flex-col bg-paper text-ink">
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-paper"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { MotionProvider } from "@/components/providers/motion-provider";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#090B10" },
    { media: "(prefers-color-scheme: light)", color: "#F7F6F3" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  keywords: [...siteConfig.keywords],

  authors: [{ name: siteConfig.name, url: siteConfig.url }],

  creator: siteConfig.name,

  alternates: {
    canonical: "/",
  },

  // og:image / twitter:image come from app/opengraph-image.tsx
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },

  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/profile.jpg`,
  description: siteConfig.description,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: siteConfig.college,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mangalore",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  knowsAbout: ["Machine Learning", "Software Engineering", "Quantum Machine Learning", "Python"],
  sameAs: [siteConfig.github, siteConfig.linkedin],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>
          <MotionProvider>
            <TooltipProvider>{children}</TooltipProvider>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

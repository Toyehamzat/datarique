import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/common/navbar";
import Footer from "@/component/common/footer";
import StructuredData from "@/component/common/structured-data";
import CTASection from "@/component/common/cta-section";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Datarique - Expert Data Analytics Training, Consultation & Services",
    template: "%s | Datarique - Your Direction for Data",
  },
  description:
    "Transform your business with expert data analytics training, consultation, and analytics-as-a-service. Learn data analysis, business intelligence, and make data-driven decisions. Courses for beginners to professionals.",
  keywords: [
    "data analytics training",
    "data analytics courses",
    "business intelligence training",
    "data analysis consultation",
    "analytics as a service",
    "data science courses",
    "learn data analytics",
    "data visualization training",
    "business analytics",
    "data-driven decisions",
    "data analytics for businesses",
    "online data courses",
    "data analytics certification",
    "professional data training",
    "analytics consultation services",
  ],
  authors: [{ name: "Datarique Limited" }],
  creator: "Datarique Limited",
  publisher: "Datarique Limited",
  metadataBase: new URL("https://datariqueltd.com"),
  applicationName: "Datarique",
  category: "Education & Business Analytics",
  classification: "Data Analytics Training and Consultation",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_NG",
    alternateLocale: ["en_US", "en_GB", "en_KE", "en_ZA", "en_GH"],
    url: "https://datariqueltd.com",
    title:
      "Datarique - Expert Data Analytics Training, Consultation & Services",
    description:
      "Transform your business with expert data analytics training, consultation, and analytics-as-a-service. Learn data analysis, business intelligence, and make data-driven decisions.",
    siteName: "Datarique",
    images: [
      {
        url: "https://i.pinimg.com/736x/4c/d3/71/4cd3711fd6ce1e9093c94007433b7abf.jpg",
        width: 1200,
        height: 630,
        alt: "Datarique - Your Direction for Data Analytics Training and Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Datarique - Expert Data Analytics Training & Consultation",
    description:
      "Transform your business with expert data analytics training, consultation, and analytics-as-a-service. Learn from industry professionals.",
    images: [
      "https://i.pinimg.com/736x/4c/d3/71/4cd3711fd6ce1e9093c94007433b7abf.jpg",
    ],
    creator: "@datarique",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://datariqueltd.com",
  },
  verification: {
    google: "HhVluoNiWO6sxsbv_A9PVUo4MJN_mQqwdSyk1aRoOEk",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen mx-auto flex w-full justify-center px-4 max-w-[1320px] scroll-smooth text-black">
          <div className="flex relative flex-col gap-2.5 py-5 w-full bg-transparent font-geist scroll-smooth">
            <Navbar />
            <div className="mt-20 md:mt-20">{children}</div>
            <CTASection />
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

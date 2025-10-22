import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/common/navbar";
import Footer from "@/component/common/footer";

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
    default: "Datarique - Your Direction for Data",
    template: "%s | Datarique",
  },
  description:
    "Empowering individuals and businesses to make smarter decisions through data — with training, consultation, and analytics-as-a-service.",
  keywords: [
    "data analytics",
    "data training",
    "business intelligence",
    "analytics consultation",
    "data courses",
    "analytics as a service",
  ],
  authors: [{ name: "Datarique Limited" }],
  creator: "Datarique Limited",
  publisher: "Datarique Limited",
  metadataBase: new URL("https://datariqueltd.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://datariqueltd.com",
    title: "Datarique - Your Direction for Data",
    description:
      "Empowering individuals and businesses to make smarter decisions through data — with training, consultation, and analytics-as-a-service.",
    siteName: "Datarique",
    images: [
      {
        url: "/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "Datarique - Your Direction for Data",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Datarique - Your Direction for Data",
    description:
      "Empowering individuals and businesses to make smarter decisions through data — with training, consultation, and analytics-as-a-service.",
    images: ["/images/logo.svg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen mx-auto flex w-full justify-center px-4 max-w-[1320px] scroll-smooth text-black">
          <div className="flex relative flex-col gap-2.5 py-5 w-full bg-transparent font-geist scroll-smooth">
            <Navbar />
            <div className="mt-20 md:mt-20">
              {children}
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}

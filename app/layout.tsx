import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
import { headers } from "next/headers";
import AnnouncementBanner from "@/components/announcement-banner";

export const metadata: Metadata = {
  title: {
    default: "Rotaract Club of Vadodara",
    template: "%s | Rotaract Club of Vadodara",
  },
  description:
    "Rotaract Club of Vadodara - A dynamic community of young leaders dedicated to service, leadership, and positive change in our society.",
  keywords: [
    "Rotaract",
    "Vadodara",
    "Community Service",
    "Youth Leadership",
    "Rotary International",
    "Volunteer",
  ],
  authors: [{ name: "Rotaract Club of Vadodara" }],
  creator: "Rotaract Club of Vadodara",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rotaractvadodara.org",
    siteName: "Rotaract Club of Vadodara",
    title: "Rotaract Club of Vadodara",
    description:
      "Empowering young leaders through service and community engagement",
    images: [
      {
        url: "/images/logos/rcvLogo.png",
        width: 1200,
        height: 630,
        alt: "Rotaract Club of Vadodara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rotaract Club of Vadodara",
    description:
      "Empowering young leaders through service and community engagement",
    images: ["/images/logos/rcvLogo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = headers();
  const hideNav = headersList.get("x-hide-nav") === "true";

  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        {!hideNav && (
          <>
            <AnnouncementBanner />
            <Navbar />
          </>
        )}
        <main className="relative">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}

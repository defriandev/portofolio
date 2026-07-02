import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Defrian Bagus Dewanta Putra — Portfolio",
  description:
    "Informatics Engineering student at Universitas Airlangga. Experienced in Web Development, Mobile Development, UI/UX Design, and Information Systems.",
  keywords: [
    "Defrian Bagus Dewanta Putra",
    "Portfolio",
    "Frontend Developer",
    "Web Developer",
    "Universitas Airlangga",
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

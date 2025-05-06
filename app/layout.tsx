import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://meikopoulos.com"),
  alternates: {
    canonical: "https://meikopoulos.com",
  },
  title: "Shivendra K C",
  description:
    "Shivendra K C is a IT student and a developer",
  keywords:
    "Shivendra K C, Web Developer, IT Student,  Graphic Designer, Automation Enthusiast",
  openGraph: {
    locale: "en_US",
    siteName: "Shivendra K C",
    type: "website",
    title: "Shivendra K C",
    description:
      "Shivendra K C is a IT student and a developer",
    url: "https://meikopoulos.com",
    images: [
      {
        url: "./og-large-meik-2.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alexander Meikopoulos",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}

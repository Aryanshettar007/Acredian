import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: "Accredian Enterprise | Upskill Your Workforce",
  description: "Empower your team with Accredian Enterprise. Tailored training programs, expert guidance, and proven learning frameworks to drive organizational success.",
  keywords: ["enterprise training", "workforce upskilling", "corporate learning", "Accredian", "skill gap analysis"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

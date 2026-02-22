import type { Metadata } from "next";
import { Hubot_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const hubotSans = Hubot_Sans({
  variable: "--font-hubot-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cyber Campaign",
  description:
    "Your complete resource to learn, build skills, and stay ahead in cyber security. Domains, threats, best practices, emerging technologies, and hands-on training.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${hubotSans.variable} min-h-screen bg-[#0a0908] text-stone-200 antialiased font-sans`}
      >
        <Header />
        <main className="pt-14 min-h-screen flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

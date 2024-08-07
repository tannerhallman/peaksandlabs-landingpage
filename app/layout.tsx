// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
interface Props {
  children: React.ReactNode; // <--- Added type annotation here
}
const fontHeading = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
});

const fontBody = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});



export default function Layout({ children }: Props) {
  return (
    <html lang='en'>
      <body
        className={cn("antialiased", fontHeading.variable, fontBody.variable)}>
        <Analytics />
        <SpeedInsights />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

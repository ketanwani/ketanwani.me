import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ketan Wani — Software Engineer",
  description:
    "15+ years building scalable enterprise platforms, cloud-native systems, and AI-driven workflow automation at Meta and Amazon.",
  keywords: ["Ketan Wani", "Software Engineer", "Meta", "AI Agents", "Singapore"],
  icons: {
    icon: "https://avatars.githubusercontent.com/u/13885460?v=4",
    apple: "https://avatars.githubusercontent.com/u/13885460?v=4",
  },
  openGraph: {
    title: "Ketan Wani — Software Engineer",
    description: "Currently leading AI agent platform development at Meta, Singapore.",
    url: "https://ketanwani.me",
    siteName: "Ketan Wani",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#05080f] text-slate-200`}>
        {children}
      </body>
    </html>
  );
}

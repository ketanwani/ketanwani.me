import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ketanwani.me"),
  title: "Ketan Wani — Software Engineer",
  description:
    "15+ years building scalable enterprise platforms, cloud-native systems, and AI-driven workflow automation at Meta and Amazon.",
  keywords: ["Ketan Wani", "Software Engineer", "Meta", "AI Agents", "Singapore", "No-Code", "Workflow Automation"],
  authors: [{ name: "Ketan Wani", url: "https://ketanwani.me" }],
  creator: "Ketan Wani",
  icons: {
    icon: "https://avatars.githubusercontent.com/u/13885460?v=4",
    apple: "https://avatars.githubusercontent.com/u/13885460?v=4",
  },
  openGraph: {
    title: "Ketan Wani — Software Engineer",
    description: "15+ years building scalable enterprise platforms, cloud-native systems, and AI-driven workflow automation at Meta and Amazon.",
    url: "https://ketanwani.me",
    siteName: "Ketan Wani",
    type: "profile",
    locale: "en_US",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/13885460?v=4",
        width: 400,
        height: 400,
        alt: "Ketan Wani",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Ketan Wani — Software Engineer",
    description: "15+ years building scalable enterprise platforms, cloud-native systems, and AI-driven workflow automation at Meta and Amazon.",
    images: ["https://avatars.githubusercontent.com/u/13885460?v=4"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://ketanwani.me",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ketan Wani",
  url: "https://ketanwani.me",
  email: "ketan.wa@gmail.com",
  jobTitle: "Software Engineer",
  description:
    "Experienced Software Engineer with 15+ years building scalable enterprise platforms, cloud-native systems, and AI-driven workflow automation at Meta and Amazon.",
  worksFor: {
    "@type": "Organization",
    name: "Meta",
    url: "https://meta.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Singapore",
    addressCountry: "SG",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Birla Vishwakarma Mahavidyalaya",
  },
  sameAs: [
    "https://www.linkedin.com/in/ketan-wani-5187a820/",
    "https://github.com/ketanwani",
  ],
  knowsAbout: [
    "AI Agents",
    "Workflow Automation",
    "No-Code Platforms",
    "Cloud-Native Systems",
    "React",
    "Next.js",
    "Python",
    "TypeScript",
    "C++",
  ],
  image: "https://avatars.githubusercontent.com/u/13885460?v=4",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#05080f] text-slate-200`}>
        {children}
      </body>
    </html>
  );
}

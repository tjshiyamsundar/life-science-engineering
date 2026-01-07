import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Life Science Community - Connect, Learn, Grow",
  description: "A comprehensive platform for life science students and recent graduates offering career roadmaps, mentorship, blogs, and professional guidance.",
  keywords: ["life science", "students", "graduates", "career", "mentorship", "blogs", "community"],
  authors: [{ name: "Life Science Community Team" }],
  openGraph: {
    title: "Life Science Community",
    description: "Connect, Learn, and Grow with fellow life science professionals",
    url: "https://lifescience-community.com",
    siteName: "Life Science Community",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Life Science Community",
    description: "Connect, Learn, and Grow with fellow life science professionals",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}

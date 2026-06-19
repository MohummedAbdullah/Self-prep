import type { Metadata } from "next";
import "./globals.css";
import InteractiveBackground from "./lib/utils/interactivebackground";

export const metadata: Metadata = {
  title: "Mastering the Interview",
  description: " A Comprehensive Guide to Prepare for Your Job Interview",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <InteractiveBackground/>
        {children}</body>
    </html>
  );
}

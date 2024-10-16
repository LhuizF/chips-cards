import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ViewTransitions } from 'next-view-transitions';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const exocetHeavy = localFont({
  src: "./fonts/exocet-heavy.ttf",
  variable: "--font-exocet-heavy",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          suppressHydrationWarning={true}
          className={`${geistSans.variable} ${geistMono.variable} ${exocetHeavy.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ViewTransitions>
  );
}

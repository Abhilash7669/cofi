import type { Metadata } from "next";
import { Lora, Outfit } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/main-layout";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"]
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Cofi",
  description: "Cofi-Hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        data-theme="light"
        className={`${lora.variable} ${outfit.variable} antialiased bg-background`}
      >
        <MainLayout className="max-w-[2200px] mx-auto">{children}</MainLayout>
      </body>
    </html>
  );
}

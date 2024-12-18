import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Inter } from 'next/font/google'; // Ensure this import is correct

const inter = Inter({ subsets: ['latin'] });
import { twMerge } from "tailwind-merge";
import { ClerkProvider, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
export const metadata: Metadata = {
  title: "OsteoScanPro",
  description: "Developed And Designed By Abdullah"
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, "bg-black text-white antialiased")}>
        <div>
          
          {children}
        </div>
      </body>
    </html>

  );
}
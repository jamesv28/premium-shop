import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "../assets/styles/globals.css";

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pro Shop",
  description: "Modern eCommerce project built with next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rethinkSans.className}  antialiased`}>
        {children}
      </body>
    </html>
  );
}

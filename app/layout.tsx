import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import { APP_DESCRIPTION, APP_NAME, SERVER_URL } from "@/lib/globals";
import "../assets/styles/globals.css";

const rethinkSans = Rethink_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: `%s | Premium Store`,
    default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  metadataBase: new URL(SERVER_URL),
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

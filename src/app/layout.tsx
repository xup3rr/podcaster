import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ReactQueryClientProvider } from "@/components/Context/ReactQueryClientProvider";
import Header from "@/components/ui/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Podcaster",
  description:
    "A podcast app built with Next.js and Tailwind CSS. It showcases the top 100 trending podcasts from the iTunes API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <body className={`${inter.className} p-8`}>
          <Header />
          {children}
        </body>
      </html>
    </ReactQueryClientProvider>
  );
}

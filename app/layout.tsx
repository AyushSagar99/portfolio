import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import ActiveSectionProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ayush Sagar | Full Stack Developer",
  description:
    "Ayush Sagar is a full stack developer shipping production React, Next.js, and TypeScript apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-white text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100`}
      >
        <ThemeContextProvider>
          <ActiveSectionProvider>
            <div className="mx-auto flex min-h-screen max-w-3xl flex-col border-x border-zinc-200 dark:border-zinc-800">
              <Header />
              {children}
              <Footer />
            </div>
            <Toaster position="top-right" />
          </ActiveSectionProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}

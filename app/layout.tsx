import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar";

import { Providers } from "./Providers";

export const metadata: Metadata = {
  title: "Kehinde Portfolio",
  description: "Personal portfolio website for Kehinde",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-500">
        <Providers>
          <Navbar />
          <main className="pt-16">{children}</main>
        </Providers>
      </body>
    </html>
  );
}

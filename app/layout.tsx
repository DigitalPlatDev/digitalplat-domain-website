import "@/styles/tailwind.css";

import { Urbanist } from "next/font/google";

import { AppFooter } from "@/components/AppFooter";
import { AppHeader } from "@/components/AppHeader";

export const metadata = {
  title: "DigitalPlat Domains",
  description:
    "DigitalPlat Domains is operated by EdgeAlphix LLC and provides accessible public namespaces for people and organizations worldwide.",
};

const urbanist = Urbanist({
  preload: true,
  display: "swap",
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

export default async function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={`bg-white text-gray-950 antialiased dark:bg-gray-950 dark:text-white ${urbanist.className}`}
      >
        <AppHeader />
        <main className="mb-40 space-y-40">{children}</main>
        <AppFooter />
      </body>
    </html>
  );
}

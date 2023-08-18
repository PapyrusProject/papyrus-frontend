import type { Metadata } from "next";

import "@/styles/globals.css";

import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Papyrus - Enjoy note taking with your friends",
  description: "Enjoy note taking with your friends",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

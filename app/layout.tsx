import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crazy Chameleon Craft Studio",
  description:
    "Handmade local craft studio creating hand-painted pottery, mosaic art, paintings, and pewter work in South Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

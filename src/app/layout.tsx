import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/header";



export const metadata: Metadata = {
  title: "Saka Kominfo Sleman",
  description: "Satya Bhakti Bina Mandiri Pandu Bumi dengan Informasi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className=" antialiased font-Neon" suppressHydrationWarning>
      <Header />
        <div>{children}</div>
      </body>
    </html>
  );
}

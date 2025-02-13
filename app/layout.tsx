import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SKMEI Watches | The Official Site for Skmei India Watches",
  description: "Buy Branded Original Skmei Watches for Men, Watches for Women and Kids at lowest price with Free Shipping, 6 Months Warranty & 7 Days Easy Return.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>

        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
        <meta name="google-site-verification" content="VLgHPrp5esWltJ6NkRe1CyIQpOBzAnWX8YBbJWLcT5U" />
        <meta name="google-site-verification" content="KWpxsYJQ_8JKKAm3KAWqsqMc-Qtqln4F9rs4NrePFF8" />
        <meta name="google-site-verification" content="oonk-xSF8sKoFmCo6BFLtYuCTL3yirUEj2u9FPwsX8g" />
        <meta name="google-site-verification" content="PJLqqmpbfpS37Jt12IwESL-4JIHbYb-21Uaki-1Nxp0" />
        <meta name="google-site-verification" content="_8oZfRZP3s8lq9ltlOasC0jOcuhzNulJYPwCmI4v1ds" />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import TwemojiLoader from "@/components/TwemojiLoader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ali Zubu - Multidisciplinary Designer - Ctg",
  description:
    "Hi! I'm Ali Zubu a Multidisciplinary Designer. I'm specialized in User Interface, Visual design, Motion graphic and Video Editing.",
  openGraph: {
    type: "website",
    title: "Ali Zubu - Multidisciplinary Designer - Chattogram",
    description:
      "Hi! I'm a Multidisciplinary Designer. I'm specialized in User Interface, Visual design, Motion graphic and Video Editing.",
    images: ["/img/Ali Zubu 1200x1200.png"],
  },
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/favicon/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/favicon/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/favicon/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/favicon/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/favicon/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/favicon/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/favicon/apple-icon-180x180.png", sizes: "180x180" },
    ],
  },
  other: {
    "msapplication-TileColor": "#ffffff",
    "theme-color": "#ffffff",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <TwemojiLoader />
      </body>
    </html>
  );
}

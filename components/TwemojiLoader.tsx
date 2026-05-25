"use client";

import Script from "next/script";

export default function TwemojiLoader() {
  const parsePage = () => {
    if (typeof window === "undefined") return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const tw = (window as any).twemoji;
    if (tw) {
      tw.parse(document.body, {
        folder: "svg",
        ext: ".svg",
        base: "https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/",
      });
    }
  };

  return (
    <Script
      src="https://cdn.jsdelivr.net/npm/@twemoji/api@latest/dist/twemoji.min.js"
      crossOrigin="anonymous"
      strategy="afterInteractive"
      onLoad={parsePage}
    />
  );
}

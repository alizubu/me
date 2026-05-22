"use client";

import P5HeroCanvas from "./P5HeroCanvas";

export default function HeroSection() {
  return (
    <section className="section hero" data-scroll-section>
      <P5HeroCanvas />
      <div className="hero-container titleAnimation" data-splitting="">
        <h1 className="title serif big" data-scroll="">
          <span data-scroll="" data-scroll-delay="0.18" data-scroll-speed="7" data-scroll-position="center">A</span>
          <span data-scroll="" data-scroll-delay="0.14" data-scroll-speed="10">L</span>
          <span data-scroll="" data-scroll-delay="0.12" data-scroll-speed="4">I</span>
          <span data-scroll="" data-scroll-delay="0.1" data-scroll-speed="7">Z</span>
          <span data-scroll="" data-scroll-delay="0.08" data-scroll-speed="12">U</span>
          <span data-scroll="" data-scroll-delay="0.12" data-scroll-speed="5">B</span>
          <span data-scroll="" data-scroll-delay="0.1" data-scroll-speed="7">U</span>
        </h1>
        <div id="delayedText" style={{ visibility: "hidden" }}>
          <p className="big" data-scroll="" data-scroll-speed="4" data-scroll-direction="horizontal">
            <span>who</span>
            <span>i am</span>
            <span>and </span>
            <span>what I do.</span>
          </p>
          <p className="designer forced" data-scroll="" data-scroll-speed="10">
            <span>multidisciplinary</span>
            <span>designer</span>
          </p>
        </div>
      </div>
    </section>
  );
}

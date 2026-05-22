"use client";

import { useEffect, useRef } from "react";

export default function Loader() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const panelLeftRef = useRef<HTMLDivElement>(null);
  const panelRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const runLoader = async () => {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.default;

      const COUNT_DURATION = 2.2;
      const HOLD_AFTER = 0.25;
      const EXIT_DURATION = 1.1;
      const CONTENT_IN = 0.9;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(
        { val: 0 },
        {
          val: 100,
          duration: COUNT_DURATION,
          ease: "power2.inOut",
          onUpdate: function () {
            const v = Math.round(this.targets()[0].val);
            if (counterRef.current) counterRef.current.textContent = String(v);
            if (fillRef.current) fillRef.current.style.width = v + "%";
          },
        }
      )
        .add(function () {
          if (labelRef.current) labelRef.current.textContent = "Ready";
        })
        .to({}, { duration: HOLD_AFTER })
        .to(".loader__content", {
          opacity: 0,
          y: -18,
          duration: 0.35,
          ease: "power2.in",
        })
        .to(
          panelLeftRef.current,
          {
            xPercent: -100,
            duration: EXIT_DURATION,
            ease: "expo.inOut",
          },
          "<0.05"
        )
        .to(
          panelRightRef.current,
          {
            xPercent: 100,
            duration: EXIT_DURATION,
            ease: "expo.inOut",
          },
          "<"
        )
        .add(function () {
          if (loaderRef.current) loaderRef.current.style.display = "none";
        })
        .from(
          ".hero-container .title span",
          {
            y: 60,
            opacity: 0,
            duration: CONTENT_IN,
            stagger: 0.04,
            ease: "expo.out",
          },
          "<0.1"
        )
        .from(
          "#delayedText",
          {
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: "power3.out",
            onComplete: function () {
              const el = document.getElementById("delayedText");
              if (el) el.style.visibility = "visible";
            },
          },
          "-=0.3"
        );
    };

    runLoader();
  }, []);

  return (
    <div className="loader" ref={loaderRef}>
      <div className="loader__panel loader__panel--left" ref={panelLeftRef}></div>
      <div className="loader__panel loader__panel--right" ref={panelRightRef}></div>
      <div className="loader__content">
        <div className="loader__number">
          <span className="counter" ref={counterRef}>0</span>
          <span className="loader__pct">%</span>
        </div>
        <div className="loader__label" ref={labelRef}>Loading</div>
        <div className="loader__progress">
          <div className="loader__progress-fill" ref={fillRef}></div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useRef } from "react";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import NoiseBackground from "@/components/NoiseBackground";
import CircleElements from "@/components/CircleElements";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TraitsSection from "@/components/TraitsSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let locoScroll: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ScrollTrigger: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let gsap: any;

    const initScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const gsapModule = await import("gsap");
      const scrollTriggerModule = await import("gsap/ScrollTrigger");

      gsap = gsapModule.default;
      ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      if (!scrollContainerRef.current) return;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      locoScroll = new (LocomotiveScroll as any)({
        el: scrollContainerRef.current,
        smooth: true,
        lerp: 0.05,
        multiplier: 1,
        reloadOnContextChange: true,
        touchMultiplier: 3,
        smoothMobile: 0,
        smartphone: { smooth: true, breakpoint: 767 },
        tablet: { smooth: true, breakpoint: 1024 },
      });

      locoScroll.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy(scrollContainerRef.current, {
        scrollTop(value: number) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: scrollContainerRef.current?.style.transform
          ? "transform"
          : "fixed",
      });

      // Horizontal scrolling for skills section
      const sections = gsap.utils.toArray("section");
      sections.forEach(function (section: HTMLElement) {
        const inner = section.classList.contains("sectionLeftAndRight")
          ? section.querySelector(".leftText")
          : section.querySelector(".section-inner");

        if (!section.classList.contains("horizontalScrolling")) {
          ScrollTrigger.create({
            scroller: scrollContainerRef.current,
            trigger: section,
            start:
              section.scrollHeight <= window.innerHeight
                ? "top top"
                : "bottom bottom",
            end: "+=100%",
            pin: inner,
            pinSpacing: false,
            pinType: "transform",
          });
        } else {
          const scroll = section.querySelector("[data-scroll-in-section]");
          ScrollTrigger.create({
            scroller: scrollContainerRef.current,
            trigger: section,
            start: "center center",
            end: () => `+=${section.scrollWidth + window.innerHeight}`,
            pin: inner,
            pinSpacing: true,
            pinType: "transform",
            anticipatePin: 1,
          });
          gsap.to(scroll, {
            x: () =>
              `${-(section.scrollWidth - document.documentElement.clientWidth)}px`,
            ease: "none",
            scrollTrigger: {
              trigger: scroll,
              scroller: scrollContainerRef.current,
              start: "top center",
              end: () => `+=${section.scrollWidth}`,
              scrub: true,
            },
          });
        }
      });

      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      ScrollTrigger.refresh();
    };

    // Initialize splitting
    const initSplitting = async () => {
      const Splitting = (await import("splitting")).default;
      Splitting();
    };

    initScroll();
    initSplitting();

    return () => {
      if (locoScroll) locoScroll.destroy();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if (ScrollTrigger) ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, []);

  return (
    <>
      <Loader />
      <CustomCursor />
      <NoiseBackground />
      <CircleElements />

      <div ref={scrollContainerRef} className="smooth-scroll" data-scroll-container>
        <HeroSection />
        <AboutSection />
        <TraitsSection />
        <ExperienceSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

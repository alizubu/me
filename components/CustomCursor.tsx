"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (isTouchDevice) {
      if (cursorRef.current) cursorRef.current.style.display = "none";
      if (cursorInnerRef.current) cursorInnerRef.current.style.display = "none";
      return;
    }

    const cursor = cursorRef.current;
    const cursorInner = cursorInnerRef.current;
    if (!cursor || !cursorInner) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      cursorInner.style.left = e.clientX + "px";
      cursorInner.style.top = e.clientY + "px";
    };

    const handleMouseDown = () => {
      cursor.classList.add("click");
      cursorInner.classList.add("cursorinnerhover");
    };

    const handleMouseUp = () => {
      cursor.classList.remove("click");
      cursorInner.classList.remove("cursorinnerhover");
    };

    const handleLinkHover = () => cursor.classList.add("hover");
    const handleLinkLeave = () => cursor.classList.remove("hover");

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("mouseover", handleLinkHover);
      link.addEventListener("mouseleave", handleLinkLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      links.forEach((link) => {
        link.removeEventListener("mouseover", handleLinkHover);
        link.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor2" ref={cursorInnerRef}></div>
    </>
  );
}

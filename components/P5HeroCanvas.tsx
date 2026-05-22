"use client";

import { useEffect, useRef } from "react";

export default function P5HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let p5Instance: any;

    const initP5 = async () => {
      const p5 = (await import("p5")).default;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const sketch = (p: any) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const particles: any[] = [];
        const PARTICLE_COUNT = 80;
        const mouse = { x: -9999, y: -9999 };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let C1: any, C2: any, C3: any;

        p.setup = function () {
          const heroEl = document.querySelector(".section.hero") as HTMLElement;
          const w = heroEl ? heroEl.offsetWidth : window.innerWidth;
          const h = heroEl ? heroEl.offsetHeight : window.innerHeight;
          const canvas = p.createCanvas(w, h);
          canvas.style("position", "absolute");
          canvas.style("top", "0");
          canvas.style("left", "0");
          canvas.style("pointer-events", "none");
          canvas.style("z-index", "0");

          C1 = p.color(188, 58, 63, 180);
          C2 = p.color(229, 121, 125, 140);
          C3 = p.color(247, 209, 210, 100);

          for (let i = 0; i < PARTICLE_COUNT; i++) {
            particles.push(createParticle(p));
          }
        };

        p.draw = function () {
          p.clear();
          for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            for (let j = i + 1; j < particles.length; j++) {
              const d = p.dist(
                particles[i].x, particles[i].y,
                particles[j].x, particles[j].y
              );
              if (d < 100) {
                p.stroke(188, 58, 63, p.map(d, 0, 100, 60, 0));
                p.strokeWeight(0.5);
                p.line(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
              }
            }
          }
        };

        p.mouseMoved = function () {
          mouse.x = p.mouseX;
          mouse.y = p.mouseY;
        };

        p.windowResized = function () {
          const heroEl = document.querySelector(".section.hero") as HTMLElement;
          if (heroEl) p.resizeCanvas(heroEl.offsetWidth, heroEl.offsetHeight);
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function createParticle(p: any) {
          const particle = {
            x: p.random(p.width),
            y: p.random(p.height),
            vx: p.random(-0.6, 0.6),
            vy: p.random(-0.6, 0.6),
            size: p.random(2, 5),
            col: (() => {
              const r = p.random(1);
              return r < 0.4 ? C1 : r < 0.75 ? C2 : C3;
            })(),
            update: function () {
              const dx = this.x - mouse.x;
              const dy = this.y - mouse.y;
              const dist = Math.sqrt(dx * dx + dy * dy);
              if (dist < 100 && dist > 0) {
                const force = (100 - dist) / 100;
                this.vx += (dx / dist) * force * 1.5;
                this.vy += (dy / dist) * force * 1.5;
              }
              this.vx *= 0.97;
              this.vy *= 0.97;
              const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
              if (speed > 2.5) {
                this.vx = (this.vx / speed) * 2.5;
                this.vy = (this.vy / speed) * 2.5;
              }
              this.x += this.vx;
              this.y += this.vy;
              if (this.x < 0) this.x = p.width;
              if (this.x > p.width) this.x = 0;
              if (this.y < 0) this.y = p.height;
              if (this.y > p.height) this.y = 0;
            },
            draw: function () {
              p.noStroke();
              p.fill(this.col);
              p.ellipse(this.x, this.y, this.size);
            },
          };
          return particle;
        }
      };

      const heroEl = containerRef.current;
      if (heroEl) {
        p5Instance = new p5(sketch, heroEl);
      }
    };

    initP5();

    return () => {
      if (p5Instance) p5Instance.remove();
    };
  }, []);

  return <div ref={containerRef} id="p5-hero-canvas-container" style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }} />;
}

"use client";

import { useMemo } from "react";
import Image from "next/image";

function calculateAge(birthday: string): number {
  const parts = birthday.split("/");
  const birthDay = Number(parts[0]);
  const birthMonth = Number(parts[1]);
  const birthYear = Number(parts[2]);

  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const todayDay = today.getDate();

  let age = todayYear - birthYear;

  if (todayMonth < birthMonth) {
    age--;
  } else if (todayMonth === birthMonth && todayDay < birthDay) {
    age--;
  }

  return age;
}

export default function AboutSection() {
  const age = useMemo(() => calculateAge("18/10/1999"), []);

  return (
    <section className="section me" data-scroll-section>
      <div className="row d-flex fluid-container">
        <div className="col-12">
          <div className="hi">
            <h1 className="serif" data-scroll="" data-scroll-speed="-3" data-scroll-direction="horizontal">
              Hi! <span className="ec ec-wave emoji">👋</span>
            </h1>
            <h3 className="serif primary-color" data-scroll="" data-scroll-speed="1" data-scroll-direction="horizontal">
              How you doin?
            </h3>
          </div>
        </div>
        <div className="col-12 col-lg-8">
          <p>
            My name is <strong>Ali Zubu</strong> 👨‍💻, I&apos;m{" "}
            {age} and I live in Chattogram, a location
            that&apos;s famous for green areas of natural beauty due to mountains,
            sea, and valleys, a district located in the south-eastern region of
            Bangladesh.
          </p>
        </div>
        <div className="img-container mt-5 mt-lg-0">
          <Image
            className="portrait img-fluid lazyloaded"
            src="/img/Ali Zubu 1200x1200.png"
            alt="alizubu"
            width={600}
            height={600}
            data-scroll=""
            data-scroll-speed="-30"
            data-scroll-direction="horizontal"
            priority
          />
        </div>
      </div>
    </section>
  );
}

"use client";
import { useRef } from "react";
import Abouts from "./_components/Abouts/pages";
import AboutsText from "./_components/AboutsText/pages";
import Portfolio from "./_components/Portfolio/pages";

export default function HomePage() {
  const aboutTextRef = useRef(null);

  const scrollToAboutText = () => {
    aboutTextRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Abouts scrolling={scrollToAboutText} />
      <div ref={aboutTextRef}>
        <AboutsText />
      </div>
      <Portfolio />
    </>
  );
}

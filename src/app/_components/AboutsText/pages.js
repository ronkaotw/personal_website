"use client";
import { motion } from "motion/react";

export default function AboutsText() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="lg:w-full h-screen flex flex-col md:flex-row items-center justify-center gap-10 mt-3"
    >
      <div className="col">
        <h2 className="section-title">About</h2>
        <hr className="hr-responsive" />
        <p className="section-subtitle">Aaron</p>
      </div>
      <div className="col">
        <ul>
          <li>Flight Simulator</li>
          <li>Esports Observe - LoL</li>
          <li>Technical - Software Engineer</li>
        </ul>
        <br/>
        <p className="relative mt-5 w-full max-w-md sm:max-w-sm whitespace-normal">
          What's My Servise Contact to my Email!
        </p>
      </div>
    </motion.section>
  );
}

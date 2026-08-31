"use client";
import { motion } from "motion/react";

export default function Portfolio() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="lg:w-full h-screen relative flex flex-col justify-start items-center gap-10 p-10"
    >
      <div className="flex-col-center text-center">
        <h2 className="section-title">Portfolio</h2>
        <hr className="section-divider" />
        <p className="section-subtitle">作品集</p>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-8">
          <a
            target="_blank"
            rel="GitHub"
            href="https://github.com/ronkaotw"
            className="group w-full sm:w-[280px] md:w-[300px] lg:w-[320px] 
                 transition-transform duration-300 ease-in-out 
                 hover:scale-105 flex justify-center"
          >
            <div
              className="w-full max-w-[320px] h-[220px] bg-gradient-to-br from-blue-200 to-blue-300 card-base card-hover flex-col-center text-center"
            >
              <div>
                <h2 className="text-lg font-bold text-gray-900 truncate">
                  Backend Portfolio
                </h2>
                <p className="text-sm text-gray-700">2019-2025</p>
                <p className="text-sm text-gray-700">Backend</p>
                <p className="text-sm text-gray-700">Node.js, Express, PostgreSQL, MongoDB</p>
              </div>
            </div>
            </a>
        </div>
    </motion.section>
  );
}

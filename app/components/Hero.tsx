"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDownCircle, Briefcase } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center bg-amber-50 dark:bg-gray-900 items-center text-center px-6 md:px-0 ">
      {/* Profile Image */}
      <motion.div
        className="w-60 h-60 rounded-full overflow-hidden mb-8 border-4 border-blue-600 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}>
        <Image
          src="/kehinde try.png"
          alt="Kehinde"
          width={160}
          height={160}
          loading="eager"
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Animated Intro Text */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        Hi, I’m <span className="text-blue-600">Kehinde</span>
      </motion.h1>

      <motion.h2
        className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}>
        A software developer with a background in Civil Engineering. I’m
        passionate about turning ideas into functional, user friendly digital
        experiences. I transitioned into tech out of a strong desire to build
        beautiful, responsive, and scalable solutions that make a real world
        impact.
      </motion.h2>

      {/* Buttons */}
      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}>
        <a
          href="/OLUYOLE KEHINDE.pdf"
          download
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition">
          <ArrowDownCircle size={28} />
          Download Resume
        </a>

        <a
          href="#projects"
          className="flex items-center gap-2 border border-blue-600 text-blue-600 px-5 py-3 rounded-full hover:bg-blue-600 hover:text-white transition">
          <Briefcase size={28} />
          View Projects
        </a>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="mt-16 flex flex-col items-center text-gray-500 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}>
        <p className="mb-2 text-sm">Scroll Down</p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-4 h-4 border-b-2 border-r-2 border-gray-500 rotate-45"
        />
      </motion.div>
    </section>
  );
}

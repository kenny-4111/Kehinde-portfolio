"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-20  bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6">
          About <span className="text-blue-600">Me</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
          I&apos;m <span className="font-semibold">Kenny</span>, a passionate{" "}
          <span className="text-blue-600">Frontend Developer</span> dedicated to
          crafting user focused, high performing web experiences. With a keen
          eye for design and attention to detail, I love building modern UIs
          that blend aesthetics and performance seamlessly.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 text-gray-400 dark:text-gray-300 max-w-2xl mx-auto">
          I specialize in JavaScript frameworks like{" "}
          <span className="font-semibold text-blue-500">React</span> and{" "}
          <span className="font-semibold text-blue-500">Next.js</span>. I enjoy
          solving complex frontend problems and learning new tools that improve
          user experience and developer workflow.
        </motion.p>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Kendall Manager pro ",
    category: "React",
    description: "A ticket management app with local storage and filtering.",
    image: "/manager.png",
    link: "https://kendall-react.vercel.app/",
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Next.js",
    description: "My personal portfolio built with Next.js and Tailwind.",
    image: "/portfolio.png",
    link: "https://example.com",
  },
  {
    id: 3,
    title: "Landing page",
    category: "Next.js",
    description: "A sleek landing page design focused on conversions.",
    image: "/cartolinks.png",
    link: "https://cartolinks-test-seven.vercel.app/",
  },
  {
    id: 4,
    title: "E-commerce Store",
    category: "Next.js",
    description: "A modern e-commerce frontend using React and Context API.",
    image: "/ednut.png",
    link: "https://ednut-qxmb.vercel.app/",
  },
  {
    id: 5,
    title: "Profile card UI",
    category: "HTML",
    description: "A responsive profile card component built with HTML and CSS.",
    image: "/profile.png",
    link: "https://kenny-4111.github.io/Profile-card-Kehinde/index.html",
  },
];

const categories = ["All", "HTML", "React", "Next.js"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-20  bg-gray-50 dark:bg-gray-900 px-6 md:px-16">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Projects
      </motion.h2>

      {/* Filter buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="flex justify-center gap-4 mb-10 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-200 dark:bg-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white"
            }`}>
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Project cards */}
      <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-block text-blue-600 dark:text-blue-400 hover:underline font-medium">
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

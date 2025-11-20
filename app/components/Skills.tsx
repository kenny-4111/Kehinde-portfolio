"use client";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <SiReact className="text-sky-500" /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Vue.js", icon: <SiReact className="text-green-500" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  { name: "Git", icon: <SiGit className="text-red-500" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-10">
          My <span className="text-blue-600">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex flex-col items-center justify-center p-6 bg-gray-100 dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-gray-800 dark:text-gray-200 font-medium">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

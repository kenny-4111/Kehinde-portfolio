"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const socials = [
    {
      name: "GitHub",
      icon: <Github size={20} />,
      href: "https://github.com/kenny-4111",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      href: "https://linkedin.com/in/oluyole-providence-3913a9355/",
    },
    {
      name: "Twitter",
      icon: <Twitter size={20} />,
      href: "https://x.com/Drkendall1",
    },
  ];

  return (
    <footer className="dark:bg-gray-950 py-10 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center">
        {/* Social Links */}
        <div className="flex justify-center gap-5 mb-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-colors duration-300">
              {social.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Kehinde</span>. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
}

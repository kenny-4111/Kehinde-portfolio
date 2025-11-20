"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaBars, FaSun, FaMoon, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const { setTheme, resolvedTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/#home" className="text-xl font-semibold">
          <span className="text-blue-600 font-bold">Kehinde</span>
        </Link>

        <ul className="hidden md:flex gap-8">
          {["Home", "About", "Skills", "Projects", "Contact"].map((label) => (
            <li key={label}>
              <Link
                href={`/#${label.toLowerCase()}`}
                className="hover:text-blue-600 transition-colors duration-200">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            aria-label="Toggle Theme">
            <span suppressHydrationWarning>
              {mounted && resolvedTheme === "dark" ? <FaSun /> : <FaMoon />}
            </span>
          </button>

          {/* Mobile Menu */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle Menu">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex flex-col items-center gap-4 py-4">
          {["Home", "About", "Projects", "Skills", "Contact"].map((label) => (
            <li key={label}>
              <Link
                href={`/#${label.toLowerCase()}`}
                className="block text-lg hover:text-blue-600"
                onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

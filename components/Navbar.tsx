"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Education", path: "/education" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="w-full bg-gradient-to-r from-purple-700 via-pink-600 to-blue-600 shadow-xl sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-5 flex flex-col md:flex-row justify-between items-center gap-4">

        <h1 className="text-white text-3xl font-bold tracking-wide">
          Portfolio
        </h1>

        <div className="flex flex-wrap justify-center gap-4 md:gap-10 text-white font-semibold text-sm md:text-lg">

          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="relative group"
            >
              {link.name}

              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}

        </div>
      </div>
    </motion.nav>
  );
}
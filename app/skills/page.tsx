"use client";

import { motion } from "framer-motion";
import PageWrapper from "@/components/PageWrapper";
import {
  FaJava,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import {
  SiFlutter,
  SiNextdotjs,
  SiJavascript,
} from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava size={45} /> },
  { name: "React", icon: <FaReact size={45} /> },
  { name: "Next.js", icon: <SiNextdotjs size={45} /> },
  { name: "Flutter", icon: <SiFlutter size={45} /> },
  { name: "HTML", icon: <FaHtml5 size={45} /> },
  { name: "CSS", icon: <FaCss3Alt size={45} /> },
  { name: "JavaScript", icon: <SiJavascript size={45} /> },
  { name: "GitHub", icon: <FaGithub size={45} /> },
  { name: "Database", icon: <FaDatabase size={45} /> },
];

export default function SkillsPage() {
  return (
    <PageWrapper>
<section
      className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-pink-100 px-6 py-16"
    >
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-gray-800 mb-12">
          My Skills
        </h1>

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 w-max"
        >
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="min-w-[240px] bg-white/80 backdrop-blur-md rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 flex flex-col items-center justify-center hover:scale-105 transition duration-300"
            >
              <div className="text-purple-600 mb-4">
                {skill.icon}
              </div>

              <p className="text-lg font-semibold text-gray-700">
                {skill.name}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
</PageWrapper>
  );
}
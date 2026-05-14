"use client";

import PageWrapper from "@/components/PageWrapper";
import {
  FaJava,
  FaReact,
  FaGithub,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { SiFlutter, SiFirebase, SiNextdotjs } from "react-icons/si";

export default function EducationPage() {
  return (
    <PageWrapper>
<section
      className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-pink-100 px-6 py-16"
    >
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Education Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Education
          </h1>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:scale-[1.02] transition duration-300">
              <h2 className="text-2xl font-bold text-purple-700">
                BS Software Engineering
              </h2>
              <p className="text-gray-700 mt-2">
                University of Central Punjab
              </p>
              <p className="text-gray-500">
                2020 - 2024
              </p>
              <p className="mt-4 text-gray-600">
                Focused on Software engineering, Web development,
                Databases, Mobile applications, Object Oriendted 
                Software Quality Engineering ,  Data structures and algorithms ,
                Software Designs and Architecture ,Introduction to Natural 
                Language processing, Software Testing and system design.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:scale-[1.02] transition duration-300">
              <h2 className="text-2xl font-bold text-purple-700">
                Intermediate (FSc)
              </h2>
              <p className="text-gray-700 mt-2">
                Daanish school and college , Chishtian
              </p>
              <p className="text-gray-500">
                2018 - 2020
              </p>
              <p className="mt-4 text-gray-600">
                Completed ICS studies with strong focus
                on mathematics, physics and computer fundamentals.
                I had also participated in various competetions and events
                related to computer science and programming.

              </p>
            </div>

          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-8">
            Skills
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {[
              { name: "Java", icon: <FaJava size={40} /> },
              { name: "React", icon: <FaReact size={40} /> },
              { name: "Next.js", icon: <SiNextdotjs size={40} /> },
              { name: "Flutter", icon: <SiFlutter size={40} /> },
              { name: "Firebase", icon: <SiFirebase size={40} /> },
              { name: "HTML", icon: <FaHtml5 size={40} /> },
              { name: "CSS", icon: <FaCss3Alt size={40} /> },
              { name: "Database", icon: <FaDatabase size={40} /> },
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center hover:scale-105 transition"
              >
                <div className="text-purple-600 mb-4">
                  {skill.icon}
                </div>
                <p className="font-semibold text-gray-700">
                  {skill.name}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
</PageWrapper>
  );
}
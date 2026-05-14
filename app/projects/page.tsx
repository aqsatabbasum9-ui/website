"use client";

import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";

const projects = [
  {
    title: "Portfolio Website",
    image: "/project1.jpeg",
    description:
      "A professional personal portfolio website built using Next.js with smooth animations, responsive design, and modern UI/UX.",
    tech: "Next.js, Tailwind CSS, Framer Motion",
  },
  {
    title: "Biuld Smart Choice",
    image: "/project2.jpeg",
    description:
      "A full-featured mobile application developed using Flutter with Firebase backend integration and beautiful user interface. It is a construction app that provides users construction material with rates , blue prints and packages recommended by AI. ",
    tech: "Flutter, Firebase, Dart , MySql",
  },
  {
    title: "Management System",
    image: "/project3.jpeg",
    description:
      "Developed a Notes Mobile App using Java Organized notes by categories for easy access Implemented add, update, and delete functionality Designed a simple and user-friendly interface",
    tech: "Java, MySQL, JDBC",
  },
];

export default function ProjectsPage() {
  return (
    <PageWrapper>
<section
      className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-pink-100 px-6 py-16"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-12">
          Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-md rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] overflow-hidden hover:scale-[1.03] transition duration-300"
            >
              <div className="h-56 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 space-y-4">
                <h2 className="text-2xl font-bold text-purple-700">
                  {project.title}
                </h2>

                <p className="text-gray-600">
                  {project.description}
                </p>

                <p className="font-semibold text-gray-700">
                  Tech Stack:
                </p>

                <p className="text-sm text-gray-500">
                  {project.tech}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
</PageWrapper>
  );
}
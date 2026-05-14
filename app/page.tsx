"use client";

import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";

export default function HomePage() {
  return (
    <PageWrapper>
<section
      className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-pink-100 px-6 py-16"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-gray-800">
            Hi, I’m Aqsa Tabbasum
          </h1>

          <h2 className="text-2xl font-semibold text-purple-700">
            Software Engineer | Mobile App Developer | Web Developer
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Software Engineer with strong problem-solving abilities and a solid foundation in multiple programming languages. Experienced in developing diverse academic projects, demonstrating practical skills in coding, debugging, and software design. Passionate about building efficient, scalable solutions and continuously learning new technologies.

          </p>

          <p className="text-gray-600 leading-relaxed">
            I am a Software Engineer with experience in Java, database management, and mobile app development. I have built projects including a machine learning-based construction planning app and a notes management system, which strengthened my problem-solving skills.
            I am seeking a software engineering internship/job to gain real-world industry experience and further develop my technical abilities. I also bring creativity through content creation and YouTube video editing.
            I would appreciate the opportunity to contribute to your team and grow as a developer.

          </p>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <div className="w-[380px] h-[380px] rounded-full overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.15)] border-8 border-white backdrop-blur-lg">
            <Image
              src="/profile.jpg"
              alt="Profile"
              width={350}
              height={350}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
</PageWrapper>
  );
}
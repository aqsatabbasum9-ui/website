import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-slate-900 via-gray-800 to-slate-700">
      <div className="max-w-7xl mx-auto px-6 py-8 space-y-4">

        <div className="flex flex-wrap items-center gap-3 text-sm md:text-base">
          <FaPhone />
          <span>:</span>
          <p>+92-320 1744664</p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm md:text-base">
          <FaEnvelope />
          <span>:</span>
          <p>aqsatabbasum9@gmail.com</p>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm md:text-base">
          <FaLinkedin />
          <span>:</span>
          <a
            href="https://www.linkedin.com/in/aqsatabbasum/"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            LinkedIn Profile
          </a>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-sm md:text-base">
          <FaGithub />
          <span>:</span>
          <a
            href="https://github.com/aqsatabbasum9-ui/"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            GitHub Profile
          </a>
        </div>

      </div>

      <div className="border-t border-white/20 mt-8 pt-6 text-center">
       <p className="text-sm md:text-base text-white/90">
        © 2026 Aqsa Tabbasum | Designed & Developed by Aqsa Tabbasum
        </p>
        </div>

         <div className="mt-8 pt-2 text-center">
       <p className="text-sm md:text-base text-white/90"></p>
        </div>
    </footer>
  );
}
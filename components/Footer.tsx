import {
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 shadow-lg sticky top-0 z-50">
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
    </footer>
  );
}
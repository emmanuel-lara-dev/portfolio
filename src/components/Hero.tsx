import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="text-gradient">Emmanuel Lara</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 font-medium">
          Full Stack Web Developer
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-500 mb-12 max-w-2xl mx-auto">
          I build exceptional digital experiences with modern web technologies.
          Specializing in React, Node.js, and cloud solutions.
        </p>

        <div className="flex gap-6 justify-center mb-12">
          <a
            href="#contact"
            className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all shadow-lg hover:shadow-xl"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 hover:border-primary-600 rounded-lg font-medium transition-all bg-white dark:bg-transparent text-gray-900 dark:text-white shadow-md hover:shadow-lg"
          >
            View Work
          </a>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/emmanuel-lara-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:twilightlara2005@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
}

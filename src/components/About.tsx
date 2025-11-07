import { Code2, Database, Globe, Server } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive UIs with React, TypeScript, and modern CSS frameworks",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Backend Development",
      description:
        "Creating robust APIs and server-side applications with Node.js, Express, and Python",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Design",
      description:
        "Designing and optimizing databases with SQL and NoSQL solutions",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Full Stack Solutions",
      description: "End-to-end development from concept to deployment",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gray-100 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          About <span className="text-gradient">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate full stack developer with expertise in building
              modern web applications. With a strong foundation in both frontend
              and backend technologies, I create seamless digital experiences
              that solve real-world problems.
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              I'm constantly learning and adapting to new technologies, always
              striving to write clean, maintainable code and deliver exceptional
              user experiences.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-800/50 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-primary-600 transition-all shadow-lg hover:shadow-xl hover:scale-105"
              >
                <div className="text-primary-400 mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

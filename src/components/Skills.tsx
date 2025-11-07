import { Code2, Server, Database, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: [
        "React",
        "TypeScript",
        "Next.js",
        "TailwindCSS",
        "HTML/CSS",
        "JavaScript",
        "Redux",
        "Vue.js",
      ],
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        "Node.js",
        "Express",
        "Python",
        "Django",
        "Flask",
        "REST APIs",
        "GraphQL",
        "Microservices",
      ],
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        "PostgreSQL",
        "MongoDB",
        "MySQL",
        "Redis",
        "Firebase",
        "Prisma",
        "Mongoose",
      ],
    },
    {
      title: "DevOps & Tools",
      icon: Wrench,
      skills: [
        "Git",
        "Docker",
        "AWS",
        "CI/CD",
        "Linux",
        "Nginx",
        "Jest",
        "Webpack",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Technical <span className="text-gradient">Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800/30 p-6 rounded-lg border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Icon className="w-6 h-6 text-primary-400" />
                  <h3 className="text-xl font-semibold text-primary-400">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 rounded-full text-sm text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-600/20 hover:text-primary-600 dark:hover:text-primary-400 transition-colors border border-gray-200 dark:border-transparent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

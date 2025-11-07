import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "AI Financial Fraud Detection System",
      description:
        "Advanced machine learning system for detecting fraudulent transactions in real-time. Features include anomaly detection, predictive analytics, risk scoring, and comprehensive visualization dashboard with SHAP explainability.",
      tech: [
        "Python",
        "Scikit-learn",
        "XGBoost",
        "Streamlit",
        "Pandas",
        "SHAP",
        "Machine Learning",
      ],
      github: "https://github.com/emmanuel-lara-dev/portfolio",
      live: "https://portfolio-beige-nine-ceavcrwpbb.vercel.app",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gray-100 dark:bg-gray-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured <span className="text-gradient">Projects</span>
        </h2>

        <div className="flex justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800/30 rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-primary-600 transition-all hover:transform hover:scale-105 max-w-2xl w-full shadow-xl"
            >
              <div className="h-48 bg-gray-700 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-600/20 text-primary-700 dark:text-primary-400 rounded text-xs border border-primary-200 dark:border-transparent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

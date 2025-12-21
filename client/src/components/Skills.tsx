import { motion } from "framer-motion";
import { Code2, Database, Layout, Terminal, PenTool, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Logic",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    skills: ["Python", "Java", "JavaScript"],
    color: "from-blue-500/20 to-blue-600/5"
  },
  {
    title: "Data & AI",
    icon: <Brain className="w-6 h-6 text-purple-400" />,
    skills: ["Machine Learning", "Data Analysis", "Statistical Analysis", "Feature Engineering", "Data Cleaning", "Model Evaluation", "Scikit-learn", "Pandas", "NumPy", "Jupyter Notebook", "SQL", "Data Visualization"],
    color: "from-purple-500/20 to-purple-600/5"
  },
  {
    title: "Web Technologies",
    icon: <Layout className="w-6 h-6 text-cyan-400" />,
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "REST APIs"],
    color: "from-cyan-500/20 to-cyan-600/5"
  },
  {
    title: "Tools & Platforms",
    icon: <Terminal className="w-6 h-6 text-orange-400" />,
    skills: ["Git", "GitHub", "VS Code", "SAP", "Cloud Basics (Azure / AWS)"],
    color: "from-orange-500/20 to-orange-600/5"
  },
  {
    title: "Engineering & Operations",
    icon: <PenTool className="w-6 h-6 text-emerald-400" />,
    skills: ["Process Optimization", "Quality Control", "Maintenance Planning", "Technical Documentation"],
    color: "from-emerald-500/20 to-emerald-600/5"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-secondary/10 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <div className="h-1 w-20 bg-primary rounded-full mx-auto md:mx-0"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            A diverse set of tools connecting precision with modern software solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl border border-white/10 bg-card/30 backdrop-blur-sm p-6 hover:border-primary/30 transition-all duration-300 group`}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-background/50 border border-white/5 shadow-sm">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm rounded-md bg-background/40 border border-white/5 text-muted-foreground hover:text-foreground hover:bg-background/60 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

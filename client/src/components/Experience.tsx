import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Manufacturing Operator",
    company: "Siemens Healthineers",
    period: "03/2025 – Present",
    location: "Dublin, Ireland",
    description: "Production of advanced diagnostic equipment, focusing on assembly, testing, and SAP-based data and inventory management. Ensuring compliance with strict quality standards and supporting process improvements.",
    skills: ["SAP", "Data Management", "Quality Control", "Process Optimization"]
  },
  {
    id: 2,
    role: "General Operative",
    company: "Kellogg's",
    period: "08/2023 – 02/2025",
    location: "Dublin, Ireland",
    description: "Engaged in various operational tasks, applying problem-solving skills and adaptability in a fast-paced environment.",
    skills: ["Operations", "Problem Solving", "Teamwork"]
  },
  {
    id: 3,
    role: "Technical & Operations Roles",
    company: "Various Employers",
    period: "03/2018 – 07/2023",
    location: "Ireland",
    description: "Worked in facilities, warehouse, events, and hospitality. Gained solid hands-on, safety, and teamwork experience supporting maintenance and logistics tasks.",
    skills: ["Logistics", "Maintenance", "Safety Compliance"]
  },
  {
    id: 4,
    role: "Manufacturing Operator",
    company: "Aperam South America",
    period: "08/2015 – 02/2018",
    location: "Brazil",
    description: "Managed production documentation and performance metrics. Supported process monitoring and data reporting to improve efficiency and minimize downtime.",
    skills: ["Data Reporting", "Process Monitoring", "Documentation"]
  },
  {
    id: 5,
    role: "Maintenance Technician",
    company: "USIMINAS",
    period: "09/2011 – 08/2014",
    location: "Brazil",
    description: "Provided technical and administrative support for maintenance operations, focusing on data tracking, preventive scheduling, and process optimization.",
    skills: ["Maintenance Planning", "Data Tracking", "Technical Support"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Journey</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Card */}
                <div className="flex-1">
                  <div className="bg-card/50 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-primary/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--primary),0.15)] group">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-muted-foreground font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        <Briefcase size={20} />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/50 border border-white/5 text-secondary-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Dot (Desktop) */}
                <div className="hidden md:flex items-center justify-center w-12 relative">
                  <div className="w-4 h-4 rounded-full bg-background border-2 border-primary z-10 shadow-[0_0_10px_rgba(var(--primary),0.5)]"></div>
                </div>

                {/* Empty Space for layout balance */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

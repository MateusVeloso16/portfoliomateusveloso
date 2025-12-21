import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education: Array<{
  degree: string;
  school: string;
  period: string;
  level: string;
  icon: React.ReactNode;
  status?: string;
}> = [
  {
    degree: "Postgraduate Diploma in Computer Science: AI & ML",
    school: "University of Galway",
    period: "2025 - 2026",
    level: "Level 9",
    icon: <BrainIcon className="w-6 h-6" />,
    status: "Currently Enrolled"
  },
  {
    degree: "Certificate in Science in Computing",
    school: "National College of Ireland",
    period: "2024 - 2025",
    level: "Level 8",
    icon: <GraduationCap className="w-6 h-6" />
  },
  {
    degree: "Software Development",
    school: "CCT College Dublin",
    period: "2023 - 2024",
    level: "Level 7",
    icon: <CodeIcon className="w-6 h-6" />
  },
  {
    degree: "Honors Bachelor's Degree in Mechanical Engineering",
    school: "Centro Universitário Do Leste De Minas Gerais",
    period: "2014 - 2017",
    level: "Level 8",
    icon: <WrenchIcon className="w-6 h-6" />
  },
  {
    degree: "Technical Drawing and Manufacturing Processes",
    school: "CEFET-MG",
    period: "2011 - 2012",
    level: "Level 6",
    icon: <DraftingCompassIcon className="w-6 h-6" />
  }
];

// Custom Icons
function BrainIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  );
}

function WrenchIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
  );
}

function DraftingCompassIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="5" r="2"/><path d="m3.05 11 9-6 9 6"/><path d="m12 19 7 3"/><path d="m12 19-7 3"/><path d="M12 5v14"/></svg>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Background</h2>
          <div className="h-1 w-20 bg-primary rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card/40 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:bg-card/60 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  {edu.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold leading-tight mb-2 group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground font-medium mb-1">{edu.school}</p>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground/80 flex-wrap">
                    <span className="bg-secondary/50 px-2 py-0.5 rounded text-xs border border-white/5">
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award size={12} />
                      {edu.level}
                    </span>
                    {edu.status && (
                      <span className="bg-primary/20 px-2 py-0.5 rounded text-xs border border-primary/30 text-primary font-medium">
                        {edu.status}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

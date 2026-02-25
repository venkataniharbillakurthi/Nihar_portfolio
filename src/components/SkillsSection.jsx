import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React.js", "HTML5", "CSS3", "JavaScript", "Styled Components", "Responsive Design"],
  },
  {
    category: "Backend",
    skills: ["Java", "Spring Boot", "MySQL", "REST APIs", "JWT Authentication", "Hibernate"],
  },
  {
    category: "DevOps & Tools",
    skills: ["Git", "VPS Deployment", "Nginx", "SSL Configuration"],
  },
  {
    category: "Other",
    skills: ["SEO Optimization", "UI/UX Enhancement", "AWS Cloud Foundations"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Technical <span className="text-gradient">Skills</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">
                {g.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span
                    key={s}
                    className="text-xs px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

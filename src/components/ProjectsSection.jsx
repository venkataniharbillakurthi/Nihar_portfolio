import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Yalla Dora Babu",
    url: "https://yalladorababu.in",
    desc: "Political portfolio with SEO optimization and admin panel.",
    tech: ["React.js", "Spring Boot", "SEO"],
  },
  {
    title: "TPMX",
    url: "https://tpmx.in",
    desc: "Corporate website with dynamic media sections and service pages.",
    tech: ["React.js", "Bootstrap"],
  },
  {
    title: "Lumiere Luxe",
    url: "https://lumiereluxe.in",
    desc: "Full-stack salon booking with EmailJS, MySQL & VPS deployment.",
    tech: ["React.js", "Spring Boot", "MySQL", "Nginx"],
  },
  {
    title: "Matha Foundation",
    url: "https://mathafoundation.in",
    desc: "NGO website supporting donations and awareness initiatives.",
    tech: ["React.js", "Spring Boot"],
  },
  {
    title: "Sasha Slimming",
    url: "https://sashaslimming.com",
    desc: "Health & wellness site with lead capture and SEO optimization.",
    tech: ["React.js", "SEO", "Lead Capture"],
  },
  {
    title: "Andhra Machines Agencies",
    url: "https://andhramachinesagencies.com",
    desc: "E-commerce for industrial machinery with admin-managed inventory.",
    tech: ["React.js", "Spring Boot", "E-Commerce"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Live <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-card border border-border rounded-xl p-6 card-hover block"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-md bg-primary/10 text-primary font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

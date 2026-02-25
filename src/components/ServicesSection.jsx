import { motion } from "framer-motion";
import { Layout, Server, Globe, ShoppingCart, Settings, Monitor } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Frontend Landing Page",
    desc: "Modern responsive landing pages with React, SEO optimization, WhatsApp & email integration.",
    features: ["Mobile-Friendly", "SEO Optimized", "Contact Form", "3 Months Support"],
    delivery: "7–10 Days",
  },
  {
    icon: Server,
    title: "Landing Page + Backend",
    desc: "Custom landing page with secure admin dashboard, lead management & JWT authentication.",
    features: ["Admin Dashboard", "Lead Management", "JWT Auth", "VPS Setup"],
    delivery: "15–20 Days",
  },
  {
    icon: Globe,
    title: "Business Website (5–7 Pages)",
    desc: "Complete multi-page website with Home, About, Services, Gallery & Contact pages.",
    features: ["Fully Responsive", "WhatsApp Integration", "SEO Setup", "Deployment Support"],
    delivery: "10–15 Days",
  },
  {
    icon: Monitor,
    title: "Dynamic Website + Admin Panel",
    desc: "Full stack website with admin dashboard, blog/CMS, lead management & SSL setup.",
    features: ["Content Management", "Blog System", "Nginx + SSL", "Server Maintenance"],
    delivery: "20–30 Days",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Website",
    desc: "Complete e-commerce with product management, admin panel, payment gateway & more.",
    features: ["Product Management", "Payment Gateway", "Secure Auth", "Full Deployment"],
    delivery: "30–45 Days",
  },
  {
    icon: Settings,
    title: "Add-On Services",
    desc: "Extra pages, payment integration, speed optimization, advanced SEO & maintenance.",
    features: ["Extra Pages", "Speed Optimization", "Advanced SEO", "Monthly Maintenance"],
    delivery: "Custom",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">What I Offer</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Services & <span className="text-gradient">Solutions</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={item}
              className="bg-card border border-border rounded-xl p-6 card-hover group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <s.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>

              <ul className="space-y-2 mb-4">
                {s.features.map((f) => (
                  <li key={f} className="text-xs text-secondary-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-border flex justify-between items-center">
                <span className="text-xs text-muted-foreground">Delivery: {s.delivery}</span>
                <span className="text-xs font-mono text-primary">3 Mo. Support</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap gap-6 bg-card border border-border rounded-xl px-8 py-4">
            <span className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">40%</span> Advance
            </span>
            <span className="text-border">|</span>
            <span className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">20%</span> After Design Approval
            </span>
            <span className="text-border">|</span>
            <span className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">40%</span> Before Final Delivery
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

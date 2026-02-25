import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-mono text-sm mb-2 tracking-widest uppercase">Get In Touch</p>
          <h2 className="text-3xl sm:text-4xl font-bold">
            Let's Build <span className="text-gradient">Together</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Ready to bring your project to life? Reach out and let's discuss your requirements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {[
              {
                icon: Phone,
                label: "Phone",
                value: "+91 83286 57726",
                href: "tel:+918328657726",
              },
              {
                icon: Mail,
                label: "Email",
                value: "venkataniharbillakurthi@gmail.com",
                href: "mailto:venkataniharbillakurthi@gmail.com",
              },
              {
                icon: MessageCircle,
                label: "WhatsApp",
                value: "Chat on WhatsApp",
                href: "https://wa.me/918328657726",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Hyderabad, Telangana",
                href: undefined,
              },
            ].map((c) => {
              const Tag = c.href ? "a" : "div";
              return (
                <Tag
                  key={c.label}
                  {...(c.href ? { href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 card-hover group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <c.icon className="text-primary" size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">{c.label}</p>
                    <p className="text-sm font-medium text-foreground">{c.value}</p>
                  </div>
                </Tag>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-xl p-8 flex flex-col justify-center items-center text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <MessageCircle className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">Start a Conversation</h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Drop a message on WhatsApp or email me. I typically respond within a few hours.
            </p>
            <a
              href="https://wa.me/918328657726"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-border"
            >
              <MessageCircle size={18} />
              Message on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

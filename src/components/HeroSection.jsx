import { motion } from "framer-motion";
import { ArrowDown, Mail, Phone } from "lucide-react";
import { lazy, Suspense, useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

const HeroScene = lazy(() => import("./HeroScene"));

const useTypewriter = (words, typeSpeed = 100, deleteSpeed = 60, pauseTime = 2000) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.slice(0, text.length + 1));
          if (text.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pauseTime);
          }
        } else {
          setText(currentWord.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pauseTime]);

  return text;
};

const CountUp = ({ target, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const techWords = ["React.js", "Spring Boot", "MySQL", "REST APIs", "JWT Auth"];

const HeroSection = () => {
  const typedText = useTypewriter(techWords, 80, 50, 1500);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-primary font-mono text-sm mb-4 tracking-widest uppercase">
            Full Stack Web Developer
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Hi, I'm{" "}
            <span className="text-gradient glow-text">Venkata Nihar</span>
          </h1>

          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-2">
            I build <span className="text-foreground font-medium">secure, scalable & SEO-optimized</span> web
            applications that help businesses grow online.
          </p>
          <div className="h-8 flex items-center justify-center mb-4">
            <span className="font-mono text-primary text-base sm:text-lg">
              {"< "}
              <span className="text-foreground">{typedText}</span>
              <span className="animate-pulse text-primary">|</span>
              {" />"}
            </span>
          </div>

          <p className="text-muted-foreground text-sm flex items-center justify-center gap-2 mb-8">
            📍 Hyderabad, Telangana
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity glow-border"
            >
              <Mail size={18} />
              Let's Work Together
            </a>
            <a
              href="tel:+918328657726"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-border text-foreground font-semibold hover:border-primary hover:text-primary transition-colors"
            >
              <Phone size={18} />
              +91 83286 57726
            </a>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-gradient">
                <CountUp target={6} suffix="+" />
              </p>
              <p className="text-xs text-muted-foreground mt-1">Live Projects</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-gradient">
                <CountUp target={1} suffix="+" duration={1000} />
              </p>
              <p className="text-xs text-muted-foreground mt-1">Years Exp</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-gradient">
                <CountUp target={100} suffix="%" duration={2500} />
              </p>
              <p className="text-xs text-muted-foreground mt-1">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16"
        >
          <a href="#services" className="inline-flex animate-bounce text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

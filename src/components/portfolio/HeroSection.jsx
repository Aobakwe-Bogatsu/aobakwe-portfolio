import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const roles = ['Full-Stack Development', 'AI & Cloud Enthusiast', 'Tech Creative'];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length - 1)), 40);
    } else {
      timeout = setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length + 1)), 80);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          
          <p className="font-mono text-sm text-primary tracking-widest uppercase font-semibold mb-1">HEY THERE, I'M

          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-heading text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-6">
          
          <span className="gradient-text">Aobakwe Bogatsu</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-10 flex items-center justify-center mb-8">
          
          <span className="font-mono text-lg sm:text-xl text-muted-foreground">
            {displayText}
            <span className="inline-block w-0.5 h-5 bg-primary ml-1 animate-pulse" />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          
          Creating performant digital experiences with and eye
          for detail. Passionate about pushing the boundaries of what's 
          possible on the web.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex items-center justify-center gap-4">
          
          <a
            href="#projects"
            className="font-heading font-medium text-sm px-7 py-3 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 glow-purple">
            
            View My Work
          </a>
          <a
            href="#contact"
            className="font-heading font-medium text-sm px-7 py-3 rounded-full border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all duration-300">
            
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex items-center justify-center gap-5 mt-12">
          
          {[
          { icon: Github, href: 'https://github.com/Aobakwe-Bogatsu', label: 'GitHub' },
          { icon: Linkedin, href: 'https://linkedin.com/in/aobakwe-bogatsu', label: 'LinkedIn' },
          { icon: Mail, href: '#contact', label: 'Email' }].
          map(({ icon: Icon, href, label }) =>
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? "_blank" : undefined}
            rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
            className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
            aria-label={label}>
            
              <Icon size={18} />
            </a>
          )}
        </motion.div>
      </div>

    
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="group flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="p-2 rounded-full bg-background/40 backdrop-blur-md 
                       group-hover:border-primary/40 transition-all duration-300"
            >
            <ArrowDown
              size={16}
              className="text-muted-foreground group-hover:text-primary transition-colors duration-300"
            />
          </motion.div>
        </a>
      </motion.div>
    </section>);

}
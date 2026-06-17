import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}>
          
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3 font-semibold">06 — CONTACT</p>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold mb-6">
            Let's build something <span className="gradient-text">amazing</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            I'm always open to new opportunities, collaborations, or just a friendly chat
            about tech. Feel free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          
          <a
            href="mailto:aobakwe.bogatsu59@gmail.com"
            className="inline-flex items-center gap-2 font-heading font-medium text-sm px-8 py-3.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-all duration-300 glow-purple">
            
            <Mail size={16} />
            aobakwe.bogatsu59@gmail.com
          </a>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin size={14} />
            <span className="font-mono text-xs">Pretoria, South Africa</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex items-center justify-center gap-4">
          
          {[
          { icon: Github, href: 'https://github.com/Aobakwe-Bogatsu', label: 'GitHub' },
          { icon: Linkedin, href: 'https://www.linkedin.com/in/aobakwe-bogatsu/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bwr5%2B0XguTku4nrpNuAZxuQ%3D%3D', label: 'LinkedIn' },
          ].
          map(({ icon: Icon, href, label }) =>
          <a
            key={label}
            href={href}
            target={href.startsWith('http') ? "_blank" : undefined}
            rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
            className="p-3 rounded-full border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
            aria-label={label}>
            
              <Icon size={18} />
            </a>
          )}
        </motion.div>
      </div>
    </section>);

}
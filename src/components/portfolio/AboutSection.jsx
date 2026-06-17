import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, Rocket, Sparkles } from 'lucide-react';

const highlights = [
{
  icon: Code2,
  title: 'Clean Code',
  description: 'Writing maintainable code that scales.'
},
{
  icon: Palette,
  title: 'Design Eye',
  description: 'Bridging design and development.'
},
{
  icon: Rocket,
  title: 'Problem Solving',
  description: 'Turning ideas into working software solutions.'
},
{
  icon: Sparkles,
  title: 'Innovation',
  description: 'Exploring software solutions and continuous learning.'
}];


export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}>
          
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3 font-semibold">01 — ABOUT</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-6">
            A bit about <span className="gradient-text">me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-5">
            
            {/* Profile photo */}
            <div className="flex items-center gap-5 mb-5">
              <div className="relative shrink-0">
                <div className="w-40 h-50 rounded-2xl overflow-hidden border-2 border-primary/30 glow-purple">
                  <img
                    src="https://media.base44.com/images/public/6a04ecd1601a951ace1e2aa0/b279576f0_WhatsAppImage2026-06-12at013906.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover object-[center_30%] rounded-xl -mt-7" />
                  
                </div>
                
              </div>
              <div>
                <p className="font-heading font-semibold text-lg mb-20">Aobakwe Bogatsu</p>
                {/*<p className="font-mono text-xs text-muted-foreground">Available for opportunities</p>*/}
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              My passion for technology comes from the belief that if you can imagine it,
              you can build it. I'm intrested in AI, cloud computing, software development,
              and exploring other exciting paths in tech.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I bring creativity into designing experiences that are visually stunning,
              technically sound, and feel seamless to use. I'm passionate about creating
              innovative projects that have real-world impact while continuosly learning
              and contributing to collaborative teams.
            </p>
            {/*<div className="flex gap-4 pt-4">
              <div className="text-center">
                <p className="font-heading text-2xl font-bold gradient-text">3+</p>
                <p className="font-mono text-xs text-muted-foreground mt-1">Years Exp.</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="font-heading text-2xl font-bold gradient-text">15+</p>
                <p className="font-mono text-xs text-muted-foreground mt-1">Projects</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="font-heading text-2xl font-bold gradient-text">5+</p>
                <p className="font-mono text-xs text-muted-foreground mt-1">Open Source</p>
              </div>
            </div>*/}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="grid grid-cols-2 gap-4">
            
            {highlights.map(({ icon: Icon, title, description }, i) =>
            <div
              key={title}
              className="group p-5 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:glow-purple">
              
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <Icon size={18} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-sm mb-1">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>);

}
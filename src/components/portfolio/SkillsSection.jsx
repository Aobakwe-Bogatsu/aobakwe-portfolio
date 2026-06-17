import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
{
  label: 'Languages',
  skills: ['Java', 'JavaScript', 'Python', 'C++', 'C#', 'SQL']
},
{
  label: 'Frontend',
  skills: ['React', 'SweetAlert', 'TailwindCSS', 'Framer Motion', 'HTML', 'CSS']
},
{
  label: 'Backend & Database',
  skills: ['ASP.NET Core', 'Carter', 'CQRS', 'MediatR', 'REST APIs', 'PostgreSQL', 'SQLite', 'Python', 'Flask']
},
{
  label: 'Tools & DevOps',
  skills: ['Git', 'GitHub', 'Postman', 'Visual Studio', 'VS Code']
}
];


export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}>
          
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3 font-semibold">02 — SKILLS</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-12">
            My <span className="gradient-text">tech stack</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, catIndex) =>
          <motion.div
            key={cat.label}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            className="group">
            
              <div className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-500 h-full">
                <h3 className="font-mono text-xs text-primary tracking-wider uppercase mb-5">
                  {cat.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) =>
                <span
                  key={skill}
                  className="font-mono text-xs px-3 py-1.5 rounded-full bg-secondary/80 text-secondary-foreground hover:bg-primary/15 hover:text-primary transition-all duration-300 cursor-default">
                  
                      {skill}
                    </span>
                )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
{
  role: 'Junior Full-Stack Developer (Intern)',
  company: 'Soflync',
  period: 'Aug 2025 – Jul 2026',
  description:
  'Contributed to the design and development of a role-based, multi-portal HR and leave management system, engaging across both front-end and foundational back-end development throughout the software development lifecycle. Specialised as a Front-End Developer, building responsive, user-centric interfaces using React. Applied responsive design and UI/UX principles, ensuring consistent visual design and intuitive navigation across desktop, tablet, and mobile views for all user roles.',
  tags: ['JavaScript', 'C#', 'React', 'Tailwind CSS', 'ASP.NET Core', 'PostgreSQL']
},
{
  role: '9-Day Vacation Work',
  company: 'Vaxowave',
  period: 'June 2025',
  description:
  'Gained hands-on experience with Python, Flask and Microsoft Azure. Troubleshot and resolved issues in a Flask Buggy App, enhanced the UI/UX and functionality of a Snake Game and Timesheeting App.',
  tags: ['Python', 'Flask', 'Microsoft Azure']
}];


export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-32 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}>
          
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3 font-semibold">04 — EXPERIENCE</p>

          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-12">
            Where I've <span className="gradient-text">worked</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) =>
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative flex gap-6">
              
                {/* Timeline dot */}
                <div className="hidden sm:flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shrink-0 relative z-10">
                    <Briefcase size={16} className="text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/20 transition-all duration-500">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="font-heading font-semibold text-base group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground mt-1 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) =>
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">
                    
                        {tag}
                      </span>
                  )}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}
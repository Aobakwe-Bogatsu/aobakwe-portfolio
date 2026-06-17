import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award, ArrowUpRight } from 'lucide-react';

const education = [
{
  degree: 'Diploma in Computer Systems Engineering',
  school: 'Tshwane University of Technology',
  period: '2021 — 2026',
  description:
  'Strong foundation in C++, C#, SQL, and embedded systems with practical exposure through coursework and practical projects.',
  tags: ['Artificial Intelligence', 'Unity', 'C#', 'Object-Oriented Programming (C++)', 'GUI Development (C++ Builder)', 'SQL & Databases (Oracle)', 'Embedded Systems'],
  type: 'degree'
},
{
  degree: 'Azure Fundamentals Certificate',
  school: 'Microsoft Learn',
  period: '2025',
  description:
  'Foundational certification covering core Azure cloud concepts, including cloud computing principles, Azure services, pricing, governance, and security.',
  tags: [ 'Azure Cloud', 'Cloud Concepts', 'Azure Services', 'Security & Compliance'],
  type: 'cert',
  link: 'https://learn.microsoft.com/api/credentials/share/en-us/AobakweBogatsu/5E46C7F4938567F4?sharingId=BB8966BC2DB1E8B7'
},
/*{
  degree: 'Google UX Design Certificate',
  school: 'Coursera — Google',
  period: '2022',
  description:
  'Mastered end-to-end UX design process including research, wireframing, prototyping, and usability testing.',
  tags: ['Figma', 'UX Research', 'Prototyping', 'Design Thinking'],
  type: 'cert'
}*/];


export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="education" className="py-32 relative" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}>
          
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3 font-semibold">05 — EDUCATION</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-12">
            How I <span className="gradient-text">learned</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {education.map((item, i) =>
            <motion.div
              key={item.degree}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="relative flex gap-6">
              
                <div className="hidden sm:flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shrink-0 relative z-10">
                    {item.type === 'degree' ?
                  <GraduationCap size={16} className="text-primary" /> :

                  <Award size={16} className="text-accent" />
                  }
                  </div>
                </div>

                <div className="flex-1 group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/20 transition-all duration-500">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-heading font-semibold text-base group-hover:text-primary transition-colors">
                          {item.degree}
                        </h3>
                        {item.type === 'cert' && item.link ? (
  <span
    onClick={() => window.open(item.link, '_blank')}
    className="relative font-mono text-[10px] px-2.5 py-1 pr-6 rounded-full bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20 cursor-pointer transition inline-flex items-center"
  >
    Certificate

    {/* Icon in corner */}
    <ArrowUpRight
      size={10}
      className="absolute right-1 top-1 text-accent opacity-70"
    />
  </span>
) : item.type === 'cert' ? (
  <span className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
    Certificate
  </span>
) : null}
                      </div>
                      <p className="text-sm text-muted-foreground">{item.school}</p>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground mt-1 sm:mt-0 shrink-0">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) =>
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
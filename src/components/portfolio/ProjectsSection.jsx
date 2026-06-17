import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
{
  title: 'Approved - HR & Leave Management System',
  description: 'Explore my intenship portfolio as a Juniour Full Stack Developer, showcasing my contibutions to a multi-portal workflow management platform.',
  tags: ['React', 'JavaScript', 'Tailwind CSS', 'ASP.NET Core', 'C#',  'PostgreSQL' ],
  color: 'from-primary/20 to-accent/20',
  liveUrl: 'https://ambitious-chopper-df3.notion.site/Junior-Full-Stack-Developer-Internship-Portfolio-36630122872680809e23e1f3dc0b2170?source=copy_link',
  //githubUrl: '#',
  hideGithub: true
},
{
  title: 'Snake Game',
  description: 'A modern snake game built with a focus on gameplay customisation, player statistics, and an engaging user experience.',
  tags: ['Python', 'Flask', 'JavaScript', 'SQLite', 'CSS', 'HTML'],
  color: 'from-accent/20 to-chart-3/20',
  githubUrl: 'https://github.com/Aobakwe-Bogatsu/snake-game',
  hideLive: true
},
{
  title: 'Terrain Generation',
  description: 'A Unity-based terrain generation project using the Diamond-Square Algorithm, featuring dynamic procedural landscapes and physics-driven prefab spawning.',
  tags: ['C#', 'Unity'],
  color: 'from-chart-3/20 to-primary/20',
  githubUrl: 'https://github.com/Aobakwe-Bogatsu/DiamondSqrAlgorithm-TerrainGeneration',
  hideLive: true
},
{
  title: 'Trampoline and Scorer Game',
  description: 'A Unity3D game scene where objects bounce off a trampoline and interact with a moving scoring platform.',
  tags: ['C#', 'Unity'],
  color: 'from-chart-4/20 to-primary/20',
  githubUrl: 'https://github.com/Aobakwe-Bogatsu/Trampoline-and-Scorer',
  hideLive: true
}];


export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}>
          
          <p className="font-mono text-xs text-primary tracking-widest uppercase mb-3 font-semibold">03 — PROJECTS</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-12">
            Featured <span className="gradient-text">work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) =>
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: i * 0.1 }}>
            
              <div className="group relative rounded-xl bg-card border border-border/50 overflow-hidden hover:border-primary/30 transition-all duration-500">
                {/* Gradient header */}
                <div className={`h-40 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 grid-pattern opacity-50" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {!project.hideGithub && (
                    <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-background/80 backdrop-blur-sm text-foreground hover:text-primary transition-colors">
                    
                      <Github size={16} />
                    </a>
                    )}
                    {!project.hideLive && (
                    <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-background/80 backdrop-blur-sm text-foreground hover:text-primary transition-colors">
                    
                      <ExternalLink size={16} />
                    </a>
                    )}
                  </div>
                  <div className="absolute bottom-4 left-5">
                    <ArrowUpRight
                    size={24}
                    className="text-foreground/60 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) =>
                  <span
                    key={tag}
                    className="font-mono text-[10px] px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">
                    
                        {tag}
                      </span>
                  )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}
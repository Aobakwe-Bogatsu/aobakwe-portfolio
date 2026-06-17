import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/lib/ThemeContext';

const navLinks = [
{ label: 'About', href: '#about' },
{ label: 'Skills', href: '#skills' },
{ label: 'Projects', href: '#projects' },
{ label: 'Experience', href: '#experience' },
{ label: 'Education', href: '#education' },
{ label: 'Contact', href: '#contact' }];


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ?
      'bg-background/80 backdrop-blur-xl border-b border-border/50' :
      'bg-transparent'}`
      }>
      
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-heading font-bold text-lg gradient-text"><tech />

        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
          <a
            key={link.href}
            href={link.href}
            className="font-mono text-xs tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase">
            
              {link.label}
            </a>
          )}
          <a
            href="#contact"
            className="font-mono text-xs px-4 py-2 rounded-full border border-primary/50 text-primary hover:bg-primary/10 transition-all duration-300 font-semibold">Let's Talk


          </a>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
            aria-label="Toggle theme">
            
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-border/50 text-muted-foreground hover:text-foreground transition-all duration-300"
            aria-label="Toggle theme">
            
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground">
            
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border/50 overflow-hidden">
          
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) =>
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-mono text-sm text-muted-foreground hover:text-foreground transition-colors">
              
                  {link.label}
                </a>
            )}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </motion.nav>);

}
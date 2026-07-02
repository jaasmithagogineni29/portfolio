import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-white/80 dark:bg-[#16110E]/80 backdrop-blur-md border-b border-[#2D231E]/10 dark:border-[#FAF5F0]/10 shadow-sm'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-1 relative group" onClick={() => setActiveItem('Home')}>
          <div className="font-serif-heading text-3xl font-bold tracking-tight text-[#2D231E] dark:text-[#FAF5F0] select-none">
            GJ
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeItem === item.name;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setActiveItem(item.name)}
                  className={`text-xs uppercase tracking-widest transition-all duration-200 px-3 py-1.5 font-bold ${
                    isActive
                      ? 'text-primary dark:text-[#E5A587]'
                      : 'text-[#2D231E]/80 dark:text-[#FAF5F0]/80 hover:text-primary dark:hover:text-[#E5A587]'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-4 border-l border-[#2D231E]/10 dark:border-[#FAF5F0]/10 pl-6">
            {/* Dark Mode Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full bg-white/40 dark:bg-white/5 hover:bg-primary/10 dark:hover:bg-[#E5A587]/15 text-[#2D231E] dark:text-[#FAF5F0] transition-colors"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            {/* Download CV */}
            <a
              href="/Gogineni_Jaasmitha_Resume.txt"
              download="Gogineni_Jaasmitha_Resume.txt"
              className="flex items-center gap-2 px-5 py-2.5 border border-[#2D231E] dark:border-[#FAF5F0] text-[#2D231E] dark:text-[#FAF5F0] hover:bg-[#2D231E]/5 dark:hover:bg-[#FAF5F0]/5 text-xs font-bold rounded-xl transition-all duration-200 shadow-sm"
            >
              <span>Download CV</span>
              <Download size={14} className="stroke-[2.5]" />
            </a>
          </div>
        </div>

        {/* Mobile Action Controls */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-white/40 dark:bg-white/5 text-[#2D231E] dark:text-[#FAF5F0]"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg bg-white/40 dark:bg-white/5 text-[#2D231E] dark:text-[#FAF5F0]"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-[#2D231E]/10 dark:border-[#FAF5F0]/10 bg-white/95 dark:bg-[#16110E]/95 backdrop-blur-md"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xs uppercase tracking-widest text-[#2D231E] dark:text-[#FAF5F0] hover:text-primary dark:hover:text-[#E5A587] font-bold py-1"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/Gogineni_Jaasmitha_Resume.txt"
                download="Gogineni_Jaasmitha_Resume.txt"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 bg-primary text-white text-xs font-bold rounded-xl text-center shadow-sm"
              >
                <Download size={14} />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

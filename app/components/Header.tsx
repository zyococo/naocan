'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Flower2, Menu } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const headerBg = useTransform(
    scrollY,
    [0, 100],
    ['rgba(249, 213, 211, 0.9)', 'rgba(249, 213, 211, 0.95)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'ホーム', href: '#' },
    { name: '情報', href: '#about' },
    { name: 'ギャラリー', href: '#gallery' },
    { name: '場所', href: '#location' },
    { name: 'お問い合わせ', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 100,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.header
      style={{ backgroundColor: headerBg }}
      className={`fixed w-full z-50 backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? 'py-2 shadow-lg' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-8">
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              animate={{ 
                rotate: 360
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Flower2 className="h-8 w-8 text-subPink" />
            </motion.div>
            <span className="font-handwriting text-2xl text-textDark whitespace-nowrap group-hover:text-subPink transition-colors">
              なおかんへようこそ
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center h-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full flex items-center"
              >
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-6 text-textDark hover:text-subPink transition-colors relative group text-sm tracking-widest h-full flex items-center"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-subPink transition-all group-hover:w-full" />
                </a>
              </motion.div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden h-8 flex items-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Menu className="h-6 w-6 text-textDark" />
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-4"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="block py-2 text-textDark hover:text-subPink transition-colors text-center"
                >
                  {item.name}
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
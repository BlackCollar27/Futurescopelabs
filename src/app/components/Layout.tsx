import { useState, useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';
import { Menu } from './Menu';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from 'next-themes';
import logoDark from 'figma:asset/4026f41fd051d077eb1d5a8c60e5c3cd4e1c620f.png';
import logoLight from 'figma:asset/c88db6c10b54909dc2d55b3172f51d9dfe3d765e.png';

export function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { theme } = useTheme();

  // Track scroll position
  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.scrollTop > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const scrollContainer = document.querySelector('.overflow-y-auto');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-black dark:to-black transition-colors duration-300" />
        
        {/* Geometric grid overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-20 dark:opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hexagons" width="100" height="87" patternUnits="userSpaceOnUse">
              <path d="M50 0 L93.3 25 L93.3 62 L50 87 L6.7 62 L6.7 25 Z" fill="none" stroke="#CEC3C1" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
        
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C02130]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#CEC3C1]/5 rounded-full blur-[100px]" />
      </div>

      {/* Header */}
      <header className={`absolute top-0 left-0 right-0 z-20 px-6 py-6 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-[#CEC3C1]/20' 
          : 'bg-transparent'
      }`}>
        {/* Desktop Layout - Home Page: Nav centered */}
        {isHomePage ? (
          <div className="hidden md:flex justify-between items-center max-w-7xl mx-auto">
            <div className="w-10" /> {/* Spacer for balance */}
            <nav className="flex items-center gap-10 text-black/70 dark:text-white/70" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <Link to="/" className="hover:text-[#C02130] transition-colors tracking-wide">Home</Link>
              <Link to="/portfolio" className="hover:text-[#C02130] transition-colors tracking-wide">Portfolio</Link>
              <Link to="/services" className="hover:text-[#C02130] transition-colors tracking-wide">Services</Link>
              <Link to="/book-call" className="hover:text-[#C02130] transition-colors tracking-wide">Book a Call</Link>
            </nav>
            <ThemeToggle />
          </div>
        ) : (
          /* Desktop Layout - Inner Pages: Logo left, Nav right */
          <div className="hidden md:flex items-center justify-between max-w-7xl mx-auto">
            <Link to="/">
              <img 
                src={theme === 'dark' ? logoLight : logoDark} 
                alt="Future Scope Labs" 
                className="h-20 w-auto" 
              />
            </Link>
            <nav className="flex items-center gap-10 text-black/70 dark:text-white/70" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <Link to="/" className="hover:text-[#C02130] transition-colors tracking-wide">Home</Link>
              <Link to="/portfolio" className="hover:text-[#C02130] transition-colors tracking-wide">Portfolio</Link>
              <Link to="/services" className="hover:text-[#C02130] transition-colors tracking-wide">Services</Link>
              <Link to="/book-call" className="hover:text-[#C02130] transition-colors tracking-wide">Book a Call</Link>
            </nav>
            <ThemeToggle />
          </div>
        )}
        
        {/* Mobile Layout - Centered Logo with Theme Toggle */}
        <div className="md:hidden flex justify-between items-center">
          <div className="w-10" /> {/* Spacer for balance */}
          <Link to="/">
            <img 
              src={theme === 'dark' ? logoLight : logoDark} 
              alt="Future Scope Labs" 
              className="h-20 w-auto" 
            />
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Page Content */}
      <div className="relative h-full flex flex-col items-center justify-start overflow-y-auto scrollbar-hide px-[24px] pt-[160px] pb-[100px] md:pb-[80px]">
        <Outlet />
      </div>

      {/* Menu Button - Mobile Only */}
      <motion.button 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        onClick={() => setIsMenuOpen(true)}
        className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 z-10 w-16 h-16 rounded-full bg-white/20 dark:bg-white/20 backdrop-blur-md border-2 border-[#CEC3C1] flex items-center justify-center text-[#C02130] dark:text-[#C02130] hover:bg-white/10 hover:scale-110 transition-all duration-200 shadow-xl shadow-[#C02130]/10 bg-[#ffffff1a]"
      >
        <ChevronUp size={22} strokeWidth={2.5} />
      </motion.button>

      {/* Animated Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <Menu onClose={() => setIsMenuOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}
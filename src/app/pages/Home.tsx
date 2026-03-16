import { motion } from 'motion/react';
import { useTheme } from 'next-themes';
import { SEO } from '../components/SEO';
import logoLight from 'figma:asset/c88db6c10b54909dc2d55b3172f51d9dfe3d765e.png';
import logoDark from 'figma:asset/4026f41fd051d077eb1d5a8c60e5c3cd4e1c620f.png';

export function Home() {
  const { theme } = useTheme();

  return (
    <>
      <SEO 
        title="Future Scope Labs"
        description="AI-accelerated web design and software development agency. We build digital products that move at the speed of AI without losing the human touch. Expert developers combining speed, precision, and reliability."
        path="/"
        keywords="web design, web development, software development, AI development, PWA, progressive web apps, design agency, React development, digital products, app development"
      />
      <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl w-full px-4 text-center">
      {/* Logo - Desktop Only */}
      <motion.img
        src={theme === 'dark' ? logoLight : logoDark}
        alt="Future Scope Labs"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden md:block h-28 w-auto mb-12"
      />
      
      {/* Headline */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-black dark:text-white mb-6 tracking-tight leading-tight font-semibold"
        style={{ 
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 'clamp(2.5rem, 6vw, 4rem)'
        }}
      >
        Speed. Precision. Human-Led AI Development.
      </motion.h1>
      
      {/* Subheadline */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-lg md:text-xl text-black/70 dark:text-white/70 mb-12 max-w-2xl"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        We build digital products that move at the speed of AI — without losing the human touch
      </motion.p>
      
      {/* CTA Button */}
      <motion.a
        href="/book-call"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-12 py-4 bg-[#C02130] hover:bg-[#a01b28] text-white rounded-full font-medium transition-colors shadow-lg shadow-[#C02130]/20"
        style={{ 
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '1.125rem'
        }}
      >
        Book a Call
      </motion.a>
      
      {/* View Portfolio Button */}
      <motion.a
        href="/portfolio"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mt-4 px-12 py-4 bg-white/5 dark:bg-white/3 hover:bg-[#CEC3C1]/15 text-black dark:text-white rounded-full font-medium hover:scale-105 transition-all duration-200 backdrop-blur-md"
        style={{ 
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '1.125rem',
          boxShadow: '0 0 12px rgba(206, 195, 193, 0.4), 0 0 25px rgba(206, 195, 193, 0.2)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 0 18px rgba(206, 195, 193, 0.6), 0 0 35px rgba(206, 195, 193, 0.3)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 0 12px rgba(206, 195, 193, 0.4), 0 0 25px rgba(206, 195, 193, 0.2)';
        }}
      >
        View Portfolio
      </motion.a>
    </div>
    </>
  );
}
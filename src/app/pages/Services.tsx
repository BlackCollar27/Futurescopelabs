import { motion } from 'motion/react';
import { Globe, Code } from 'lucide-react';
import { Footer } from '../components/Footer';

export function Services() {
  return (
    <div className="relative z-10 flex flex-col items-center max-w-5xl w-full px-4 pb-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 
          className="text-black dark:text-white mb-6 tracking-tight leading-tight font-semibold"
          style={{ 
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)'
          }}
        >
          Our Services
        </h1>
        <p 
          className="text-lg text-black/70 dark:text-white/70 max-w-2xl mx-auto"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Two core capabilities. Unlimited possibilities.
        </p>
      </motion.div>

      {/* Service Cards */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full"
      >
        {/* Web Design */}
        <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm border-2 border-[#CEC3C1] rounded-2xl p-10 hover:border-[#C02130] hover:shadow-xl hover:shadow-[#C02130]/10 transition-all duration-300 group">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full border-2 border-[#CEC3C1] flex items-center justify-center group-hover:bg-[#C02130]/30 transition-all duration-300 bg-[#ffffff33]">
              <Globe className="w-10 h-10 text-[#C02130]" />
            </div>
          </div>
          <h2 
            className="text-black dark:text-white text-3xl mb-6 text-center font-semibold"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Web Design
          </h2>
          <p 
            className="text-black/70 dark:text-white/70 text-center leading-relaxed text-lg"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Beautiful, conversion-focused websites built for the modern web. Every pixel crafted with intention, every interaction designed to delight.
          </p>
        </div>

        {/* Software Development */}
        <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm border-2 border-[#CEC3C1] rounded-2xl p-10 hover:border-[#C02130] hover:shadow-xl hover:shadow-[#C02130]/10 transition-all duration-300 group">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full border-2 border-[#CEC3C1] flex items-center justify-center group-hover:bg-[#C02130]/30 transition-all duration-300 bg-[#ffffff33]">
              <Code className="w-10 h-10 text-[#C02130]" />
            </div>
          </div>
          <h2 
            className="text-black dark:text-white text-3xl mb-6 text-center font-semibold"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Software Development
          </h2>
          <p 
            className="text-black/70 dark:text-white/70 text-center leading-relaxed text-lg"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Scalable, reliable software engineered with AI-assisted precision. From MVPs to enterprise platforms, we build it right.
          </p>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
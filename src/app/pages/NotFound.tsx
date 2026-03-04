import { motion } from 'motion/react';
import { Home, Search, ArrowLeft } from 'lucide-react';
import { SEO } from '../components/SEO';

export function NotFound() {
  return (
    <>
      <SEO 
        title="Page Not Found - 404"
        description="The page you're looking for doesn't exist. Return to Future Scope Labs homepage or explore our portfolio and services."
        path="/404"
        keywords="404, page not found, error"
      />
      <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl w-full px-4 text-center min-h-[70vh]">
        {/* 404 Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 
            className="text-[120px] md:text-[180px] font-semibold text-[#C02130] leading-none"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            404
          </h1>
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 
            className="text-3xl md:text-4xl font-semibold text-black dark:text-white mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Page Not Found
          </h2>
          <p 
            className="text-lg text-black/70 dark:text-white/70 max-w-2xl"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            The page you're looking for doesn't exist or has been moved.
            Let's get you back on track.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C02130] hover:bg-[#C02130]/90 text-white rounded-full font-medium hover:scale-105 transition-all duration-200 border-2 border-[#CEC3C1]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <Home className="w-5 h-5" />
            Back to Home
          </a>

          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent hover:bg-[#CEC3C1]/20 text-black dark:text-white rounded-full font-medium hover:scale-105 transition-all duration-200 border-2 border-[#CEC3C1]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <Search className="w-5 h-5" />
            View Portfolio
          </a>
        </motion.div>

        {/* Popular Pages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 w-full"
        >
          <h3 
            className="text-xl font-semibold text-black dark:text-white mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Popular Pages
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a
              href="/services"
              className="p-6 bg-white/50 dark:bg-white/5 backdrop-blur-sm border-2 border-[#CEC3C1] rounded-2xl hover:border-[#C02130] transition-all duration-300 text-left"
            >
              <h4 
                className="font-semibold text-black dark:text-white mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Services
              </h4>
              <p 
                className="text-sm text-black/70 dark:text-white/70"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Explore our web design and development services
              </p>
            </a>

            <a
              href="/portfolio"
              className="p-6 bg-white/50 dark:bg-white/5 backdrop-blur-sm border-2 border-[#CEC3C1] rounded-2xl hover:border-[#C02130] transition-all duration-300 text-left"
            >
              <h4 
                className="font-semibold text-black dark:text-white mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Portfolio
              </h4>
              <p 
                className="text-sm text-black/70 dark:text-white/70"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                View our recent projects and case studies
              </p>
            </a>

            <a
              href="/book-call"
              className="p-6 bg-white/50 dark:bg-white/5 backdrop-blur-sm border-2 border-[#CEC3C1] rounded-2xl hover:border-[#C02130] transition-all duration-300 text-left"
            >
              <h4 
                className="font-semibold text-black dark:text-white mb-2"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Book a Call
              </h4>
              <p 
                className="text-sm text-black/70 dark:text-white/70"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Schedule a free consultation with our team
              </p>
            </a>
          </div>
        </motion.div>
      </div>
    </>
  );
}

import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Calendar, Clock, MessageSquare } from 'lucide-react';
import { SEO } from '../components/SEO';
import { Footer } from '../components/Footer';

export function BookCall() {
  useEffect(() => {
    // Load the calendar embed script
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <SEO 
        title="Book a Call"
        description="Schedule a free 30-minute discovery call with Future Scope Labs. Let's discuss your project goals and how we can help bring your digital product to life with AI-accelerated development."
        path="/book-call"
        keywords="book consultation, free consultation, discovery call, project consultation, web development consultation, software development meeting, schedule call"
      />
      <div className="relative z-10 flex flex-col items-center justify-start w-full text-center">
      {/* Headline Section */}
      <div className="px-4 pt-4 md:pt-8 mb-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-black dark:text-white mb-4 tracking-tight leading-tight font-semibold"
          style={{ 
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(2rem, 5vw, 3rem)'
          }}
        >
          Let's Build Something Great
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-black/70 dark:text-white/70 text-base md:text-lg"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Book a Call
        </motion.p>
      </div>
      
      {/* Calendar - No Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full max-w-2xl px-4 mb-16"
      >
        <iframe 
          src="https://api.leadconnectorhq.com/widget/booking/qrm5jVuDz92AOSKOvfuk" 
          style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }} 
          scrolling="no" 
          id="qrm5jVuDz92AOSKOvfuk_1772662136365"
          className="rounded-lg"
        />
      </motion.div>

      {/* What to Expect Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="w-full max-w-3xl px-4"
      >
        <h2 
          className="text-black dark:text-white mb-8 font-semibold text-2xl md:text-3xl"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          What to Expect
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow-lg shadow-[#CEC3C1]/30 rounded-2xl p-6 hover:shadow-xl hover:shadow-[#C02130]/20 transition-all duration-300">
            <Calendar className="w-10 h-10 text-[#C02130] mb-4 mx-auto" />
            <h3 
              className="text-black dark:text-white font-semibold mb-2 text-lg"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              30-Minute Discovery
            </h3>
            <p 
              className="text-black/70 dark:text-white/70 text-sm"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              A focused conversation to understand your project goals and vision
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow-lg shadow-[#CEC3C1]/30 rounded-2xl p-6 hover:shadow-xl hover:shadow-[#C02130]/20 transition-all duration-300">
            <MessageSquare className="w-10 h-10 text-[#C02130] mb-4 mx-auto" />
            <h3 
              className="text-black dark:text-white font-semibold mb-2 text-lg"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Strategy Discussion
            </h3>
            <p 
              className="text-black/70 dark:text-white/70 text-sm"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              We'll explore solutions and share insights on how we can help
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm shadow-lg shadow-[#CEC3C1]/30 rounded-2xl p-6 hover:shadow-xl hover:shadow-[#C02130]/20 transition-all duration-300">
            <Clock className="w-10 h-10 text-[#C02130] mb-4 mx-auto" />
            <h3 
              className="text-black dark:text-white font-semibold mb-2 text-lg"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Next Steps
            </h3>
            <p 
              className="text-black/70 dark:text-white/70 text-sm"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Get a clear roadmap and timeline for bringing your idea to life
            </p>
          </div>
        </div>
      </motion.div>

      {/* Bottom Spacer for Mobile Menu Button */}
      <div className="h-20 md:h-0" />

      <Footer />
    </div>
    </>
  );
}
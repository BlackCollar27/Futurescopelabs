import { motion } from 'motion/react';
import { Zap, Lock, Users, ExternalLink } from 'lucide-react';
import { Footer } from '../components/Footer';

export function About() {
  const projects = [
    {
      id: "fintech-dashboard",
      title: "FinTech Dashboard",
      description: "Real-time analytics platform for cryptocurrency trading with AI-powered insights",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      tags: ["React", "TypeScript", "AI/ML"],
      link: "/portfolio/fintech-dashboard"
    },
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      description: "Modern shopping experience with seamless checkout and inventory management",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
      tags: ["Next.js", "Stripe", "Tailwind"],
      link: "/portfolio/ecommerce-platform"
    },
    {
      id: "healthcare-app",
      title: "Healthcare App",
      description: "HIPAA-compliant patient management system with telehealth capabilities",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      tags: ["React Native", "Node.js", "Security"],
      link: "/portfolio/healthcare-app"
    }
  ];

  return (
    <div className="relative z-10 flex flex-col items-center max-w-6xl w-full px-4 pb-20">
      {/* Main Message - Manifesto Style */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 
          className="text-black dark:text-white tracking-tight leading-tight text-[36px] md:text-[44px] mx-[0px] my-[32px] font-semibold"
          style={{ 
            fontFamily: 'Montserrat, sans-serif'
          }}
        >
          Portfolio
        </h1>
        <p 
          className="text-lg md:text-xl text-black/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          In the age of AI, the best developers and designers aren't being replaced — they're becoming more powerful. 
          We combine deep human craft with AI speed to build products that are faster, smarter, and more reliable than ever before.
        </p>
      </motion.div>

      {/* Recent Projects Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full mb-16"
      >
        <h2 
          className="text-black dark:text-white text-3xl mb-8 text-center"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Recent Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white/50 dark:bg-white/5 backdrop-blur-sm border-2 border-[#CEC3C1] rounded-2xl overflow-hidden hover:border-[#C02130] hover:shadow-xl hover:shadow-[#C02130]/10 transition-all duration-300 group cursor-pointer block"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Project Details */}
              <div className="p-6">
                <h3 
                  className="text-black dark:text-white text-xl mb-3 font-semibold"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {project.title}
                </h3>
                <p 
                  className="text-black/70 dark:text-white/70 mb-4 leading-relaxed text-sm"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-[#CEC3C1]/30 dark:bg-[#CEC3C1]/10 rounded-full text-xs text-black dark:text-white"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* View Project Indicator */}
                <div 
                  className="inline-flex items-center gap-2 text-[#C02130] group-hover:text-[#C02130]/80 transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <span className="text-sm font-medium">View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Three Value Pillars */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
      >
        {/* Speed */}
        <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm border-2 border-[#CEC3C1] rounded-2xl p-8 hover:border-[#C02130] hover:shadow-xl hover:shadow-[#C02130]/10 transition-all duration-300">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full border-2 border-[#CEC3C1] flex items-center justify-center bg-[#ffffff]">
              <Zap className="w-8 h-8 text-[#C02130]" />
            </div>
          </div>
          <h3 
            className="text-black dark:text-white text-2xl mb-4 text-center font-semibold"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Speed
          </h3>
          <p 
            className="text-black/70 dark:text-white/70 text-center leading-relaxed"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Ship faster than ever with AI-accelerated development that doesn't compromise on quality
          </p>
        </div>

        {/* Reliability */}
        <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm border-2 border-[#CEC3C1] rounded-2xl p-8 hover:border-[#C02130] hover:shadow-xl hover:shadow-[#C02130]/10 transition-all duration-300">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full border-2 border-[#CEC3C1] flex items-center justify-center bg-[#ffffff33]">
              <Lock className="w-8 h-8 text-[#C02130]" />
            </div>
          </div>
          <h3 
            className="text-black dark:text-white text-2xl mb-4 text-center font-semibold"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Reliability
          </h3>
          <p 
            className="text-black/70 dark:text-white/70 text-center leading-relaxed"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Build on solid foundations with tested patterns and bulletproof architecture
          </p>
        </div>

        {/* Human */}
        <div className="bg-white/50 dark:bg-white/5 backdrop-blur-sm border-2 border-[#CEC3C1] rounded-2xl p-8 hover:border-[#C02130] hover:shadow-xl hover:shadow-[#C02130]/10 transition-all duration-300">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full border-2 border-[#CEC3C1] flex items-center justify-center bg-[#ffffff33]">
              <Users className="w-8 h-8 text-[#C02130]" />
            </div>
          </div>
          <h3 
            className="text-black dark:text-white text-2xl mb-4 text-center font-semibold"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Human
          </h3>
          <p 
            className="text-black/70 dark:text-white/70 text-center leading-relaxed"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Expert designers and developers who understand your vision and bring it to life
          </p>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
}
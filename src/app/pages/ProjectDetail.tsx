import { motion } from 'motion/react';
import { useParams, useNavigate } from 'react-router';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { Footer } from '../components/Footer';

// Project data
const projectsData = {
  'fintech-dashboard': {
    id: 'fintech-dashboard',
    title: "FinTech Dashboard",
    description: "Real-time analytics platform for cryptocurrency trading with AI-powered insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "TypeScript", "AI/ML"],
    fullDescription: "A comprehensive financial technology dashboard that provides real-time analytics and AI-powered insights for cryptocurrency trading. Built with modern web technologies to ensure fast performance and seamless user experience.",
    challenge: "Creating a real-time data processing system that could handle millions of transactions per second while providing instant insights to traders without any lag or delay.",
    solution: "We implemented a microservices architecture with WebSocket connections for real-time data streaming, combined with machine learning models running on edge servers for instant AI predictions. The result was a platform that processes data 10x faster than traditional systems.",
    results: [
      "Reduced data processing latency by 85%",
      "Handled 10M+ transactions per second",
      "Increased user engagement by 240%",
      "Won 'Best FinTech Platform 2025' award"
    ],
    technologies: ["React", "TypeScript", "Node.js", "TensorFlow", "WebSocket", "Redis", "PostgreSQL"],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  'ecommerce-platform': {
    id: 'ecommerce-platform',
    title: "E-Commerce Platform",
    description: "Modern shopping experience with seamless checkout and inventory management",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    tags: ["Next.js", "Stripe", "Tailwind"],
    fullDescription: "A modern e-commerce platform featuring seamless checkout experiences, real-time inventory management, and personalized product recommendations powered by AI.",
    challenge: "Building a scalable e-commerce solution that could handle Black Friday traffic spikes while maintaining fast page load times and providing personalized shopping experiences.",
    solution: "We leveraged Next.js for server-side rendering and static generation, implemented edge caching strategies, and integrated AI-powered recommendation engines. The platform scales automatically based on traffic demand.",
    results: [
      "99.99% uptime during peak shopping seasons",
      "Page load times under 1 second",
      "Conversion rate increased by 180%",
      "Average order value up by 45%"
    ],
    technologies: ["Next.js", "React", "Stripe", "Tailwind CSS", "MongoDB", "Vercel", "Algolia"],
    images: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=1200&q=80",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&q=80"
    ],
    liveUrl: "#",
    githubUrl: "#"
  },
  'healthcare-app': {
    id: 'healthcare-app',
    title: "Healthcare App",
    description: "HIPAA-compliant patient management system with telehealth capabilities",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["React Native", "Node.js", "Security"],
    fullDescription: "A HIPAA-compliant healthcare application that enables secure patient management, electronic health records, and seamless telehealth video consultations.",
    challenge: "Creating a mobile-first healthcare platform that meets strict HIPAA compliance requirements while providing a smooth user experience for both patients and healthcare providers.",
    solution: "We built a cross-platform mobile application using React Native with end-to-end encryption, secure video streaming, and compliant data storage solutions. All communications are encrypted and logged according to HIPAA standards.",
    results: [
      "100% HIPAA compliance certification",
      "Reduced appointment no-shows by 60%",
      "Served 50,000+ patients in first year",
      "4.8/5 star rating on app stores"
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "AWS", "WebRTC", "Socket.io", "Twilio"],
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=1200&q=80"
    ],
    liveUrl: "#",
    githubUrl: "#"
  }
};

export function ProjectDetail() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  
  const project = projectId ? projectsData[projectId as keyof typeof projectsData] : null;

  if (!project) {
    return (
      <div className="relative z-10 flex flex-col items-center justify-center max-w-4xl w-full px-4 text-center min-h-[60vh]">
        <h1 
          className="text-black dark:text-white text-4xl mb-6 font-semibold"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Project Not Found
        </h1>
        <button
          onClick={() => navigate('/portfolio')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#C02130] hover:bg-[#C02130]/90 text-white rounded-full transition-all duration-200"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </button>
      </div>
    );
  }

  return (
    <div className="relative z-10 flex flex-col items-center max-w-6xl w-full px-4 pb-20">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        onClick={() => navigate('/portfolio')}
        className="self-start mb-8 inline-flex items-center gap-2 text-black dark:text-white hover:text-[#C02130] dark:hover:text-[#C02130] transition-colors"
        style={{ fontFamily: 'Montserrat, sans-serif' }}
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Portfolio</span>
      </motion.button>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full mb-12"
      >
        <h1 
          className="text-black dark:text-white text-4xl md:text-5xl mb-4 font-semibold"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {project.title}
        </h1>
        <p 
          className="text-xl text-black/70 dark:text-white/70 mb-6"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {project.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span 
              key={i}
              className="px-4 py-2 bg-[#CEC3C1]/30 dark:bg-[#CEC3C1]/10 rounded-full text-sm text-black dark:text-white"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <a
            href={project.liveUrl}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C02130] hover:bg-[#C02130]/90 text-white rounded-full transition-all duration-200 border-2 border-[#CEC3C1]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            <ExternalLink className="w-4 h-4" />
            View Live Site
          </a>
        </div>
      </motion.div>

      {/* Main Image */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full mb-12 rounded-2xl overflow-hidden border-2 border-[#CEC3C1]"
      >
        <img 
          src={project.images[0]} 
          alt={project.title}
          className="w-full h-auto"
        />
      </motion.div>

      {/* Project Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-full mb-8"
      >
        <h2 
          className="text-black dark:text-white text-3xl mb-6 font-semibold"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Overview
        </h2>
        <p 
          className="text-lg text-black/70 dark:text-white/70 leading-relaxed"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          {project.fullDescription}
        </p>
      </motion.div>

      {/* Challenge & Solution Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-0"
      >
        {/* Challenge */}
        

        {/* Solution */}
        
      </motion.div>

      {/* Results */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="w-full mb-0"
      >
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.results.map((result, index) => (
            null
          ))}
        </div>
      </motion.div>

      {/* Technologies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="w-full mb-0"
      >
        
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech, i) => (
            null
          ))}
        </div>
      </motion.div>

      {/* Additional Images */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-0"
      >
        {project.images.slice(1).map((image, index) => (
          null
        ))}
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="w-full bg-white/50 dark:bg-white/5 backdrop-blur-sm border-2 border-[#CEC3C1] rounded-2xl p-12 text-center mb-12"
      >
        <h2 
          className="text-black dark:text-white text-3xl mb-4 font-semibold"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Ready to Start Your Project?
        </h2>
        <p 
          className="text-lg text-black/70 dark:text-white/70 mb-8"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Let's build something amazing together
        </p>
        <a
          href="/book-call"
          className="inline-block px-8 py-4 bg-[#C02130] hover:bg-[#C02130]/90 text-white rounded-full transition-all duration-200 border-2 border-[#CEC3C1]"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          Book a Call
        </a>
      </motion.div>

      <Footer />
    </div>
  );
}
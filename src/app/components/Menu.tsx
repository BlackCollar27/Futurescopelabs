import { motion } from 'motion/react';
import { X } from 'lucide-react';
import { Link } from 'react-router';

interface MenuProps {
  onClose: () => void;
}

export function Menu({ onClose }: MenuProps) {
  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Services', href: '/services' },
    { label: 'Book a Call', href: '/book-call' },
  ];

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 z-40"
      />

      {/* Menu Panel */}
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ 
          type: 'spring', 
          damping: 30, 
          stiffness: 300 
        }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-2xl rounded-t-3xl shadow-2xl overflow-hidden border-t-2 border-[#CEC3C1]"
        style={{ maxHeight: '85vh' }}
      >
        {/* Close Button */}
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-[#C02130]/20 transition-colors text-[#C02130] backdrop-blur-sm border-2 border-[#CEC3C1] bg-[#ffffff1a]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Menu Content */}
        <div className="pt-6 pb-8 px-6 overflow-y-auto flex items-center justify-center" style={{ maxHeight: '85vh' }}>
          {/* Navigation Items */}
          <nav className="space-y-4 w-full max-w-md">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.href}
                  onClick={onClose}
                  className="block px-4 py-3 text-black dark:text-white text-2xl hover:bg-[#CEC3C1]/20 rounded-lg transition-colors text-center border-2 border-transparent hover:border-[#CEC3C1]"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </div>
      </motion.div>
    </>
  );
}
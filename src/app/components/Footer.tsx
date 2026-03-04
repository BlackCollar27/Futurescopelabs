export function Footer() {
  return (
    <footer className="mt-auto pt-8 pb-4 md:pb-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
        <p 
          className="text-black/50 dark:text-white/50 text-sm"
          style={{ fontFamily: 'Montserrat, sans-serif' }}
        >
          © {new Date().getFullYear()} All rights reserved
        </p>
        <div className="flex gap-6">
          <a 
            href="/terms" 
            className="text-black/50 dark:text-white/50 hover:text-[#C02130] transition-colors text-sm"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Terms of Service
          </a>
          <a 
            href="/privacy" 
            className="text-black/50 dark:text-white/50 hover:text-[#C02130] transition-colors text-sm"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
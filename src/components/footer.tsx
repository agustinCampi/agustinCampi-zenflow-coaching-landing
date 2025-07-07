import { Instagram, Linkedin } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[var(--warm-gray)] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-text-secondary">
        <div className="flex justify-center gap-6 mb-4">
          <a
            className="text-gray-400 hover:text-[#47eab4] transition-colors"
            href="#"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6" />
          </a>
          <a
            className="text-gray-400 hover:text-[#47eab4] transition-colors"
            href="#"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        <p>© 2025 ZenFlow Coaching. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[var(--warm-gray)] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-text-secondary">
        <div className="flex justify-center gap-6 mb-4">
          <a
            className="text-gray-400 hover:text-[#47eab4] transition-colors"
            href="#"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 256 256">
              <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
            </svg>
          </a>
          <a
            className="text-gray-400 hover:text-[#47eab4] transition-colors"
            href="#"
          >
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 256 256">
              <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
            </svg>
          </a>
        </div>
        <p>© 2025 ZenFlow Coaching. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;

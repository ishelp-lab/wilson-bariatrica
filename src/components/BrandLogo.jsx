import React from 'react';

export default function BrandLogo({ variant = 'white', className = '', imgClassName = '' }) {
  const logoSrc = variant === 'color' ? '/assets/logo-color.png' : '/assets/logo-white.png';

  return (
    <div className={`inline-flex items-center group cursor-pointer ${className}`}>
      <img
        src={logoSrc}
        alt="Dr. Wilson Paulo dos Santos - Cirurgia Bariátrica e Metabólica"
        className={`h-14 sm:h-16 md:h-20 w-auto object-contain transition-all duration-300 group-hover:scale-105 ${imgClassName}`}
      />
    </div>
  );
}





import React from 'react';

export default function BrandLogo({ variant = 'white', className = '' }) {
  const logoSrc = variant === 'color' ? '/assets/logo-color.png' : '/assets/logo-white.png';

  return (
    <div className={`inline-flex items-center group cursor-pointer ${className}`}>
      <img
        src={logoSrc}
        alt="Dr. Wilson Paulo dos Santos - Cirurgia Bariátrica e Metabólica"
        className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}


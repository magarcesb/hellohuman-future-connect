
import React from 'react';
import Image from 'next/image';

export const LogoMark = () => {
  return (
    <div className="relative h-10 w-10 flex items-center justify-center">
      <Image 
        src="/lovable-uploads/d08fb9e8-e264-4905-9845-409b93bedb8d.png" 
        alt="HelloHuman Logo" 
        width={40} 
        height={40} 
        className="object-contain"
      />
    </div>
  );
};

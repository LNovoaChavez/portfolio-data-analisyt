'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
// @ts-expect-error - Vanta no tiene tipos oficiales de TypeScript
import NET from 'vanta/dist/vanta.net.min';

export default function Hero() {
  const vantaRef = useRef<HTMLElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE, 
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 0.70,
          scaleMobile: 0.70,
          color: 0x848484, 
          backgroundColor: 0x1c1635,
          points: 10.00,
          maxDistance: 15.00,
          spacing: 13.00,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section 
      id="inicio" 
      ref={vantaRef}
      className="bg-(--bg-dark) text-white py-[120px] md:py-[150px] animate-on-scroll flex flex-col items-center justify-center min-h-[85vh] relative"
    >
      <div className="container mx-auto px-5 flex flex-col items-center text-center max-w-4xl relative z-10">
        
        <h2 className="text-white/60 font-bold tracking-[1px] mb-3">
          HELLO, I'M
        </h2>
        <h1 className="text-[50px] md:text-[64px] leading-tight text-white/95 mb-4 font-extrabold">
          Luz Novoa Chavez
        </h1>
        <p className="text-(--primary) text-[22px] md:text-[26px] font-bold mb-6">
          Analista de datos con perfil económico
        </p>
        <p className="text-white/75 text-[15px] md:text-[17px] leading-[1.7] mb-10 max-w-2xl">
          Especializada en transformar datos en información valiosa mediante análisis profundo, visualización inteligente y automatización de procesos.
        </p>
        
        <div className="flex gap-4 justify-center">   
          <a 
            href="https://www.linkedin.com/in/luz-novoa-ch%C3%A1vez-442a75317/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 hover:w-16 bg-(--primary) rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
            aria-label="LinkedIn"
          >
            <img src="/linkedin.png" alt="LinkedIn" className="w-5 h-5 object-contain" />
          </a>

          <a 
            href="https://github.com/LNovoaChavez" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 hover:w-16 bg-(--primary) rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
            aria-label="GitHub"
          >
            <img src="/github.png" alt="GitHub" className="w-5 h-5 object-contain" />
          </a>

          <a 
            href="/CV_Luz_Novoa.pdf" 
            download="CV_Luz_Novoa.pdf"
            className="w-12 h-12 hover:w-16 bg-(--primary) rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
            aria-label="Descargar CV"
          >
            <img src="/cv.png" alt="CV" className="w-5 h-5 object-contain" />
          </a>
        </div>

      </div>
    </section>
  );
}
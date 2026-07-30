'use client';

export default function Resumen() {
  return (
    <section id="resumen" className="py-20 flex justify-center px-5">
      {/* Contenedor tipo tarjeta limpia */}
      <div className=" max-w-3xl w-full p-10 md:p-16  shadow-[0_6px_20px_rgba(2,6,23,0.06)] text-center border">
        
        {/* Título */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
          Currículum
        </h2>
        
        <p className="text-white/75 text-[15px] md:text-[16px] mb-8 leading-relaxed">
          Haz clic en el botón de abajo para descargar la versión más reciente de mi currículum. <br className="hidden md:block" />
          Detalles adicionales en mi perfil de{' '}
          <a 
            href="https://www.linkedin.com/in/luz-novoa-ch%C3%A1vez-442a75317/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-(--primary) font-bold hover:underline"
          >
            LinkedIn
          </a>.
        </p>
        
        <a 
          href="/CV_Luz_Novoa.pdf" 
          download="CV_Luz_Novoa.pdf"
          className="inline-block px-8 py-3 bg-(--primary) text-(--bg-dark) font-bold rounded hover:opacity-80 transition-all duration-300"
        >
          Descargar CV
        </a>

      </div>
    </section>
  );
}
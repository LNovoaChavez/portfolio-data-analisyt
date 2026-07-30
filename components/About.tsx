'use client';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-5 max-w-5xl">
        
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start mb-20">
          
          <div className="flex-none w-full max-w-[280px] mx-auto md:mx-0">
            <img 
              src="/perfil.png" 
              alt="Luz Novoa Chavez" 
              className="w-full h-auto object-cover rounded shadow-lg"
            />
          </div>

          <div className="flex-1 text-gray-800 text-[16px] leading-relaxed">
            <p className="mb-6 font-medium text-lg">
              Hola, soy Luz.
            </p>
            <p className="mb-6">
              Soy una profesional que combina el rigor del análisis económico con el poder de los datos y la tecnología. Me especializo en extraer conclusiones de valor para la toma de decisiones estratégicas.
            </p>
            <p className="mb-6">
              A lo largo de mi carrera, he desarrollado una fuerte capacidad para no solo interpretar grandes volúmenes de datos, sino también para construir las herramientas que los procesan y visualizan de manera eficiente.
            </p>
            <p>
              Actualmente sigo perfeccionando mis habilidades técnicas para ofrecer soluciones integrales, desde la estructuración de bases de datos hasta la creación de interfaces interactivas.
            </p>
          </div>
        </div>


        <div className="w-full">
          <div className="relative flex justify-between items-center w-full max-w-4xl mx-auto mt-10">
            
            <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-300 -translate-y-1/2 z-0"></div>
            
            {/* Punto 1 */}
            <div className="relative z-10 flex flex-col items-center w-1/3 text-center px-1">
              <span className="text-sm md:text-base font-semibold text-gray-800 mb-4 h-12 flex items-end justify-center">
                Lic. en Economía
              </span>
              {/* El circulito amarillo */}
              <div className="w-5 h-5 bg-(--primary) rounded-full mb-4 border-2 border-white shadow-sm"></div>
              <span className="text-xs md:text-sm text-gray-500 italic">
                UNC
              </span>
            </div>

            {/* Punto 2 */}
            <div className="relative z-10 flex flex-col items-center w-1/3 text-center px-1">
              <span className="text-sm md:text-base font-semibold text-gray-800 mb-4 h-12 flex items-end justify-center">
                Analista de Datos
              </span>
              <div className="w-5 h-5 bg-(--primary) rounded-full mb-4 border-2 border-white shadow-sm"></div>
              <span className="text-xs md:text-sm text-gray-500 italic">
                UNC
              </span>
            </div>

            {/* Punto 3 */}
            <div className="relative z-10 flex flex-col items-center w-1/3 text-center px-1">
              <span className="text-sm md:text-base font-semibold text-gray-800 mb-4 h-12 flex items-end justify-center">
                Desarrollador Fullstack
              </span>
              <div className="w-5 h-5 bg-(--primary) rounded-full mb-4 border-2 border-white shadow-sm"></div>
              <span className="text-xs md:text-sm text-gray-500 italic">
                Bootcamp Henry
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
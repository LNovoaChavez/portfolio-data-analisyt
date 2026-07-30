'use client';

import { projects } from "@/utils/Projects";

export default function CardsProjects() {
  const handleProjectClick = () => {
    alert('Este proyecto aún no está disponible. ¡Pronto lo estará!');
  };

  return (
    <section id="proyectos" className="py-20">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          Portfolio
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="rounded-(--radius) overflow-hidden bg-(--card-bg) shadow-[0_6px_20px_rgba(2,6,23,0.06)] flex flex-col transition-transform hover:-translate-y-1"
            >
              <div className="h-[220px] overflow-hidden">
                <img 
                  src={project.imagen} 
                  alt={project.titulo} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-[18px] flex flex-col gap-2 flex-1">
                <h3 className="text-[18px] text-(--text-dark) font-bold">
                  {project.titulo}
                </h3>
                
                <p className="text-(--text-light) text-[14px]">
                  {project.descripcion}
                </p>

                {project.tecnologias && (
                  <div className="flex flex-wrap gap-2 mt-2 mb-3">
                    {project.tecnologias.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-gray-100 text-(--text-dark) text-xs px-2 py-1 rounded font-medium border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <a 
                  href="#" 
                  className="text-(--primary) font-bold no-underline mt-auto hover:opacity-80 transition-opacity" 
                  onClick={(e) => {
                    e.preventDefault();
                    handleProjectClick();
                  }}
                >
                  Ver Proyecto
                </a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
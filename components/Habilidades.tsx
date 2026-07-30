'use client';

const skills = [
  { id: 1, name: 'Excel', icon: 'https://via.placeholder.com/100x100?text=Excel' },
  { id: 2, name: 'Power BI', icon: 'https://via.placeholder.com/100x100?text=Power+BI' },
  { id: 3, name: 'SQL', icon: 'https://via.placeholder.com/100x100?text=SQL' },
  { id: 4, name: 'Python', icon: 'https://via.placeholder.com/100x100?text=Python' },
  { id: 5, name: 'Git', icon: 'https://via.placeholder.com/100x100?text=Git' },
  { id: 6, name: 'GitHub', icon: 'https://via.placeholder.com/100x100?text=GitHub' },
];

export default function Habilidades() {
  return (
    <section id="habilidades" className="py-20 animate-on-scroll">
      <div className="container mx-auto px-5">
        
        {/* Título unificado con el resto de la página */}
        <h2 className="text-3xl font-bold text-[var(--text-dark)] text-center mb-10">
          Habilidades
        </h2>
        
        {/* Grilla responsiva automática con Tailwind */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-5">
          {skills.map((skill) => (
            <div 
              key={skill.id} 
              className="bg-(--card-bg) p-5 rounded-(--radius) text-center shadow-[0_6px_20px_rgba(2,6,23,0.06)] transition-transform duration-300 hover:-translate-y-1.5 flex flex-col items-center"
            >
              <div className="flex justify-center">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-20 h-20 object-cover rounded-lg"
                />
              </div>
              <h3 className="mt-3 text-[16px] text-(--text-dark) font-medium">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
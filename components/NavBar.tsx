export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-[var(--bg-dark)] z-[1000] py-7">
      <div className="flex items-center justify-between px-5 max-w-7xl mx-auto">
        <div className="font-extrabold text-[var(--primary)] text-[1.1rem]">
          LNC
        </div>
        <ul className="list-none flex gap-6 m-0 p-0 items-center">
          <li>
            <a
              href="#inicio"
              className="text-white font-semibold text-[0.9rem] px-4 py-2 rounded-lg transition-all hover:opacity-90 hover:bg-[var(--primary)] hover:text-[var(--bg-dark)]"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white font-semibold text-[0.9rem] px-4 py-2 rounded-lg transition-all hover:opacity-90 hover:bg-[var(--primary)] hover:text-[var(--bg-dark)]"
            >
              Sobre mí
            </a>
          </li>
          <li>
            <a
              href="#proyectos"
              className="text-white font-semibold text-[0.9rem] px-4 py-2 rounded-lg transition-all hover:opacity-90 hover:bg-[var(--primary)] hover:text-[var(--bg-dark)]"
            >
              Proyectos
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

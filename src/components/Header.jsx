import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  function toggleMenu() {
    setOpen((prev) => !prev);
  }

  return (
    <header>
      <nav aria-label="Navegação principal">
        <div className="logo">iago<span>.dev</span></div>
        <ul className={`nav-links${open ? ' open' : ''}`} id="navLinks">
          <li><a href="#sobre" onClick={() => setOpen(false)}>sobre.md</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)}>skills.json</a></li>
          <li><a href="#projetos" onClick={() => setOpen(false)}>projetos/</a></li>
          <li><a href="#contato" onClick={() => setOpen(false)}>contato.sh</a></li>
        </ul>
        <button
          className="burger"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="navLinks"
          onClick={toggleMenu}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>
    </header>
  );
}
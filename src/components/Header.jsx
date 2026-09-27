import { useState } from 'react';
import './Header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="logo">Iago<span>.</span>dev</div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a></li>
          <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
          <li><a href="#projetos" onClick={() => setMenuOpen(false)}>Projetos</a></li>
          <li><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></li>
        </ul>

        <button
          className="burger"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
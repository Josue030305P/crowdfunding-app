import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  return (
    <nav className="navbar is-white" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <strong className="has-text-primary">YONDA Crowdfunding</strong>
          </Link>

          <a
            role="button"
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            onClick={() => setIsActive(!isActive)}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
          <div className="navbar-start">
            <Link className="navbar-item hover-effect" to="/popular">Proyectos Populares</Link>
            <Link className="navbar-item hover-effect" to="/projects">Lista de Proyectos</Link>
            <Link className="navbar-item hover-effect" to="/submit">Presentar Proyecto</Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <Link className="button is-primary" to="/admin">
                Admin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
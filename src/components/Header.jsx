import React from 'react';

export default function Header({ currentPage, setCurrentPage }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a
          href="#home"
          className="logo"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage('home');
          }}
        >
          <span className="logo-icon">🤖</span>
          <span className="logo-text">BugFreeRobot</span>
        </a>
        <nav className="nav-menu">
          <button
            type="button"
            className={`nav-link-btn ${currentPage === 'home' ? 'active' : ''}`}
            onClick={() => setCurrentPage('home')}
          >
            Home
          </button>
          <button
            type="button"
            className={`nav-link-btn ${currentPage === 'about' ? 'active' : ''}`}
            onClick={() => setCurrentPage('about')}
          >
            About
          </button>
          <button
            type="button"
            className={`nav-link-btn ${currentPage === 'terms' ? 'active' : ''}`}
            onClick={() => setCurrentPage('terms')}
          >
            Terms
          </button>
        </nav>
      </div>
    </header>
  );
}

import React from 'react';

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <a href="/" className="logo">
          <span className="logo-icon">🤖</span>
          <span className="logo-text">BugFreeRobot</span>
        </a>
        <nav className="nav-menu">
          <a href="#features" className="nav-link">Features</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
      </div>
    </header>
  );
}

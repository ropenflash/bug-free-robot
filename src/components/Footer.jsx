import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <p className="footer-logo">🤖 BugFreeRobot</p>
          <p className="footer-desc">Building resilient and modern web applications.</p>
        </div>
        <div className="footer-links">
          <a href="#privacy" className="footer-link">Privacy Policy</a>
          <a href="#terms" className="footer-link">Terms of Service</a>
          <a href="https://github.com/ropenflash/bug-free-robot" target="_blank" rel="noreferrer" className="footer-link">
            GitHub
          </a>
        </div>
        <div className="footer-copy">
          <p>&copy; {new Date().getFullYear()} BugFreeRobot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

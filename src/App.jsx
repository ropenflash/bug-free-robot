import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [count, setCount] = useState(0);

  return (
    <div className="app-layout">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="container main-content">
        {currentPage === 'home' ? (
          <div className="home-content">
            <h1>Simple React App</h1>
            <p>Welcome to your new React application!</p>
            <div className="card">
              <button onClick={() => setCount((c) => c + 1)}>
                Count is {count}
              </button>
            </div>
          </div>
        ) : (
          <About />
        )}
      </main>
      <Footer />
    </div>
  );
}

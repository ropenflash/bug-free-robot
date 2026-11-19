import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-layout">
      <Header />
      <main className="container main-content">
        <h1>Simple React App</h1>
        <p>Welcome to your new React application!</p>
        <div className="card">
          <button onClick={() => setCount((c) => c + 1)}>
            Count is {count}
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}

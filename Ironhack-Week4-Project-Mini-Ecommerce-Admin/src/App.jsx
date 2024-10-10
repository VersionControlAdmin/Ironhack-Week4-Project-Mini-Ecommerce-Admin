import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="main-screen">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </>
  );
}

export default App;
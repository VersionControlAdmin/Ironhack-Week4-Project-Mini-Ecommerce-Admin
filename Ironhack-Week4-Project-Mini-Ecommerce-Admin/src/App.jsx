import React from 'react';
import Dashboard from './pages/Dashboard';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import ItemDetailsPage from './pages/ItemDetailsPage';
import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import itemDataSet from './assets/products.json';
import AddItemPage from './pages/AddItemPage';

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
          <div className="main-screen">
              <Sidebar />
              <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/about" element={<AboutPage/>} />
                <Route path="/404" element={<NotFoundPage/>} />
                <Route path="/item/:itemId" element ={<ItemDetailsPage itemsData={itemDataSet}/>} />
                <Route path="*" element={<NotFoundPage/>} />
                <Route path="/additem" element={<AddItemPage/>} />
              </Routes>
          </div>
      <Footer />
  </div>
  );
}

export default App;
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './app/pages/HomePage';
import Header from './app/components/Header';
import Footer from './app/components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      
      <main>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App

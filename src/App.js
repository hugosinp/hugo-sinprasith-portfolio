import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './app/pages/HomePage';
import AHeader from './app/components/atomes/aHeader';
import AFooter from './app/components/atomes/aFooter';

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <AHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <AFooter />
      </main>
    </BrowserRouter>
  )
}

export default App

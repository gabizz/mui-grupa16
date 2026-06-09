import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Contact from './routes/Contact';
import Preturi from './routes/Preturi';
import LandingPage from './routes/LandingPage';
import DespreNoi from './routes/DespreNoi';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/despre-noi" element={<DespreNoi />} />
          <Route path="/preturi" element={<Preturi />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

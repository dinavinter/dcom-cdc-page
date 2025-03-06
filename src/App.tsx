import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import NFLPage from './pages/nfl';
import ScalePage from './pages/scale';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<NFLPage />} />
          <Route path="/scale" element={<ScalePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
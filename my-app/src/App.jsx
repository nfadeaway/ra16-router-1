import './App.css'
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage.jsx';
import DriftPage from './components/DriftPage.jsx';
import TimeAttackPage from './components/TimeAttackPage.jsx';
import ForzaPage from './components/ForzaPage.jsx';
import Menu from './components/Menu.jsx';

function App() {


  return (
    <div>
      <Menu />
      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
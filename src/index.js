import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App  from './pages/App';
import { About } from './components/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import test from "./data/test.json"

const root = ReactDOM.createRoot(document.getElementById('root'));
const user = test[0];
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App usr={test[0]}/>}/>
      <Route path="/about" element={<About user={user}/>}/>
      {/* <Route path="/admin" element={<App user={test[0]}/>}/> */}
    </Routes>
  </BrowserRouter>
);


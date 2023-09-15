import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import { About } from './components/About';
import { Art } from './components/Art';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import test from "./data/test.json"
import { Main } from './components/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
const user = test[0];
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main user={user}/>}/>
      <Route path="/about" element={<About user={user} component="about"/>}/>
      <Route path="/art" element={<Art user={user} component="art"/>}/>
      {/* <Route path="/admin" element={<App user={test[0]}/>}/> */}
    </Routes>
  </BrowserRouter>
);


import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarMain from './NavBarMain';
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import ProductionPage from "./Pages/ProductionPage";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


export default function App() {

  return (

    <BrowserRouter>



      <div id="Home"></div>

      <NavBarMain />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="produkcja" element={<ProductionPage />} />
        <Route path="kontakt" element={<ContactPage />} />
      </Routes>

    </BrowserRouter>

  );

};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);





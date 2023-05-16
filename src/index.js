import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBarMain from './NavBarMain';
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import ProductionPage from "./ProductionPage";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


export default function App() {

  return (

    <BrowserRouter>



      <div id="Home"></div>

      <NavBarMain />

      <Routes>

        <Route index element={<HomePage />} />
        <Route path="produkcja" element={<ProductionPage />} />
        <Route path="kontakt" element={<ContactPage />} />

      </Routes>


    </BrowserRouter>

  );

};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);





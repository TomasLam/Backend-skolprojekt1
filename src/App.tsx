import React, {useState} from 'react';
import './App.css';

import Home from "./Pages/Home"
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Productsview from './Pages/Productsview';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
           <Route path="/" element={<Home />}>
          </Route> 
          <Route path="/Contact" element={<Contact />}>
          </Route>
          <Route path="/Productsview" element={<Productsview />}>
          </Route> 
          </Routes>       
      </Router>
    </div>
  );
}

export default App;

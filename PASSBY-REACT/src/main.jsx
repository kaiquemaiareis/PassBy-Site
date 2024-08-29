import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/navbar/NavbarComp'
import './main.css'
import Footer from './components/footer/footer'


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Footer/>
  </React.StrictMode>
);

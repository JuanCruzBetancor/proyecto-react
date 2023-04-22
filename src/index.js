import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './components/Landing';
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import FiltrarCategoria from './components/FiltrarCategoria/FiltrarCategoria'
// import CartWidget from './components/CartWidget/CartWidget';
import { initializeApp } from "firebase/app";
import CartProvider from './Context/CartContext';
import CartElement from './components/CartWidget/CartElement'
import Footer from './components/Footer/Footer';
import SearchElements from './SearchElements';

const firebaseConfig = {
  apiKey: "AIzaSyAze-dDgjj8SPydeuADPTWIz69W9An8eTQ",
  authDomain: "betansport.firebaseapp.com",
  projectId: "betansport",
  storageBucket: "betansport.appspot.com",
  messagingSenderId: "147291332749",
  appId: "1:147291332749:web:a21b8076e16381a8fa82c4"
};

const app =initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route exact path='/' element= {<Landing />} />
      <Route exact path='/productos/:id' element={<ItemDetailContainer/> }/>
      <Route exact path='/cart' element={<CartElement />} />
      <Route exact path="/filtrado/:category" element={<FiltrarCategoria/>}/>
      <Route exact path='/search/:searchValue' element={<SearchElements/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


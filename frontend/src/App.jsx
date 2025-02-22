

import './App.css'
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Nav';
import {ProductDetails, SignupPage} from './Routes/routes.js';
import {Home, LoginPage} from "./Routes/routes.js";
import {CreateProduct,MyProducts,Cart,} from "./Routes/routes.js";

const App=()=> {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>


        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/product' element={<CreateProduct/>}/>
        <Route path='/product/:id' element={<CreateProduct/>}/>
        <Route path='/myproducts' element={<MyProducts/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
    </Routes>
    </BrowserRouter>
  )
}
export default App

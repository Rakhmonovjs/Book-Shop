import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';
import ProductDetal from '../pages/ProductDetal';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const Routers = () => {
    return <Routes>
        <Route path='/' element={<Navigate to='home'/>} /> 
        <Route path='home' element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='shop/:id' element={<ProductDetal/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<Signup/>}/>
        {/* <Route path='' element={<Home/>}/> */}
    </Routes>
    
}

export default Routers
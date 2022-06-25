import './style/App.css';
import React from 'react'
import {useState} from 'react'
// import Home from './component/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from './component/Card';
import Shirt from './component/SubheaderOption/Shirt'
import Pant from './component/SubheaderOption/Pant'
import Header from './component/Header';
import Menu from './component/Menu';
import Footer from './component/Footer';
import Cart from './component/cartpage/Cart'
import Login from './component/Login';
import Signin from './component/Signin';
export default function App() {
  let [inputState, setInputState] = useState('sample');
  // console.log(inputState)
  // step :1 => for add to cart
  const [cart, setCart] = useState([]); 
  // we are making this state here so that we can use it on any of the other child component

  // function add to cart
  // step :2 => making logic for add to cart 
  function addToCart(product) {
    // console.log("clicked on cart",product);
  
   
    // now using Find method to check whether the product exit in cart or not.
    const productinCart = cart.find((ele) => ele.id === product.id);
    // for empty cart array this find method will not work.

    if (productinCart) {
      if(productinCart.quantity<productinCart.totalquantity){
        // if product exists in cart we map the product and set porduct in cart quatity to increment and otherwise just add new item.
        setCart(cart.map((ele) => ele.id === product.id ? { ...productinCart, quantity: productinCart.quantity + 1 } : ele));
        
      }
    }
    else {
      // spread opertor
      
      // [...cart]
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }
  function deleteToCart(product){
    const productinCarttoDelete = cart.find((ele)=> ele.id=== product.id);
    console.log(productinCarttoDelete);
    if(productinCarttoDelete.quantity===1){
    setCart(cart => cart.filter(ele => {return ele.id !== productinCarttoDelete.id}))
    }else{
      setCart(cart.map((ele)=> ele.id === product.id ? { ...productinCarttoDelete, quantity: productinCarttoDelete.quantity-1}: ele ))
    }
  }
  function removeCart(product) {
    setCart(cart.filter(ele=>ele.id!=product.id))
  }
  return (
    <>
    <BrowserRouter>
    <Header setInputState={{setInputState,cart}}/>
    <Menu/>
    <Footer/>
{/* so that header and menu are constant on each page */}
    <Routes>
      <Route path="/" element={<Card inputState={{inputState,addToCart}}/>}/>
      <Route path="/card" element={<Card/>}/>
     <Route path="/cartpage" element={<Cart  cart={{cart,addToCart,deleteToCart,removeCart}}/>}/> 
      <Route path="/shirts" element={<Shirt addToCart={addToCart}/>}/>
      <Route path="/pants" element={<Pant addToCart={addToCart}/>}/>
      <Route path ="/login" element={<Login/>}/>
      <Route path ="/signin" element={<Signin/>}/>
    </Routes>
  </BrowserRouter>
  </>
  )
}




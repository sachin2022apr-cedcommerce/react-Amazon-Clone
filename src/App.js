import { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Cart from './Components/Cart';
import PayNow from './Components/PayNow';

export default function App() {

  // loggedIn user Array
  const [loginUser, setLoginUser] = useState([]);


  // user Array
  const [userArr, setUserArr] = useState([
    { username: "Sachin", email: "Sachin@1", password: "1", mobile: 919191 },
    { username: "Satyam", email: "Satyam@1", password: "1", mobile: 919191 }
  ]);

  // cart array
  const [productCart, setProductCart] = useState([]);

  // products array
  const [products, setProducts] = useState([

    { id: 2010, rating: 5, category: "T-Shirts", name: 'Olive green T-Shirt', image: 'images/t1.png', price: 359 },
    { id: 2011, rating: 4, category: "T-Shirts", name: 'Casual grey T-shirt', image: 'images/t2.png', price: 499 },
    { id: 2012, rating: 4, category: "T-Shirts", name: 'Casual Daily Wear T-shirt', image: 'images/t3.png', price: 599 },
    { id: 2016, rating: 4, category: "Shirts", name: 'Formal office Look', image: 'images/s1.png', price: 899 },
    { id: 2017, rating: 3, category: "Shirts", name: 'Elegant Party Formal', image: 'images/s2.png', price: 899 },
    { id: 2018, rating: 5, category: "Shirts", name: 'Vertical Striped Shirt', image: 'images/s3.png', price: 999 },

    { id: 2008, rating: 4, category: "Trousers", name: 'Blue Trousers', image: 'images/p4.png', price: 999 },
    { id: 2008, rating: 4, category: "Trousers", name: 'Blue Trousers', image: 'images/p4.png', price: 999 },
    { id: 2009, rating: 5, category: "Trousers", name: 'Indigo Checkered Blue', image: 'images/p5.png', price: 890 },

    { id: 2013, rating: 4, category: "T-Shirts", name: 'Formal office  T-shirt', image: 'images/t4.png', price: 809 },
    { id: 2014, rating: 5, category: "T-Shirts", name: 'Relaxed sea-green T-shirt', image: 'images/t5.png', price: 839 },
    { id: 2015, rating: 5, category: "T-Shirts", name: 'Plaful Color T-shirt', image: 'images/t6.png', price: 699 },

    { id: 2005, rating: 3, category: "Trousers", name: 'Carrot-Fit Grey', image: 'images/p1.png', price: 900 },
    { id: 2006, rating: 4, category: "Trousers", name: 'Houndstooth Carrot-Fit', image: 'images/p2.png', price: 899 },
    { id: 2007, rating: 5, category: "Trousers", name: 'Indigo Carrot-Fit Blue', image: 'images/p3.png', price: 899 },

    { id: 2019, rating: 5, category: "Shirts", name: 'Formal Dotted Shirt', image: 'images/s4.png', price: 890 },
    { id: 2020, rating: 5, category: "Shirts", name: 'Semi-Formal Attire', image: 'images/s5.png', price: 890 },

    { id: 2000, rating: 5, category: "Shoes", name: 'SUPERSTAR BLACK', image: 'images/2000.png', price: 191 },
    { id: 2001, rating: 3, category: "Shoes", name: 'SUPER SLEEK 3 BROWN', image: 'images/2001.png', price: 399 },
    { id: 2002, rating: 4, category: "Shoes", name: 'SUPERSTAR SHOES', image: 'images/2002.png', price: 299 },
    { id: 2003, rating: 5, category: "Shoes", name: 'SMITH PRIDE SHOES', image: 'images/2003.png', price: 699 },
    { id: 2004, rating: 3, category: "Shoes", name: 'SUPERSTAR OT TECH', image: 'images/2004.png', price: 259 },

  ]);


  return (
    <div className="App">
      <Header productCart={productCart} />
      <Routes>
        <Route path='/' element={<Home products={products}
          productCart={productCart} setProductCart={setProductCart} />} />
        <Route path='/signup' element={<SignUp userArr={userArr}
          setUserArr={setUserArr} />} />
        <Route path='/login' element={<Login userArr={userArr}
          setUserArr={setUserArr} loginUser={loginUser} setLoginUser={setLoginUser} />} />
        <Route path='/cart' element={<Cart loginUser={loginUser} products={products}
          productCart={productCart} setProductCart={setProductCart} />} />
        <Route path='/paynow' element={<PayNow setProductCart={setProductCart} />} />

      </Routes>
      <Footer></Footer>
    </div>
  );
}


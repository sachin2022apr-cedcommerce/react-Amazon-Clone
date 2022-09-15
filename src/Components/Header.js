import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(props) {
    return (
        <>
            {/* header */}
            <header>
                <img src='./logo.png' alt='.logo' />
                <div className='headLeft'>
                    <h5><i class="fa-solid fa-location-dot"></i> Select your address</h5>
                </div>
                <div className='inputDiv'>
                    <input type="text" />
                    <button><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <div className='headRight'>
                    <h4><img src='./india.svg' alt='india..' /> EN <i class="fa-solid fa-angle-down"></i></h4>
                    <Link to='/' style={{ textDecoration: "none" }}><h3>Home</h3></Link>

                    <Link to='/login' style={{ textDecoration: "none" }}><h3>Login</h3></Link>

                    <h3> <Link to='/cart' style={{ textDecoration: "none" }}><img src='./cart.png' alt='' />  <p>
                        {props.productCart.length}</p></Link></h3>


                </div>
            </header>
            {/* category */}
            <div className='category'>
                <h2>All</h2>
                <h2>Sell</h2>
                <h2>Best Sellers</h2>
                <h2>Mobiles</h2>
                <h2>Today's Deals</h2>
                <h2>Books</h2>
                <h2>Electronics</h2>
            </div>
        </>
    )
}

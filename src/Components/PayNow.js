import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function PayNow(props) {
    // getting total price
    var getPrice = useLocation();
    var total = getPrice.state.totalPrice;

    // home navigation
    var home = useNavigate();
    var backToHome = () => {
        home("/")
    }
    // buy now
    var buyNow = () => {
        total = 0;
        alert("Order Successfull");
        props.setProductCart([]);
        home("/")
    }

    return (
        <div className='buyNowDiv'>
            <h2>Total Price: {total} </h2>
            <button style={{ background: "#ffd814" }} onClick={buyNow}>Buy Now</button>
            <br />
            <button style={{ background: "#ffa41c" }} onClick={backToHome}>Continue Shopping</button>
        </div>
    )
}

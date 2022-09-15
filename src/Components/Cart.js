import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Cart(props) {

  var goToCheckOut = useNavigate();
  //total price for calculating total price of the cart
  let totalPrice = 0;

  // delete individual products
  let deleteProduct = (itemIndex) => {
    let tempcart = [];
    if (window.confirm('Remove Product from cart')) {
      props.productCart.map((item, index) => {
        if (item.id === itemIndex) {
          tempcart = props.productCart;
          tempcart.splice(index, 1);
          console.log(props.productCart);
        }
        props.setProductCart([...tempcart])
      })
    }
  }

  // function for decreasing products
  let decreaseProduct = (itemIndex) => {
    props.productCart.map((item, index) => {
      if (item.id === itemIndex) {
        let tempQuantity = props.productCart
        tempQuantity[index].quantity -= 1;

        //Removing products from cart if quantity become 0
        if (tempQuantity[index].quantity === 0) {
          tempQuantity.splice(index, 1);
        }
        props.setProductCart([...tempQuantity])
      }
    })

  }

  // checkUser
  var checkUser = () => {
    if (props.loginUser.length > 0)
      goToCheckOut("/paynow", { state: { totalPrice: totalPrice } });
    else
      goToCheckOut("/login")
  }
  // function for increasing products
  let increaseProduct = (itemIndex) => {
    props.productCart.map((item, index) => {
      if (item.id === itemIndex) {
        let tempQuantity = props.productCart
        tempQuantity[index].quantity += 1;
        props.setProductCart([...tempQuantity])
      }
    })
  }


  return (
    <div className='cart'>
      <div className='cart-left'>
        <div className='cart-head'>
          <h1>Shopping Cart</h1>
          <p>Price</p>
        </div>
        <hr className='hrCart' />
        <div className='cartProducts'>
          {props.productCart.map((item, index) => {
            return <div className='product'>
              <img src={item.image} alt='img' />
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                <h3>{item.name}</h3>
                <div style={{ display: "flex", gap: "8px" }} >
                  <div className='Change-Quantity'>
                    <span >
                      <button className='minus' onClick={() => decreaseProduct(item.id)}><i class="fa-solid fa-minus"></i></button>
                      <h4>{item.quantity}</h4>
                      <button className='plus' onClick={() => increaseProduct(item.id)}><i class="fa-solid fa-plus"></i></button>
                    </span>
                  </div>
                  <button className='delete' onClick={() => deleteProduct(item.id)}>delete</button>
                </div>
              </div>

              <h3>₹{item.price}</h3>
              <p style={{ display: "none" }}>{totalPrice += item.quantity * item.price}</p>
            </div>
          })}

        </div>
      </div>

      <div className='checkoutDiv'>
        <h3>Subtotal ({props.productCart.length}):   ₹{totalPrice}</h3>
        <button className="checkoutButton" onClick={() => checkUser()}>Proceed to Buy</button>
      </div>
    </div>
  )
}

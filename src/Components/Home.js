import React from 'react'

export default function Home(props) {

  // sample books scroll
  const scrollrighttravel = () => {
    document.getElementById("scroll-travel").scrollLeft += 200;
    document.getElementById("scroll-travel").style.scrollBehavior = "smooth";
  }
  const scrolllefttravel = () => {
    document.getElementById("scroll-travel").scrollLeft -= 200;
    document.getElementById("scroll-travel").style.scrollBehavior = "smooth";
  }

  // printStar
  var printStar = (rate) => {
    var temp1, temp2;
    temp1 = Array(rate).fill(0).map((item) => {
      return <i class="fa-solid fa-star"></i>
    })
    temp2 = Array(5 - rate).fill(0).map((item) => {
      return <i class="fa-regular fa-star"></i>
    })
    return <>{temp1}{temp2}</>;
  }

  // add to cart
  var addToCart = (cartItem) => {
    props.products.map((item, index) => {
      // flag for changing quantity
      var quantityFlag = 0;

      // product already exist in cart array
      if (item.id === cartItem.id) {
        quantityFlag = 0;
        props.productCart.map((item, index) => {
          if (item.id === cartItem.id) {
            quantityFlag = 1;
            let t = props.productCart;
            t[index].quantity += 1;
            props.setProductCart([...t])
          }
        })
        // product does not exist in cart array push in cart array
        if (quantityFlag === 0) {
          props.setProductCart([
            ...props.productCart, {
              id: item.id,
              name: item.name,
              image: item.image,
              price: item.price,
              category: item.category,
              quantity: 1
            }
          ])
        }
      }
    })
  }
  return (
    <div className='homeDiv'>
      <div className='cimg'>
        <img src='./c.jpg' alt='' />
      </div>
      {/* sample products */}

      <h3 className='categoryHeading'>Featured in Casual</h3>
      <div className='product-sample'>
        <button onClick={scrolllefttravel}><i class="fa-solid fa-chevron-left"></i></button>
        <div className='mainSample'>
          <div className='all-product' id='scroll-travel'>
            {props.products.map((item, index) => {
              return <>{(item.category === "Trousers" || item.category === "Shirts") ?
                <div className='one-product'>
                  <img src={item.image} alt='..' />
                </div> : <></>
              }</>

            })
            }
          </div>
        </div>
        <button onClick={scrollrighttravel}><i class="fa-solid fa-chevron-right"></i></button>
      </div>
      <h3 className='categoryHeading'>Products</h3>
      <div className='ProductList'>
        {props.products.map((item, index) => {
          return <div className='oneProduct'>
            <img src={item.image} alt={item.name} />
            <div className='products-details'>
              <h3>{item.name}</h3>
              <h4>({item.category})</h4>
              <p>{printStar(item.rating)}</p>
              <h2>₹{item.price}</h2>
              <button onClick={() => addToCart(item)}>Add to cart</button>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

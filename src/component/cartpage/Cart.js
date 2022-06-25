import React from 'react'
// import "../card.css";
import './cart.css'


export default function Cart({ cart }) {
 
  return (
    <>
      <div className='parent'>
      {
        cart.cart.length ===0 ?
          <div className='cart-conatiner'>
          No product in this cart
          </div>
          :
          cart.cart.map((ele) => {
            return (
              <div className='cart-conatiner'>
              <div className='cart-image'>
              <img src={ele.image} alt=''/>
              </div>
              <div className='product-details'>
              <div>Price</div>
              <div>{ele.price}</div>
              </div>
              <div className='Quantity'>
              <div>Quantity</div>
              <button onClick={()=>cart.addToCart(ele)}>+</button>
              <div>pcs{ele.quantity}</div>
              <button onClick={()=>cart.deleteToCart(ele)}>-</button>
              </div>
              <div className='delete'>
              <button onClick={()=>cart.removeCart(ele)}>delete from cart</button>
              </div>
              <div className='total'>
              <div>Total 
              price</div>
              <div>{ele.price*ele.quantity}</div>
              </div>
              </div>
            )
          })
      }
      </div>
    </>
  )
}


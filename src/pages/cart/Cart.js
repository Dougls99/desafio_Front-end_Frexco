import React from 'react'
import { Link } from 'react-router-dom'

function Cart({ cart, setCart, handleChange}) {
  const handleRemove = id => {
    const arr = cart.filter((fruits) => fruits.id !== id);
    setCart(arr);
  }
  
  console.log(cart)
  return (
    <article>
        <div>
          <button onClick={() => handleChange()}>+</button>
          <button></button>
          <button onClick={() => handleChange()}>-</button>
        </div>
        <div>
          <button onClick={() => handleRemove()}>Remove</button>
        </div>
  
  </article>
  )
}

export default Cart

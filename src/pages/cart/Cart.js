import React from 'react'

function Cart({ cart }) {
  const compras = localStorage.getItem('compra')

  console.log(cart)
  return (
    <>
      <div>
        <h1>Voltar</h1>
      </div>
      <div>
        <button>+</button>
        <h1>{compras}</h1>
        <button>-</button>
      </div>
      <div>
        <button>Remove</button>
      </div>
    </>
  )
}

export default Cart

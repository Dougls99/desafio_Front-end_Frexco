import React from 'react'
import { Link } from "react-router-dom";
import Nav from '../../components/Nav';
import styles from './Cart.css'

function Cart({ cart }) {
  const compras = JSON.parse(localStorage.getItem('compra') || '[]')



  console.log(cart)
  return (
    <>
        <Nav /> 
      {compras.map(prod => ( 
      <div className='carrinho'>
        <h1>{prod}</h1>
        <input type="Number"></input>
      </div>
        ))}
      <div>
        <button>LIMPAR</button>
      </div>
    </>
  )
}

export default Cart

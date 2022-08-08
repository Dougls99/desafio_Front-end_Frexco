import React from 'react'
import './styles.css'

function Product({ fruit, handleClick }) {
    
  return (
    <div className="fruta">
      <h3>{fruit.name}</h3>
      <button onClick={() => handleClick(fruit.name)}>Add cart</button>
    </div>
  )
}

export default Product

import React from 'react'
import './styles.css'

function Product({ fruit, handleClick }) {
    
  return (
    <div className="fruta">
      <h3>{fruit.name}</h3>
      <h3>Carboidratos: {fruit.nutritions.carbohydrates}</h3>
      <h3>Proteinas: {fruit.nutritions.protein}</h3>
      <h3>Gordura: {fruit.nutritions.fat}</h3>
      <h3>Calorias: {fruit.nutritions.calories}</h3>
      <h3>Açúcar: {fruit.nutritions.sugar}</h3>
      <button onClick={() => handleClick(fruit.name)}>Add cart</button>
    </div>
  )
}

export default Product

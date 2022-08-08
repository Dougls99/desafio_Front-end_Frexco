import React, { useEffect, useState } from 'react'
import Product from '../../components/Product'
import styles from '../home/Home.css'
import { fruitsApi } from '../../service'
import Nav from '../../components/Nav'
import Cart from '../cart/Cart'


function Home() {
  const [fruits, setFruits] = useState([])
  const [cart, setCart] = useState([])
 

  const handleClick = (fruits) => {
    if(cart.indexOf(fruits) !== -1) return;
    setCart([...cart, fruits])
  };

  const handleChange = (fruits, d) => {
    const ind = cart.indexOf(fruits);
    const arr = cart;
    arr[ind].amount += d;
  
    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  const handleFetch = () => {
    fruitsApi
      .getAllFruits()
      .then(res => {
        setFruits(res.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    handleFetch()
  }, [])

  return (
    <div>
      <Nav size={cart.length} />
      <div className="produtos">
        {fruits.map(fruit => (
          <Product key={fruit.id} fruit={fruit} handleClick={handleClick} />
          ))}
          <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      </div>        
      
        
    </div>
  )
}

export default Home

import React from 'react'
import { Link } from 'react-router-dom'

function Nav({size}) {
  
  return (
    <div className="logo">
      <Link to={'/'}>
        <h1>LOGO</h1>
      </Link>
      <Link to={'/cart'}>
        <h1>{size}</h1>
      </Link>
    </div>
  )
}

export default Nav

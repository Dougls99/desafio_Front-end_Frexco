import React, { useEffect, useState } from 'react'
import styles from '../home/Home.css'
import api from '../../service/api'

function List() {


  return (
    <div>
      <div className="logo">
        <h1>LOGO</h1>
        <h1>cart</h1>
      </div>
      <div className="produtos">
          <div>
            <h3>nome:</h3>
          </div>
        <input type="number"></input>
        <button>Add cart</button>
      </div>
    </div>
  )
}

export default List


/*import React, { useEffect, useState } from 'react'
import styles from '../home/Home.css'
import api from '../../service/api'

function Home() {
  const [fruits, setFruits] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await api.get(
          'https://api.allorigins.win/raw?url=https://www.fruityvice.com/api/fruit/all'
        )
        setFruits(resp.data)
        console.log(resp.data)
      } catch {
        console.log('Algo deu errado.')
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <div className="logo">
        <h1>LOGO</h1>
        <h1>cart</h1>
      </div>
      <div className="produtos">
        {fruits.map(fruits => (
          <div>
            <h3>{fruits.name}</h3>
          </div>
        ))}

        <input type="number"></input>
        <button>Add cart</button>
      </div>
    </div>
  )
}

export default Home
*/ 
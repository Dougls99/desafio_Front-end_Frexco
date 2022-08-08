import './App.css'
import Home from './pages/home/Home'
import Cart from './pages/cart/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className="App">     
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App

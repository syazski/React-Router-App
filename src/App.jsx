import { useState } from 'react'
import './App.css'
//import Routes and Route
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Blue from './component/Blue'
import Red from './component/Red'
import Home from './component/Home'



function App() {
  const [count, setCount] = useState(0)

//main is where we create Routes
//navbar is where we utilize <Link>
  return (
    <>
      <div id="container">
        <div id="navbar">
          <NavLink to="/blue">Blue</NavLink>
          <NavLink to="/red">Red</NavLink>
          <NavLink to="/">Home</NavLink>
        </div>
        <div id="main-section">
          <Routes>
            <Route path='/Blue' element={<Blue />}></Route>
            <Route path='/Red' element={<Red />}></Route>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </div>
    </div>
    </>
  )
}

export default App

import React from 'react'
import Fetchproducts from "./Fetchproducts"
//React Router Dom
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Home"
// import Fetchproducts from './Fetchproducts'
import About from "./About"
import Notfound from "./Notfound"
import Navbar from "./Navbar"
import Register from './Register'
import Navigate from "./Navigate"
// import './App.css'

function App() {
  

  return (
    <>
      {/* <Fetchproducts /> */}
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Navigate />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      </BrowserRouter>

      {/* <Home />
      <About /> */}
    </>
  )
}

export default App

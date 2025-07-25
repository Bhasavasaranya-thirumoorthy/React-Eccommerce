// import React from 'react'
// import Fetchproducts from "./Fetchproducts"
// //React Router Dom
// import {BrowserRouter, Routes, Route} from "react-router-dom"
// import Home from "./Home"
// // import Fetchproducts from './Fetchproducts'
// import About from "./About"
// import Notfound from "./Notfound"
// import Navbar from "./Navbar"
// import Register from './Register'
// import Navigate from "./Navigate"
// // import './App.css'

// function App() {
  

//   return (
//     <>
//       {/* <Fetchproducts /> */}
//       <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/about' element={<About />} />
//         <Route path='/register' element={<Register />} />
//         <Route path='/login' element={<Navigate />} />
//         <Route path='*' element={<Notfound />} />
//       </Routes>
//       </BrowserRouter>

//       {/* <Home />
//       <About /> */}
//     </>
//   )
// }

// export default App

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // import Login from "./pages/Login";
// // import Register from "./pages/Register";
// import Fetchproducts from "./components/Fetchproducts";

// const App = () => {
//   const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

//   return (
//     <Router>
//       <Routes>
//         Show login page if not logged in
//         <Route path="/" element={<Navigate to={isLoggedIn ? "/products" : "/login"} />} /> */}

//         Login and Register always accessible
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         {  Products - protected route
//         <Route
//           path="/products"
//           element={isLoggedIn ? <Fetchproducts /> : <Navigate to="/login" />}
//         />
//       </Routes>
//     </Router>
//   );
// }; 

// export default App;

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Fetchproducts from "./components/Fetchproducts";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Fetchproducts /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!isLoggedIn ? <Login onLogin={() => setIsLoggedIn(true)} /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!isLoggedIn ? <Register /> : <Navigate to="/" />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;






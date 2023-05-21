// import './App.css';
// import React from 'react'
// import Navbar from './components/Navbar';
// import Search from './components/Search';
// import Footer from './components/Footer';
// import Register from './components/Register';
// import Login from './components/Login';
// import Home from './components/Home';
// import {Route,Routes } from "react-router-dom";
// import Products from './components/Products';
// import Contact from './components/Contact';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import Footer from './components/Footer';
import Search from './components/Search';
import './App.css';

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Search/>
//       <Routes>
//         <Route exact path="/" element={Home} />
//         <Route exact path="/products" element={Products} />
//         <Route exact path="/login" element={Login} />
//         <Route exact path="/register" element={Register} />
//         <Route exact path=" /contact" element={Contact} />
//       </Routes>
//       <Register/>
//       <Login/> 
//       <Footer/>
//     </div>
//   )
// }
// export default App;
function App() {
  return (
      <div>
        <Navbar />
        
        <Search/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;

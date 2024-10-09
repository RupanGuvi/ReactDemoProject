import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import About from './Pages/About';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path='/' element={<Home />}/>
        <Route path='/shop' element= {<Shop />}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
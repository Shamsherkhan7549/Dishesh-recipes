import React from 'react'
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Product from './components/ProductDes';
const App = () => {


  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product/:id' element={<Product/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
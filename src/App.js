import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contect from './pages/Contect'
import Protect from './pages/Protect'
import Services from './pages/Services'
import Footer from './component/Footer'

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
     <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/contect' element={<Contect/>}></Route>
    <Route path='/Project' element={<Protect/>}></Route>
    <Route path='/Services' element={<Services/>}></Route>
    
     </Routes>
      </BrowserRouter>
      <Footer />
    
    </div>
  )
}

export default App

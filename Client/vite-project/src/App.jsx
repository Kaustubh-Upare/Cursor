import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './App.css'
import Home from './Page/Home'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>

        <Route path='/Home' element={<Home />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App

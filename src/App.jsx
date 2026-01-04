import React from 'react'
import Home from './Pages/Home'
import { Routes , Route } from 'react-router'
import Register from './Pages/Register'

const App = () => {
  return (
     <Routes>
      <Route index element={<Home />} />
      <Route path="register" element={<Register />} />
     </Routes> 
  )
}

export default App
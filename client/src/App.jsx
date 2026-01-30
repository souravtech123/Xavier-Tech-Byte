import React from 'react'
import Home from './Pages/Home'
import {Routes , Route} from 'react-router'
import Register from './Pages/Register'
import Login from './Pages/Login'
import JoinXTS from './Pages/JoinXTS'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/join' element={<JoinXTS/>}/>

    </Routes>
  
    </>
  )
}

export default App

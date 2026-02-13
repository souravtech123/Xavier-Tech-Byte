import React from 'react'
import Home from './Pages/Home'
import {Routes , Route} from 'react-router'
import JoinXTS from './Pages/JoinXTS'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/join' element={<JoinXTS/>}/>

    </Routes>
  
    </>
  )
}

export default App

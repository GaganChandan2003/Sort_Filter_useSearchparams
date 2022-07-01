import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Books from './Books'
import Editbook from './Editbook'
import Singlebook from './Singlebook'
import Login from './Login'
import RequiredAuth from '../hoc/RequiredAuth'

const MainRoutes = () => {
  return (
    
    <Routes>
        <Route path='/' element={<Books/>}></Route>
        <Route path='/books/:id' element={<Singlebook/>}></Route>
        <Route path='/books/:id/edit' element={<RequiredAuth><Editbook/></RequiredAuth>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='*' element={<h2>Page not found</h2>}/>
    </Routes>
  )
}

export default MainRoutes
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/AppLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout/>} >
      <Route index element={<Home />} />
      <Route path='about' element={<About/>} />
      <Route path='services' element={<Services/>} />
      <Route path='contact' element={<Contact/>} />
      </Route>
    </Routes>
  )
}

export default App
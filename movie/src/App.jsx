import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'

export function App() {

  return (
    <div className="App">
      <Navbar />
      <h2>Movie</h2>
      <Outlet />
    </div>
  )
}



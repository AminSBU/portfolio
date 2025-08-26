import React from "react";
import { useState } from 'react'
import './App.css'
import NavBar from './NavBar.jsx'
import { Routes, Route } from "react-router-dom";
import Home from './Home.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />

      <main style={{ padding: "1rem", maxWidth: 1100, margin: "0 auto" }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />

          <Route path="*" element={<h2>Page not found</h2>} />
        </Routes>
      </main>
    </>
  )
}
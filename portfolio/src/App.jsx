import { useState } from 'react'
import './App.css'
import NavBar from './NavBar.jsx'
import Intro from './intro.jsx'
import {
  Routes,
  Route
} from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />

      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </main>
    </>
  )
}

export default App
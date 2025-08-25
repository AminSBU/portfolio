import { useState } from 'react'
import './App.css'
import Intro from './intro.jsx'
import {
  Routes,
  Route
} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Intro />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </Router>
  )
}

export default App
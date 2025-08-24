import { useState } from 'react'
import './App.css'
import Intro from './intro.jsx'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Intro />}></Route>
        <Route path='/' element={<contact />}></Route>
      </Routes>
    </Router>
  )
}

export default App
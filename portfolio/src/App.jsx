import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from './intro.jsx'
import Menu from './Menu.jsx'

import {
  BrowserRouter,
  Router,
  Switch
} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Router path="/">
            <Menu />
            <Intro />
          </Router>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App

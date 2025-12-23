import { useState,} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'
import Home from './Home'
import AboutUs from './AboutUs'
import Todos from './Todos'
import NotFound from './NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} ></Route>
        <Route path="/aboutus" element={<AboutUs />} ></Route>
        <Route path="/todos" element={<Todos />} ></Route>
        <Route path="*" element={<NotFound />} ></Route>
      </Routes>
    </>
  )
}

export default App

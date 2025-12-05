import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Popup from './components/Popup'
import './App.css'

function App() {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <>
      <Navbar onOpenPopup={() => setShowPopup(true)} />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
      </Routes>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </>
  )
}

export default App

import React from 'react'
import LandingPage from './page/LandingPage'
import Register from './components/Register'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChatPage from './page/ChatPage'

const App = () => {
  return <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/chat' element={<ChatPage />} />
        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App
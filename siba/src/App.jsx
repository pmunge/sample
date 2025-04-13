import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import Login from './components/Login'
import Dashboard from './pages/Dashboard'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
    
  )
}

export default App

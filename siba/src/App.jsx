import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React, { useState } from 'react'
import Login from './components/Login'
import Dashboard from './pages/Dashboard'
import Register from './components/register'
import Home from './pages/Home';
import Cards from './components/Cards';


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/dashboard"
        element={
          loggedIn ? <Dashboard setLoggedIn={setLoggedIn} /> : <Login setLoggedIn={setLoggedIn} />
         }
      >
        <Route index element={<Home />} />
        <Route path="cards" element={<Cards />} />
      </Route>

      </Routes>
    </Router>
    
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Pages/Login'
import { Route, BrowserRouter as Router ,Routes} from 'react-router-dom'
import Signup from './Pages/SignUp'
import Profile from './Pages/Profile'
import Cookies from 'js-cookie'
import PrivateRoute from './PrivateRoute/PrivateRoutes'
function App() {
let token = Cookies.get('token')

  return (

    <Router>
      <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
      </Routes>
  
    </Router>
      
 
  )
}

export default App

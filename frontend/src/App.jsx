import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Signin from './pages/Signin.jsx'
import SigninSignup from './pages/SigninSignup.jsx'
import User from './pages/User.jsx'
import Admin from './pages/Admin.jsx'
import Moderator from './pages/Moderator.jsx'
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/signin-signup" element={<SigninSignup/>} />
          <Route path="/user" element={<User/>} />
          <Route path="/moderator" element={<Moderator/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path='*' element={<h1>NO PAGE</h1>} />
        </Routes>
      </BrowserRouter>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="home" element={<Home />} />
            <Route path="user-login" element={<SignInAndSignUp />} />
            <Route path="moderator-login" element={<SignIn />} />
            <Route path="admin-login" element={<SignIn />} />
            <Route path="*" element={<h1>No Page</h1>} />
          </Route>
          <Route path="*" element={<h1>No Page</h1>} />
        </Routes>
      </BrowserRouter> */}
    </>
  )
}

export default App

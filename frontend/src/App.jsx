import { useState } from 'react'
import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import SignIn from './pages/signin/SignIn.jsx'
import SignUp from './pages/signup/SignUp';
import Home from './pages/home/Home.jsx';
import { Toaster } from './../node_modules/react-hot-toast/src/components/toaster';
import { useAuthContext } from './context/AuthContext.jsx';

function App() {
  const {authUser, setAuthUser} = useAuthContext()
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <Routes>
        <Route path='/signin' element={authUser ? <Navigate to="/"/> :<SignIn />} />
        <Route path="/signup" element={authUser ? <Navigate to="/"/> : <SignUp/>} />
        <Route path="/" element={ authUser ? <Home /> :  <Navigate to={"/signin"}/>} />
      </Routes>
      <Toaster />
    </div>
  )
}

export default App

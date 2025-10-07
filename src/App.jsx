import { use, useEffect, useState } from 'react'
import "./App.css"
import axios from 'axios';
import Dashboard from './components/dashboard/Dashboard';
import Login from "./components/Login/Login";
import { BrowserRouter , Routes , Route } from 'react-router';

function App() {



   return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App


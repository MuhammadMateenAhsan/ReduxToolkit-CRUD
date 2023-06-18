import React from 'react'
import CreateEmployee from './components/CreateEmployee'
import "./App.css";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ReadEmployees from './components/ReadEmployees';
import UpdateExtivity from './components/UpdateExtivity';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='UpdateEmployee/:id' element={<UpdateExtivity/>}/>
        <Route path='/' element={<ReadEmployees/>}/>
        <Route path='addEmployee' element={<CreateEmployee/>}/>
      </Routes>
    </Router>
    <ToastContainer theme="dark"/>
    </>
  )
}

export default App
import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
           <Routes>
            <Route exact path="/" element={<Home />} />
            <Route  path="About" element={<About />} />
            <Route  path="contact" element={<Contact/>} />
            <Route path="/users/add" element={<AddUser/>}/>
            <Route path="/users/edit/:id" element={<EditUser/>}/>
          
            <Route element={NotFound}/>
          </Routes>
      </div>
    </Router>

  );
}
export default App;

// import logo from './logo.svg';
import './App.css';

import React from "react";
// import Navbar from "./components/Navbar";
import {
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Blogs from "./components/pages/Blogs";
import MyNavbar from './components/Navbar/Navigation';

function App() {
  return (
    <div className="App">

      <MyNavbar />
      
      <Router>
        <Routes>
            <Route exact path="/workstudy" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;

import './App.css';
import React from "react";
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blogs from "./components/pages/Blogs";
import Team from "./components/pages/Team";
import Contact from "./components/pages/Contact";
import MyNavbar from './components/Navbar/Navigation';
import ArticleOne from "./components/pages/ArticleOne";

function App() {
  return (
    <div className="App">
      
      <Router>
      <MyNavbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/article_one" element={<ArticleOne />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

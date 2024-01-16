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
import Research from "./components/pages/Research";
import Policy from "./components/pages/Policy";
import Education from "./components/pages/Education";
import News from "./components/pages/News";
import Event from "./components/pages/Event";
import Partners from "./components/pages/Partners";
import ArticleOne from "./components/pages/ArticleOne";
import Navbar from "./components/Navigation_old";

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/education" element={<Education />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/news" element={<News />} />
            <Route path="/event" element={<Event />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/article_one" element={<ArticleOne />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

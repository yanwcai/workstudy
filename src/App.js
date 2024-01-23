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
import FeatureBlogPage from "./components/pages/Blogs/FeatureBlogPage";
import BlogOne from "./components/pages/Blogs/BlogOnePage";
import BlogTwo from "./components/pages/Blogs/BlogTwoPage";
import BlogThree from "./components/pages/Blogs/BlogThreePage";
import BlogFour from "./components/pages/Blogs/BlogFourPage";
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
            <Route path="/feature_blog" element={<FeatureBlogPage />} />
            <Route path="/blog_one" element={<BlogOne />} />
            <Route path="/blog_two" element={<BlogTwo />} />
            <Route path="/blog_three" element={<BlogThree />} />
            <Route path="/blog_four" element={<BlogFour />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;

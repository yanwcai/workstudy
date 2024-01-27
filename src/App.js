import './App.css';
import React from "react";
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About/About";
import Research from "./components/pages/Research/Research";
import Policy from "./components/pages/Policy/Policy";
import Education from "./components/pages/Education/Education";
import News from "./components/pages/News/News";
import Event from "./components/pages/Events/Event";
import Partners from "./components/pages/Partners";
import FeatureBlogPage from "./components/pages/Blogs/FeatureBlogPage";
import BlogOne from "./components/pages/Blogs/BlogOnePage";
import BlogTwo from "./components/pages/Blogs/BlogTwoPage";
import BlogThree from "./components/pages/Blogs/BlogThreePage";
import BlogFour from "./components/pages/Blogs/BlogFourPage";
import Navbar from "./components/Navigation";
import PeoplePage from "./components/pages/About/People";
import ValuesPage from "./components/pages/About/Values";
import FacultyPublicationsPage from "./components/pages/About/FacultyPublications";
import CorporateProgramsPage from "./components/pages/About/CorporatePrograms";
import GetInvolvedPage from "./components/pages/About/GetInvolved";



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
            <Route path="/about/people" element={<PeoplePage />} />
            <Route path="/about/values" element={<ValuesPage />} />
            <Route path="/about/faculty-publications" element={<FacultyPublicationsPage />} />
            <Route path="/about/corporate-programs" element={<CorporateProgramsPage />} />
            <Route path="/about/get-involved" element={<GetInvolvedPage />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;

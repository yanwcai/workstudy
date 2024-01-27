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
import Events from "./components/pages/Events/Events";
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
import FellowshipProgramsPage from "./components/pages/Research/FellowshipPrograms";
import GrantProgramsPage from "./components/pages/Research/GrantPrograms";
import AIIndex2023Page from './components/pages/Research/AIIndex2023';
import StudentAffinityGroupsPage from './components/pages/Research/StudentAffinityGroups';
import UpcomingEvents from "./components/pages/Events/UpcomingEvents";
import PastEvents from "./components/pages/Events/PastEvents";
import Seminars from "./components/pages/Events/Seminars";
import EducationAudiences from "./components/pages/Education/EducationAudiences";
import Courses from "./components/pages/Education/Courses";
import ExecutiveEducation from "./components/pages/Education/ExecutiveEducation";
import PolicyPublications from "./components/pages/Policy/PolicyPublications";
import NationalAIResearchResource from "./components/pages/Policy/NationalAIResearchResource";
import CongressionalBootCamponAI from "./components/pages/Policy/CongressionalBootCamponAI";
import TechEthicsPolicySummerFellowships from "./components/pages/Policy/TechEthicsPolicySummerFellowships";
import AIAuditChallenge from "./components/pages/Policy/AIAuditChallenge";
import NewsBlog from "./components/pages/News/NewsBlog";
import Announcements from "./components/pages/News/Announcements";
import MediaMentions from "./components/pages/News/MediaMentions";
import SubscribeToNewsletter from "./components/pages/News/SubscribeToNewsletter";


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
            <Route path="/events" element={<Events />} />
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
            <Route path="/research/fellowship-programs" element={<FellowshipProgramsPage />} />
            <Route path="/research/grant-programs" element={<GrantProgramsPage />} />
            <Route path="/research/ai-index-2023" element={<AIIndex2023Page />} />
            <Route path="/research/student-affinity-groups" element={<StudentAffinityGroupsPage />} />
            <Route path="/events/upcoming-events" element={<UpcomingEvents />} />
            <Route path="/events/past-events" element={<PastEvents />} />
            <Route path="/events/seminars" element={<Seminars />} />
            <Route path="/education/education-audiences" element={<EducationAudiences />} />
            <Route path="/education/courses" element={<Courses />} />
            <Route path="/education/executive-education" element={<ExecutiveEducation />} />
            <Route path="/policy/policy-publications" element={<PolicyPublications />} />
            <Route path="/policy/national-ai-research-resource" element={<NationalAIResearchResource />} />
            <Route path="/policy/congressional-boot-camp-on-ai" element={<CongressionalBootCamponAI />} />
            <Route path="/policy/tech-ethics-policy-summer-fellowships" element={<TechEthicsPolicySummerFellowships />} />
            <Route path="/policy/ai-audit-challenge" element={<AIAuditChallenge />} />
            <Route path="/news/blog" element={<NewsBlog />} />
            <Route path="/news/announcements" element={<Announcements />} />
            <Route path="/news/media-mentions" element={<MediaMentions />} />
            <Route path="/news/subscribe-to-newsletter" element={<SubscribeToNewsletter />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;

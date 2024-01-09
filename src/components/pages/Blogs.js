import React from "react";
import { ActionAreaCard } from "../ArticleCard";
import HeroSection from '../HeroSection';
import Footer from "../Footer";
import "../Footer.css";

 
const Blogs = () => {
    return (
        <>
            <HeroSection title={"Blog Page"} description={"Blog Page Description"}/>
            <ActionAreaCard />
            <Footer />
        </>
    );
};
 
export default Blogs;
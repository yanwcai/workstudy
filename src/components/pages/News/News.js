import React from "react";
import HeroSection from '../../../components/HeroSection';
import Footer from "../../../components/Footer";
import "../../Footer.css";

 
const News = () => {
    return (
        <>
            <HeroSection title={"News Page"} description={"News Page Description"}/>
            <Footer />
        </>
    );
};
 
export default News;
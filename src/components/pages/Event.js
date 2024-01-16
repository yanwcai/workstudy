import React from "react";
import HeroSection from '../HeroSection';
import Footer from "../Footer";
import "../Footer.css";

 
const Event = () => {
    return (
        <>
            <HeroSection title={"Event Page"} description={"Event Page Description"}/>
            <Footer />
        </>
    );
};
 
export default Event;
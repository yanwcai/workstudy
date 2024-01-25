import React from "react";
import HeroSection from '../../../components/HeroSection';
import Footer from "../../../components/Footer";
import "../../Footer.css";

 
const Event = () => {
    return (
        <>
            <HeroSection title={"Event Page"} description={"Event Page Description"}/>
            <Footer />
        </>
    );
};
 
export default Event;
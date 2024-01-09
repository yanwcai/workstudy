import React from "react";
import BioCard  from "../BioCard";
import HeroSection from '../HeroSection';
import Footer from "../Footer";
import "../Footer.css";

 
const Team = () => {
    return (
        <>
            <HeroSection title={"Team Page"} description={"Team Page Description"}/>
            <BioCard />
            <Footer />
        </>
    );
};
 
export default Team;
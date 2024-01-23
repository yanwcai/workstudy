import React from "react";
import { ActionAreaCard } from "../BlogCard";
import HeroSection from '../HeroSection';
import Footer from "../Footer";
import "../Footer.css";

 
const Research = () => {
    return (
        <>
            <HeroSection title={"Research Page"} description={"Research Page Description"}/>
            <ActionAreaCard />
            <Footer />
        </>
    );
};
 
export default Research;
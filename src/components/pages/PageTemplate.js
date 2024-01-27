import React from "react";
import "../../App.css";
import AboutPageSidebar from "../sidebars/AboutPageSidebar";
import Footer from "../Footer";
import "../Footer.css";
import "./PageTemplate.css";

const AboutPageTemplate = ({ title, imageURL, paragraphOne }) => {
    return ( 
        <>
            <div className="page-container">
                <div className="title-section">
                    <h1>{ title }</h1>
                </div>

                <div className="content-container">
                    <div className="sidebar">
                        <AboutPageSidebar />
                    </div>
                    <div className="page-content">
                        <div className="page-content-img">
                            <img src={ imageURL } alt="page-img" />
                        </div>
                        <div className="page-content-text">
                            <p>{ paragraphOne }</p>
                        </div>
                        
                    </div>
                </div>


            </div>
            
            <Footer />
        </>
    );
};

export { AboutPageTemplate };
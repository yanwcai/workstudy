import React from "react";
import { AboutPageTemplate } from "../PageTemplate";
import { facultyPublicationsPageContent } from "./PageData";

const FacultyPublications = () => {
    return (
        <>
            <AboutPageTemplate title={ facultyPublicationsPageContent.title } imageURL={ facultyPublicationsPageContent.imageURL } paragraphOne={ facultyPublicationsPageContent.paragraphOne }/>
        </>
    );
};
 
export default FacultyPublications;
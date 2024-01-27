import React from "react";
import { EducationPageTemplate } from "../PageTemplate";
import { coursesPageContent } from "./EducationPageData";

const Courses = () => {
    return (
        <>
            <EducationPageTemplate title={ coursesPageContent.title } imageURL={ coursesPageContent.imageURL } paragraphOne={ coursesPageContent.paragraphOne }/>
        </>
    );
};
 
export default Courses;
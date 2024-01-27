import React from "react";
import { EducationPageTemplate } from "../PageTemplate";
import { executiveEducationPageContent } from "./EducationPageData";

const ExecutiveEducation = () => {
    return (
        <>
            <EducationPageTemplate title={ executiveEducationPageContent.title } imageURL={ executiveEducationPageContent.imageURL } paragraphOne={ executiveEducationPageContent.paragraphOne }/>
        </>
    );
};
 
export default ExecutiveEducation;
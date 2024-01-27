import React from "react";
import { EducationPageTemplate } from "../PageTemplate";
import { educationAudiencePageContent } from "./EducationPageData";

const EducationAudience = () => {
    return (
        <>
            <EducationPageTemplate title={ educationAudiencePageContent.title } imageURL={ educationAudiencePageContent.imageURL } paragraphOne={ educationAudiencePageContent.paragraphOne }/>
        </>
    );
};
 
export default EducationAudience;
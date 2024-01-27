import React from "react";
import { AboutPageTemplate } from "../PageTemplate";
import { corporateProgramsPageContent } from "./PageData";

const CorporatePrograms = () => {
    return (
        <>
            <AboutPageTemplate title={ corporateProgramsPageContent.title } imageURL={ corporateProgramsPageContent.imageURL } paragraphOne={ corporateProgramsPageContent.paragraphOne }/>
        </>
    );
};
 
export default CorporatePrograms;
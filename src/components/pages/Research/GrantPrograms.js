import React from "react";
import { ResearchPageTemplate } from "../PageTemplate";
import { grantProgramsPageContent } from "./ResearchPageData";

const GrantPrograms = () => {
    return (
        <>
            <ResearchPageTemplate title={ grantProgramsPageContent.title } imageURL={ grantProgramsPageContent.imageURL } paragraphOne={ grantProgramsPageContent.paragraphOne }/>
        </>
    );
};
 
export default GrantPrograms;
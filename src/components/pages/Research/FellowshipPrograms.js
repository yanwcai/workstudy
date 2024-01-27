import React from "react";
import { ResearchPageTemplate } from "../PageTemplate";
import { fellowshipProgramsPageContent } from "./ResearchPageData";

const FellowshipPrograms = () => {
    return (
        <>
            <ResearchPageTemplate title={ fellowshipProgramsPageContent.title } imageURL={ fellowshipProgramsPageContent.imageURL } paragraphOne={ fellowshipProgramsPageContent.paragraphOne }/>
        </>
    );
};
 
export default FellowshipPrograms;
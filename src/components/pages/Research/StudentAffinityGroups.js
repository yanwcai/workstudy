import React from "react";
import { ResearchPageTemplate } from "../PageTemplate";
import { studentAffinityGroupsPageContent } from "./ResearchPageData";

const StudentAffinityGroups = () => {
    return (
        <>
            <ResearchPageTemplate title={ studentAffinityGroupsPageContent.title } imageURL={ studentAffinityGroupsPageContent.imageURL } paragraphOne={ studentAffinityGroupsPageContent.paragraphOne }/>
        </>
    );
};
 
export default StudentAffinityGroups;
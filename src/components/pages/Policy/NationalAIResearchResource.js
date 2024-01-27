import React from "react";
import { PolicyPageTemplate } from "../PageTemplate";
import { nationalAIResearchResourcePageContent } from "./PolicyPageData";

const NationalAIResearchResource = () => {
    return (
        <>
            <PolicyPageTemplate title={ nationalAIResearchResourcePageContent.title } imageURL={ nationalAIResearchResourcePageContent.imageURL } paragraphOne={ nationalAIResearchResourcePageContent.paragraphOne }/>
        </>
    );
};
 
export default NationalAIResearchResource;
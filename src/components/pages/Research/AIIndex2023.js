import React from "react";
import { ResearchPageTemplate } from "../PageTemplate";
import { aIIndex2023PageContent } from "./ResearchPageData";

const AIIndex2023 = () => {
    return (
        <>
            <ResearchPageTemplate title={ aIIndex2023PageContent.title } imageURL={ aIIndex2023PageContent.imageURL } paragraphOne={ aIIndex2023PageContent.paragraphOne }/>
        </>
    );
};
 
export default AIIndex2023;
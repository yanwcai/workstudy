import React from "react";
import { PolicyPageTemplate } from "../PageTemplate";
import { congressionalBootCamponAIPageContent } from "./PolicyPageData";

const CongressionalBootCamponAI = () => {
    return (
        <>
            <PolicyPageTemplate title={ congressionalBootCamponAIPageContent.title } imageURL={ congressionalBootCamponAIPageContent.imageURL } paragraphOne={ congressionalBootCamponAIPageContent.paragraphOne }/>
        </>
    );
};
 
export default CongressionalBootCamponAI;
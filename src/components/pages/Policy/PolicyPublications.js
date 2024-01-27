import React from "react";
import { PolicyPageTemplate } from "../PageTemplate";
import { policyPublicationsPageContent } from "./PolicyPageData";

const PolicyPublications = () => {
    return (
        <>
            <PolicyPageTemplate title={ policyPublicationsPageContent.title } imageURL={ policyPublicationsPageContent.imageURL } paragraphOne={ policyPublicationsPageContent.paragraphOne }/>
        </>
    );
};
 
export default PolicyPublications;
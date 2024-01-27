import React from "react";
import { PolicyPageTemplate } from "../PageTemplate";
import { techEthicsPolicySummerFellowshipsPageContent } from "./PolicyPageData";

const TechEthicsPolicySummerFellowships = () => {
    return (
        <>
            <PolicyPageTemplate title={ techEthicsPolicySummerFellowshipsPageContent.title } imageURL={ techEthicsPolicySummerFellowshipsPageContent.imageURL } paragraphOne={ techEthicsPolicySummerFellowshipsPageContent.paragraphOne }/>
        </>
    );
};
 
export default TechEthicsPolicySummerFellowships;
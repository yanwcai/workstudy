import React from "react";
import { PolicyPageTemplate } from "../PageTemplate";
import { AIAuditChallengePageContent } from "./PolicyPageData";

const AIAuditChallenge = () => {
    return (
        <>
            <PolicyPageTemplate title={ AIAuditChallengePageContent.title } imageURL={ AIAuditChallengePageContent.imageURL } paragraphOne={ AIAuditChallengePageContent.paragraphOne }/>
        </>
    );
};
 
export default AIAuditChallenge;
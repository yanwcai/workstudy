import React from "react";
import { AboutPageTemplate } from "../PageTemplate";
import { getInvolvedPageContent } from "./PageData";

const GetInvolved = () => {
    return (
        <>
            <AboutPageTemplate title={ getInvolvedPageContent.title } imageURL={ getInvolvedPageContent.imageURL } paragraphOne={ getInvolvedPageContent.paragraphOne }/>
        </>
    );
};
 
export default GetInvolved;
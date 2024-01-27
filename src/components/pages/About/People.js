import React from "react";
import { AboutPageTemplate } from "../PageTemplate";
import { peoplePageContent } from "./PageData";

const People = () => {
    return (
        <>
            <AboutPageTemplate title={ peoplePageContent.title } imageURL={ peoplePageContent.imageURL } paragraphOne={ peoplePageContent.paragraphOne }/>
        </>
    );
};
 
export default People;
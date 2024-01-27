import React from "react";
import { AboutPageTemplate } from "../PageTemplate";
import { valuesPageContent } from "./PageData";

const Values = () => {
    return (
        <>
            <AboutPageTemplate title={ valuesPageContent.title } imageURL={ valuesPageContent.imageURL } paragraphOne={ valuesPageContent.paragraphOne }/>
        </>
    );
};
 
export default Values;
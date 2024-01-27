import React from "react";
import { NewsPageTemplate } from "../PageTemplate";
import { blogPageContent } from "./NewsPageData";

const NewsBlog = () => {
    return (
        <>
            <NewsPageTemplate title={ blogPageContent.title } imageURL={ blogPageContent.imageURL } paragraphOne={ blogPageContent.paragraphOne }/>
        </>
    );
};
 
export default NewsBlog;
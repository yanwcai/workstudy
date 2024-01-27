import React from "react";
import { NewsPageTemplate } from "../PageTemplate";
import { subscribeToNewsletterPageContent } from "./NewsPageData";

const SubscribeToNewsletter = () => {
    return (
        <>
            <NewsPageTemplate title={ subscribeToNewsletterPageContent.title } imageURL={ subscribeToNewsletterPageContent.imageURL } paragraphOne={ subscribeToNewsletterPageContent.paragraphOne }/>
        </>
    );
};
 
export default SubscribeToNewsletter;
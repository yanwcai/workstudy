import React from "react";
import { NewsPageTemplate } from "../PageTemplate";
import { mediaMentionsPageContent } from "./NewsPageData";

const MediaMentions = () => {
    return (
        <>
            <NewsPageTemplate title={ mediaMentionsPageContent.title } imageURL={ mediaMentionsPageContent.imageURL } paragraphOne={ mediaMentionsPageContent.paragraphOne }/>
        </>
    );
};
 
export default MediaMentions;
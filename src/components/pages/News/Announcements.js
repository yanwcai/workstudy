import React from "react";
import { NewsPageTemplate } from "../PageTemplate";
import { announcementsPageContent } from "./NewsPageData";

const Announcements = () => {
    return (
        <>
            <NewsPageTemplate title={ announcementsPageContent.title } imageURL={ announcementsPageContent.imageURL } paragraphOne={ announcementsPageContent.paragraphOne }/>
        </>
    );
};
 
export default Announcements;
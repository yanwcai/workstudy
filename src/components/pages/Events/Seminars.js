import React from "react";
import { EventsPageTemplate } from "../PageTemplate";
import { seminarsPageContent } from "./EventsPageData";

const Seminars = () => {
    return (
        <>
            <EventsPageTemplate title={ seminarsPageContent.title } imageURL={ seminarsPageContent.imageURL } paragraphOne={ seminarsPageContent.paragraphOne }/>
        </>
    );
};
 
export default Seminars;
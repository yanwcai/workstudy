import React from "react";
import { EventsPageTemplate } from "../PageTemplate";
import { pastEventsPageContent } from "./EventsPageData";

const PastEvents = () => {
    return (
        <>
            <EventsPageTemplate title={ pastEventsPageContent.title } imageURL={ pastEventsPageContent.imageURL } paragraphOne={ pastEventsPageContent.paragraphOne }/>
        </>
    );
};
 
export default PastEvents;
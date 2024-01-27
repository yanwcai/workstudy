import React from "react";
import { EventsPageTemplate } from "../PageTemplate";
import { upcomingEventsPageContent } from "./EventsPageData";

const UpcomingEvents = () => {
    return (
        <>
            <EventsPageTemplate title={ upcomingEventsPageContent.title } imageURL={ upcomingEventsPageContent.imageURL } paragraphOne={ upcomingEventsPageContent.paragraphOne }/>
        </>
    );
};
 
export default UpcomingEvents;
// global type def

import {FluidObject} from "gatsby-image";

// location props for routing
export type LocationProps = {
    // accessing typescript location object
    location: Location;
}

// fluid imageData query type for fetching img data
export type FluidImageType = {
    // fetching team member data
    allFile: {
        // image array
        edges: Array<{
            // per-image node
            node: {
                // profile_pic filename
                base: string;
                // fluid image generated using transformer-sharp plugin
                childImageSharp: {
                    // responsive image object
                    fluid: FluidObject
                }
            }
        }>
    }
}

// client's csv data type fetched using graphql query
export type AllClientsDataType = {
    allClientsDataCsv: {
        edges: Array<{
            node: {
                // unique id
                id?: string;
                // client's country
                countryName: string;
                // client's logo
                clientLogo: string;
                // client's project name
                projectDisplayName: string;
                // client's name
                clientName: string;
                // client's city
                city: string;
                // client's state
                state: string;
                // client's country code
                countryCode: string;
                // project category
                projectCategory: string;
                // project description
                projectCardDescription: string;
            }
        }>
    };
}

export type ProjectCateoryType = "Food & Agriculture" | "Technology Startup" | "Marketing" | "Health" | "Commodities Trading" | "Manufacturing" | "Finance" | "Construction";

// type definitions

// gatsby internal routing prop
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

export type AllClientsDataType = {
    allClientsDataCsv: {
        edges: Array<{
            node: {
                id?: string;
                countryName: string;
                clientLogo: string;
                projectDisplayName: string;
                clientName: string;
                city: string;
                state: string;
                countryCode: string;
                projectCategory: string;
                projectCardDescription: string;
            }
        }>
    };
}

export type ProjectCateoryType = "Food & Agriculture" | "Technology Startup" | "Marketing" | "Health" | "Commodities Trading" | "Manufacturing" | "Finance" | "Construction";

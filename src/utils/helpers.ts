import {ProjectCateoryType} from "./types";

// helper function to set a border color class based on projectCategory fetched from csv data
export const setProjectCategoryBackgroundClass = (sector: ProjectCateoryType): string => {
    return ({
        "Food & Agriculture": 'success',
        "Technology Startup": 'warning',
        "Marketing": "info",
        "Health": "danger",
        "Commodities Trading": "commodities",
        "Manufacturing": "primary",
        "Finance": "finance",
        "Construction": "construction",
    }[sector]);
}

// helper function to set a text color class based on projectCategory fetched from csv data
export const setProjectCategoryColorClass = (sector: ProjectCateoryType): string => {
    return ({
        "Food & Agriculture": 'white',
        "Technology Startup": 'black',
        "Marketing": "white",
        "Health": "white",
        "Commodities Trading": "white",
        "Manufacturing": "white",
        "Finance": "white",
        "Construction": "white",
    }[sector]);
}

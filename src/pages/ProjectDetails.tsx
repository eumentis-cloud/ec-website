import React from "react";
import {LocationProps} from "../utils/types";
import Layout from "../layouts/Layout";

const ProjectDetails: React.FC<LocationProps> = ({location}) => {
    return (
        <body>
            <Layout location={location}>
                <div>
                    sas
                </div>
            </Layout>
        </body>
    )
}

export  default ProjectDetails;

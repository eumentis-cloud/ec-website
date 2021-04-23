import React from "react";
import Layout from "../layouts/Layout";
import {LocationProps} from "../utils/types";

// FC
const PageNotFound: React.FC<LocationProps> = ({location}): JSX.Element => (
    <Layout location={location}>
        <div className="container mx-auto my-auto">
            <h1 className="page-not-found text-center">Sorry, that page cannot be found.</h1>
        </div>
    </Layout>
)

export default PageNotFound

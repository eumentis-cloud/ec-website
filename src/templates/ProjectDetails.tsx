import React from "react";
import {LocationProps, SingleAssetFluidType} from "../utils/types";
import Layout from "../layouts/Layout";
import {useStaticQuery, graphql} from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import {PageContext} from "gatsby/internal";

// FC
const ProjectDetails: React.FC<PageContext & LocationProps> = ({location, pageContext: {dog}}) => {

    // fetching background image for project details page
    const {file}: SingleAssetFluidType = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "bg-project-details.png"}) {
                childImageSharp {
                    fluid(quality: 100) {
                        base64
                        aspectRatio
                        sizes
                        src
                        srcSet
                    }
                }
            }
        }

    `);

    return (
        <BackgroundImage className="bg-project-details" fluid={file.childImageSharp.fluid}>
            <Layout location={location}>
                <div>
                    {dog.name} - {dog.breed}
                </div>
            </Layout>
        </BackgroundImage>
    )
}

export  default ProjectDetails;

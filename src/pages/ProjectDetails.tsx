import React from "react";
import {FluidImageType, LocationProps, SingleAssetFluidType, SingleFileImageType} from "../utils/types";
import Layout from "../layouts/Layout";
import {useStaticQuery} from "gatsby";
import BackgroundImage from 'gatsby-background-image';


const ProjectDetails: React.FC<LocationProps> = ({location}) => {

    const bgImageData: SingleAssetFluidType = useStaticQuery(graphql`
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
        <BackgroundImage style={{height: '100vh'}} fluid={bgImageData.file.childImageSharp.fluid}>
            <Layout location={location}>
                <div>
                    sas
                </div>
            </Layout>
        </BackgroundImage>
    )
}

export  default ProjectDetails;

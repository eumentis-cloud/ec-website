import React from "react";
import {useStaticQuery, graphql} from 'gatsby';
import GatsbyImage from "gatsby-image";
import {FluidImageType} from "../utils/types";

// tech stack logo component props
type TechStackLogoProps = {
    // logo name
    techLogo: string;
    // logo alt text
    imgAltText?: string;
};

// FC
const TechStackLogo: React.FC<TechStackLogoProps> = ({techLogo, imgAltText}) => {
    // fetching tech logos data
    const {allFile}: FluidImageType = useStaticQuery(graphql`
        query {
            allFile(filter: {extension: {regex: "/(png)/"}, absolutePath: {regex: "/tech/"}}) {
                edges {
                    node {
                        id
                        base
                        childImageSharp {
                            fluid {
                                aspectRatio
                                base64
                                sizes
                                src
                                srcSet
                            }
                        }
                    }
                }
            }
        }

    `)


    return (
        <>
            {
                allFile.edges.filter((imgData) => {
                    return imgData.node.base === techLogo;
                }).map((imgData, index) => (
                        <GatsbyImage key={index} style={{height: 75 }} imgStyle={{ height: 65, objectFit: 'contain'}} className="img-fluid align-self-center tech-icons" alt={imgData.node.base.split('.')[0]} fluid={imgData.node.childImageSharp.fluid} />
                ))
            }
        </>
    )
}

export default TechStackLogo;

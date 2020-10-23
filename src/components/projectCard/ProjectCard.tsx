import React from "react";
import './projectCard.scss';
import LocationIcon from '../../images/svgAssets/location.svg';
import {graphql, useStaticQuery} from "gatsby";
import { FluidImageType, ProjectCateoryType} from "../../utils/types";
import GatsbyImage from "gatsby-image";
import {setProjectCategoryBackgroundClass, setProjectCategoryColorClass} from "../../utils/helpers";

type ProjectCardProps = {
    projectDisplayName: string;
    clientLogo: string;
    clientName: string;
    city: string;
    state: string;
    countryCode: string;
    projectCategory: ProjectCateoryType;
    projectCardDescription: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({projectDisplayName, clientLogo, clientName, city, state, countryCode, projectCategory, projectCardDescription }) => {

    const allClientImages: FluidImageType = useStaticQuery(graphql`
        query {
            allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, absolutePath: {regex: "/clients/"}}) {
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
        <div className="col mb-4">
            <div className="card work-card h-100">
                    <div className="card-header border-0 bg-transparent">
                        <span className={`project-display-name border-${setProjectCategoryBackgroundClass(projectCategory)}`}>{projectDisplayName}</span>
                    </div>
                {
                    allClientImages.allFile.edges.filter((img) => {
                        return img.node.base === clientLogo;
                    }).map((imgData) => (
                        <GatsbyImage className="card-img mt-4 project-card-img-container" style={{height: '7rem'}} imgStyle={{height: clientLogo === 'bizminder.png' ? '4.2rem' : '6.2rem', objectFit: 'contain'}} key={imgData.node.base} alt={imgData.node.base.split('.')[0]} fluid={imgData.node.childImageSharp.fluid} />
                    ))
                }
                        <div className="card-body">
                            <h5 className="card-title d-block text-wrap">{clientName}</h5>
                            <div className="d-flex align-items-baseline">
                                <LocationIcon />
                                <span className="card-subtitle mb-2 text-muted pl-2">{city}, {state} ({countryCode})</span>
                            </div>
                            <span className={`badge rounded-pill bg-${setProjectCategoryBackgroundClass(projectCategory)} px-2 py-1 mb-2 text-${setProjectCategoryColorClass(projectCategory)}`}>{projectCategory}</span>
                            <span className="card-text text-wrap d-block">{projectCardDescription}</span>
                        </div>
            </div>
        </div>
    )
}

export default ProjectCard;

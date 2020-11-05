import React from "react";
import './projectCard.scss';
import LocationIcon from '../../images/svgAssets/location.svg';
import {graphql, useStaticQuery} from "gatsby";
import { FluidImageType, ProjectCateoryType} from "../../utils/types";
import GatsbyImage from "gatsby-image";
import {setProjectCategoryBackgroundClass, setProjectCategoryColorClass} from "../../utils/helpers";

type ProjectCardProps = {
    // main display name
    projectDisplayName?: string;
    // logo name
    clientLogo?: string;
    // client's name
    clientName?: string;
    // client's city
    city?: string;
    // client's state
    state?: string;
    // client's country
    countryCode?: string;
    // project sector
    sector?: ProjectCateoryType;
    // project desc
    projectCardDescription?: string;
    // css class
    parentClassName?: string;
}

// FC
const ProjectCard: React.FC<ProjectCardProps> = ({projectDisplayName, parentClassName, clientLogo, clientName, city, state, countryCode, sector, projectCardDescription }) => {

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
        <div className={parentClassName}>
            <div className={`card work-card ${location.pathname === '/OurWork/' ? 'our-work-section-card' : ''} h-100 ${clientName === 'Drona Lectures' || clientName === 'VendR' ? 'card-no-hover' : ''}`}>
                <div className="card-header border-0 bg-transparent m-1">
                    <span className={`project-display-name border-${setProjectCategoryBackgroundClass(sector as ProjectCateoryType)}`}>{projectDisplayName}</span>
                </div>
                {
                    allClientImages.allFile.edges.filter((img) => {
                        return img.node.base === clientLogo;
                    }).map((imgData) => (
                        <GatsbyImage className="card-img card-logo mt-4 project-card-img-container" style={{height: '7rem'}} imgStyle={{height: clientLogo === 'bizminder.png' || clientLogo === 'nutritoo.png' ? '4rem' : '6.2rem', objectFit: 'contain'}} key={imgData.node.base} alt={imgData.node.base.split('.')[0]} fluid={imgData.node.childImageSharp.fluid} />
                    ))
                }
                <div className="card-body ml-1">
                    <h5 className="card-title d-block text-wrap">{clientName}</h5>
                    <div className="d-flex align-items-baseline">
                        <LocationIcon />
                        <span className="card-subtitle mb-2 text-muted pl-2">{city}, {state} ({countryCode})</span>
                    </div>
                    <span className={`badge rounded-pill bg-${setProjectCategoryBackgroundClass(sector as ProjectCateoryType)} px-2 py-1 mb-2 text-${setProjectCategoryColorClass(sector as ProjectCateoryType)}`}>{sector}</span>
                    <span className="card-text text-wrap d-flex">{projectCardDescription}</span>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;

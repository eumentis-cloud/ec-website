import React from 'react';
import EumentisLogo from "../images/svgAssets/eumentis-logo.svg";
import BackgroundImage from "gatsby-background-image";
import {graphql, Link, useStaticQuery} from "gatsby";
import {SingleAssetFluidType} from "../utils/types";

// layout component props
type CareersLayoutProps = {
    // child content
    children?: React.ReactNode;
    // page section title
    sectionTitle: string;
}

const CareersLayout: React.FC<CareersLayoutProps> = ({children, sectionTitle}) => {

    const {file}: SingleAssetFluidType = useStaticQuery(graphql`
        {
            file(relativePath: {eq: "careers-banner.jpeg"}) {
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
        <div>
            <div className="career-body">
                <div className="header align-content-center">
                    <Link to={"/Careers/"} className="d-flex" id="careers-home-link">
                        <EumentisLogo className="careers-ec-logo" />
                        <div className="text-black font-weight-bold d-none d-sm-block header-text py-2 ec-logo align-items-center align-content-center">
                            Careers at Eumentis Cloud
                        </div>
                    </Link>
                </div>
                <div className="career-banner-container">
                    <BackgroundImage fluid={file.childImageSharp.fluid} className="career-banner-image">
                        <div className="image-heading">Eumentis Cloud</div>
                        <div className="image-text">
                            Innovate. Automate. Transform.
                        </div>
                    </BackgroundImage>
                    <div className="career-banner-heading">
                        {sectionTitle}
                    </div>
                </div>
                <div className="career-body">
                    <div className="container career-container">
                        {children}
                    </div>
                </div>
            </div>
            <div className="footer career-home-footer px-2">
                <div className="footer-content justify-content-between justify-content-md-center">
                    <div className={"pr-1"}>
                        <Link to={'/'} className={"text-dark font-weight-bold"}>Eumentis Cloud</Link>
                    </div>
                    <div>
                        <b className={"text-dark"}>|</b> Office-310 B, Amenity Building Rose
                        Icon, Pimple Saudagar, Pune, Maharashtra - 411027
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CareersLayout;

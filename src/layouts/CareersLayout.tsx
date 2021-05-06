import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { SingleAssetFluidType } from '../utils/types';
import '../scss/careers.scss';

// layout component props
type CareersLayoutProps = {
  // child content
  children?: React.ReactNode;
  // page section title
  sectionTitle: string;
  // job apply google form link
  applyLink?: string;
  // whether to render apply section
  isApplySectionApplicable?: boolean;
  // job position
  jobPosition?: string;
};

const CareersLayout: React.FC<CareersLayoutProps> = ({
  children,
  jobPosition,
  sectionTitle,
  applyLink,
  isApplySectionApplicable = true,
}) => {
  const { file }: SingleAssetFluidType = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "careers-banner.jpeg" }) {
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
        <div className="career-banner-container">
          <BackgroundImage fluid={file.childImageSharp.fluid} className="career-banner-image">
            {jobPosition ? (
              <nav aria-label="breadcrumb" className="d-flex justify-content-between">
                <div className="m-2">
                  <ol className="breadcrumb d-flex bg-transparent">
                    <li className="breadcrumb-item text-white">
                      <Link to="/Careers/" className="careers-breadcrumb-link">
                        Careers
                      </Link>
                    </li>
                    <li className="breadcrumb-item text-white active text-dark" aria-current="page">
                      {jobPosition}
                    </li>
                  </ol>
                  {/*<ol className="breadcrumb d-block d-sm-flex d-md-none bg-transparent">*/}
                  {/*    <li className="breadcrumb-mobile">*/}
                  {/*        <Link to={'/Careers/'}>*/}
                  {/*            <i className="fa fa-angle-left pr-1 text-dark" aria-hidden="true"/>*/}
                  {/*            Careers*/}
                  {/*        </Link>*/}
                  {/*    </li>*/}
                  {/*</ol>*/}
                </div>
              </nav>
            ) : null}
            <div className="image-heading">Eumentis Cloud</div>
            <div className="image-text">Innovate. Automate. Transform.</div>
          </BackgroundImage>
          <div className="career-banner-heading text-dark">{sectionTitle}</div>
        </div>
        <div className="career-body px-2">
          <div className="container career-container">{children}</div>
          {isApplySectionApplicable ? (
            <>
              <div className="apply-container">
                <a href={applyLink} target="_blank">
                  <button type="submit" className="apply-button">
                    APPLY
                  </button>
                </a>
              </div>
            </>
          ) : null}
        </div>
      </div>
      <div className="footer career-home-footer mt-5">
        <div className="footer-content justify-content-between justify-content-md-center px-3">
          <div className={'pr-1'}>
            <Link to={'/'} className={'text-dark font-weight-bold'}>
              <u>Eumentis Cloud</u>
            </Link>
          </div>
          <div>
            <b className={'text-dark'}>|</b> Office-310 B, Amenity Building Rose Icon, Pimple
            Saudagar, Pune, Maharashtra - 411027
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersLayout;

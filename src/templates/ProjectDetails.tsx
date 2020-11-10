import React from "react";
import {AllClientsDataType, ProjectCateoryType, SingleAssetFluidType} from "../utils/types";
import Layout from "../layouts/Layout";
import {useStaticQuery, graphql, navigate, Link} from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import './project-details.scss';
import LocationIcon from "../images/svgAssets/location.svg";
import ClientLogo from "../components/ClientLogo";
import GooglePlayBadge from '../images/svgAssets/google-play-badge.svg';
import AppStoreBadge from '../images/svgAssets/app-store-badge.svg';
import {setProjectCategoryBackgroundClass, setProjectCategoryColorClass} from "../utils/helpers";
import {halagigMsg, noAppLinksMsg} from "../utils/globals";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper";
// scss dependencies
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import ProjectCard from "../components/projectCard/ProjectCard";
// problem and solution assets
import ProblemLogo from '../images/png/problem.png';
import SolutionLogo from '../images/png/solution.png';

// component props
type ProjectDetailsProps = {
    // accessing typescript location object
    location: Location;
    // context of dynamically generated pages
    pageContext: {
        node: Record<string | ProjectCateoryType, string>;
    };
}
// testimonial type
type TestimonialDataType = {
    // profile photo name
    profile_pic: string;
    // person name
    name: string;
    // person designation
    designation: string;
    // testimonial quote
    quote: string;
}

// using swiper core features
SwiperCore.use([Autoplay, Navigation, Pagination])

// reusing swiper config
const defaultSliderConfig = {
    loopPreventsSlide: false,
    preloadImages: true,
    updateOnImagesReady: true,
    centeredSlides: true,
    loop: true,
    autoplay: {
    delay: 1500, disableOnInteraction: false },
    pagination: {
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
    },
}

// FC
const ProjectDetails: React.FC<ProjectDetailsProps> = ({location, pageContext}) => {

    // fetching background image for project details page
    const {file, allClientsDataCsv}: SingleAssetFluidType & AllClientsDataType = useStaticQuery(graphql`
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
            allClientsDataCsv {
                edges {
                    node {
                        id
                        projectDisplayName
                        clientLogo
                        clientName
                        city
                        state
                        countryCode
                        sector
                        projectCardDescription
                    }
                }
            }
        }
    `);
    // using data passed from gatsby-node (per-page data) to render project details
    const {id,
        projectDisplayName,
        clientLogo,
        clientName,
        city,
        state,
        countryCode,
        tagline,
        sector,
        projectCardDescription,
        googlePlayLink,
        appStoreLink,
        demoVideoLink_1,
        demoVideoLink_2,
        demoVideoLink_3,
        demoVideoLink_4,
        demoVideoLink_5,
        problem_1,
        problem_2,
        problem_3,
        problem_4,
        problem_5,
        problem_6,
        problem_7,
        problem_8,
        problem_9,
        problem_10,
        solution_1,
        solution_2,
        solution_3,
        solution_4,
        solution_5,
        solution_6,
        solution_7,
        solution_8,
        solution_9,
        solution_10,
        frontendTech_1,
        frontendTech_2,
        frontendTech_3,
        frontendTech_4,
        frontendTech_5,
        backendTech_1,
        backendTech_2,
        backendTech_3,
        backendTech_4,
        backendTech_5,
        testimonialPersonPhoto_1,
        testimonialPersonName_1,
        testimonialPersonDesignation_1,
        testimonialQuote_1,
        testimonialPersonPhoto_2,
        testimonialPersonName_2,
        testimonialPersonDesignation_2,
        testimonialQuote_2,
        testimonialPersonPhoto_3,
        testimonialPersonName_3,
        testimonialPersonDesignation_3,
        testimonialQuote_3,
        launchWebsite,
        googlePlayLink2
    } = pageContext.node;

    // demo video links
    const demoVideoLinksData: Array<string> = [demoVideoLink_1,demoVideoLink_2,demoVideoLink_3,demoVideoLink_4,demoVideoLink_5].filter((link) => link !== '' && link !== null);
    // problem card data
    const problemStatementData: Array<string> = [problem_1, problem_2,problem_3,problem_4,problem_5, problem_6,problem_7,problem_8,problem_9, problem_10].filter((entry) => entry !== '' && entry !== null);
    // solution card data
    const solutionStatementData: Array<string> = [solution_1, solution_2,solution_3,solution_4,solution_5, solution_6,solution_7,solution_8,solution_9, solution_10].filter((entry) => entry !== null && entry !== '');
    // frontend tech used
    const frontendTechData: Array<string> = [frontendTech_1,frontendTech_2,frontendTech_3,frontendTech_4,frontendTech_5].filter((entry) => entry !== '' && entry !== null);
    // backend tech used
    const backendTechData: Array<string> = [backendTech_1,backendTech_2,backendTech_3,backendTech_4,backendTech_5].filter((entry) => entry !== '' && entry !== null);


    // testimonial section data
    // const testimonialData: Array<TestimonialDataType> = [
    //     {
    //         profile_pic: testimonialPersonPhoto_1,
    //         name: testimonialPersonName_1,
    //         designation: testimonialPersonDesignation_1,
    //         quote: testimonialQuote_1,
    //     },
    //     {
    //         profile_pic:  testimonialPersonPhoto_2,
    //         name: testimonialPersonName_2,
    //         designation: testimonialPersonDesignation_2,
    //         quote: testimonialQuote_2,
    //     },
    //     {
    //         profile_pic:  testimonialPersonPhoto_3,
    //         name: testimonialPersonName_3,
    //         designation: testimonialPersonDesignation_3,
    //         quote: testimonialQuote_3,
    //     },
    // ].filter((data) => {
    //     return data.quote !== null && data.quote !== '';
    // });

    return (
        <BackgroundImage className="bg-project-details" fluid={file.childImageSharp.fluid}>
            <Layout location={location}>
                <div>
                    <div className="row">
                        <main role="main" className="col-md-12 ml-sm-auto col-lg-12 col-xl-12 px-0 py-0">
                            <div className="parallax-window shadow-sm">
                                <div className="container-fluid">
                                    <nav aria-label="breadcrumb" className="d-flex justify-content-between">
                                        <div className="mt-2">
                                            <ol className="breadcrumb d-none d-sm-none d-md-flex bg-transparent">
                                                <li className="breadcrumb-item">
                                                    <Link to="/OurWork/" className="text-black">Our Work</Link>
                                                </li>
                                                <li className="breadcrumb-item active text-black"
                                                    aria-current="page">
                                                    {projectDisplayName}
                                                </li>
                                            </ol>
                                            <ol className="breadcrumb d-block d-sm-flex d-md-none bg-transparent">
                                                <li className="breadcrumb-mobile">
                                                   <Link to={'/OurWork/'} className="text-black">
                                                       <i className="fa fa-angle-left pr-1 text-black" aria-hidden="true"/>
                                                       Our Work
                                                   </Link>
                                                </li>
                                            </ol>
                                        </div>
                                    </nav>
                                    <div className="text-center rounded-0 border-0" id="project-main">
                                        <span className={`project-title border-${setProjectCategoryBackgroundClass(sector as ProjectCateoryType)}`}>{projectDisplayName}</span>
                                        <h5 className="py-3 text-wrap proect-details-desc">
                                            {projectCardDescription}
                                        </h5>
                                        {tagline ?
                                            <q className="proect-details-desc">{tagline}</q> : null}
                                    </div>
                                    <div
                                        className="row row-cols-1 row-cols-md-3 justify-content-around align-content-start align-items-center py-2 py-md-5 mx-md-2">
                                        <div className="col">
                                            <div className="media client-details-wrapper d-block d-sm-block d-md-flex">
                                                <div
                                                    className="d-flex justify-content-center align-items-center py-2 py-md-2">
                                                         <ClientLogo imgAltText={clientName} clientLogo={clientLogo} />
                                                </div>
                                                <div
                                                    className="media-body pt-5 pb-2 py-md-0 d-flex align-self-stretch justify-content-between flex-column">
                                                        <h4 className="text-center text-sm-center text-md-left">
                                                            {clientName}
                                                        </h4>
                                                    <div className="d-flex align-items-baseline py-2 py-md-0 justify-content-center justify-content-sm-center justify-content-md-start ml-0">
                                                        <LocationIcon />
                                                        <span className="card-subtitle mb-2 text-muted pl-2">
                                                            {city}, {state} ({countryCode})
                                                        </span>
                                                    </div>
                                                    <span className={`badge rounded-pill bg-${setProjectCategoryBackgroundClass(sector as ProjectCateoryType)} px-3 py-2 mb-2 text-${setProjectCategoryColorClass(sector as ProjectCateoryType)}`}>{sector}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col py-md-0">
                                            <div className="media">
                                                {demoVideoLinksData.length > 0 ?
                                                    <div className="media-body video-wrapper justify-content-md-start justify-content-sm-center">
                                                        <h5 className="text-md-left text-center py-2 py-md-0 d-flex justify-content-center justify-content-md-start">Demo Videos</h5>
                                                        <div
                                                            className="wrap demo-video-wrapper d-flex align-items-baseline justify-content-md-start justify-content-center">
                                                            {demoVideoLinksData.map((demoLink, index): JSX.Element => (
                                                                <a key={index} target="_blank" href={demoLink}>
                                                                    <i className="fa fa-youtube-play px-md-3 px-2 play-demo-icon"/>
                                                                    <p className="text-center text-dark video-text font-weight-bold">Video-{index + 1}</p>
                                                                </a>
                                                            ))}
                                                        </div>
                                                    </div> : null
                                                }
                                                <div className="media-body justify-content-center justify-content-md-start links-section">
                                                    <h5 className="text-md-left text-center py-2 py-md-0 d-flex justify-content-center justify-content-md-start">Links</h5>
                                                    <div
                                                        className="row d-flex align-items-start justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start justify-content-center">
                                                        {launchWebsite ?
                                                            <div className="launch-website-badge-wrapper col d-flex justify-content-center justify-content-md-start">
                                                                <a target="_blank" className="ml-md-1 py-2 px-3 btn btn-primary launch-web-btn shadow-hover"
                                                                   href={launchWebsite} role="button">Launch Website</a>
                                                            </div>
                                                            : null}
                                                        {googlePlayLink ?
                                                            <div className="col d-flex justify-content-center justify-content-md-start justify-content-xxl-start badge-wrapper ">
                                                                <a href={googlePlayLink} target="_blank">
                                                                    <GooglePlayBadge alt="Google Play badge" />
                                                                    {projectDisplayName === 'Product Authenticity Verification Platform' ?
                                                                        <div className="text-center text-dark">Keshar Kali Rice</div> : null
                                                                    }
                                                                </a>
                                                            </div>
                                                         : null}
                                                        {appStoreLink ?
                                                            <div className={`col justify-content-xxl-start d-flex ${location.pathname === '/OurWork/Bhagwati-Rice-&-Agro-Industries_Product-Authenticity-Verification-Platform' ? 'mt-2': ''} justify-content-center justify-content-md-start`}>
                                                            <a href={appStoreLink} target="_blank">
                                                                <AppStoreBadge alt="App store badge" />
                                                                {projectDisplayName === 'Product Authenticity Verification Platform' ?
                                                                    <div className="text-center text-dark mt-1">Keshar Kali Rice</div> : null
                                                                }
                                                            </a>
                                                        </div> : null}

                                                        {googlePlayLink2 ? <div className="col mt-2 d-flex justify-content-center justify-content-md-start">
                                                            <a href={googlePlayLink} target="_blank">
                                                                <GooglePlayBadge alt="Google Play badge" />
                                                                {projectDisplayName === 'Product Authenticity Verification Platform' ?
                                                                    <div className="text-center text-dark mt-1">KK Apply Label</div> : null
                                                                }
                                                            </a>
                                                        </div> : null
                                                        }

                                                        {!googlePlayLink && !appStoreLink && !googlePlayLink2 ?
                                                        <div className="text-center text-md-left col-12 d-flex col-sm-12 col-md-auto mt-2 no-app-link-wrapper justify-content-center justify-content-md-start">
                                                        <span>
                                                        <i className="no-apps-msg">{projectDisplayName === 'Customer Experience Apps Suite' ? halagigMsg : noAppLinksMsg }</i>
                                                         </span>
                                                        </div> : null}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <section className="row row-cols-1 row-cols-md-2 row-cols-lg-2 px-5"
                                     id="project-details-section-2">
                                <div className="col mb-4">
                                    <div className="card work-card h-100 mx-md-5 shadow">
                                        <div className="d-flex justify-content-center mt-3">
                                            <img width="250" height="250" alt="problem solving" src={ProblemLogo} />
                                        </div>
                                        <div className="card-body">
                                            <h4 className="section-title text-center card-title pb-5">
                                                Problem
                                            </h4>
                                            <ul className="list-group list-group-flush">
                                                {
                                                    problemStatementData.map((problem, index) => (
                                                        <li key={index} className="list-group-item">
                                                            {problem}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <div className="card work-card h-100 mx-md-5 shadow">
                                        <div className="d-flex justify-content-center mt-3">
                                            <img width="250" height="250" alt="problem solving" src={SolutionLogo} />
                                        </div>
                                        <div className="card-body">
                                            <h4 className="section-title text-center card-title pb-5">
                                                Solution
                                            </h4>
                                            <ul className="list-group list-group-flush">
                                                {solutionStatementData.map((solution, index) => (
                                                    <li key={index} className="list-group-item">
                                                        {solution}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="py-5 container">
                                <div className="card w-100 h-100 shadow py-4">
                                    <div className="card-header border-bottom-0 bg-transparent text-center">
                                        <h4 className="section-title">
                                            Technology Stack
                                        </h4>
                                    </div>
                                    <div className="card-body text-center">
                                        <div className="row row-cols-1 row-cols-md-2 mt-4">
                                            <div className="col tech-stack-seperator">
                                                <h6 className="py-2 stack-title">Frontend</h6>
                                                <div className="row">
                                                    {frontendTechData.map((iconName, index) => (
                                                        <div className="col d-inline" key={index}>
                                                            <i className={`icon-${iconName} tech-icons`} />
                                                            <div className="text-capitalize tech-icon-text">{iconName}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                            <div className="dropdown-divider d-md-none" />
                                            <div className="col">
                                                <h6 className="py-2 stack-title">Backend</h6>
                                                <div className="row">
                                                    {backendTechData.map((iconName, index) => (
                                                        <div className="col d-inline" key={index}>
                                                            <i className={`icon-${iconName} tech-icons`} />
                                                            <div className="text-capitalize tech-icon-text">{iconName}</div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/*<section className="py-4" id="testimonials">*/}
                            {/*    <div className="container">*/}
                            {/*        <div className="card h-100 shadow">*/}
                            {/*            <div className="card-header bg-transparent border-0 mb-1">*/}
                            {/*                <h4 className="section-title text-center">*/}
                            {/*                    Testimonials*/}
                            {/*                </h4>*/}
                            {/*            </div>*/}
                            {/*            <div className="card-body">*/}

                            {/*                <Swiper id="testimonial" {...defaultSliderConfig} navigation spaceBetween={0} slidesPerView={1}>*/}
                            {/*                    {*/}
                            {/*                        testimonialData.map(({name, designation, profile_pic, quote}, index) => (*/}
                            {/*                            <SwiperSlide key={index}>*/}
                            {/*                                <div className="card h-100 border-0">*/}
                            {/*                                    <div className="row no-gutters">*/}
                            {/*                                        <div*/}
                            {/*                                            className="text-center col-md-3 flex-column d-flex justify-content-center align-items-center py-2 py-md-2">*/}
                            {/*                                            <img*/}
                            {/*                                                className="mr-3 my-2 img-fluid align-self-center"*/}
                            {/*                                                src='https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Blank&hatColor=Blue03&facialHairType=MoustacheMagnum&facialHairColor=Black&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=EyeRoll&eyebrowType=RaisedExcitedNatural&mouthType=Sad&skinColor=DarkBrown'*/}
                            {/*                                            />*/}
                            {/*                                            <h4>{name}</h4>*/}
                            {/*                                            <h6>{designation}</h6>*/}
                            {/*                                        </div>*/}
                            {/*                                        <div className="col-md-9 d-flex justify-content-between align-items-center ">*/}
                            {/*                                            <div className="card-body">*/}
                            {/*                                                <h5 className="card-title text-wrap">*/}
                            {/*                                                    <blockquote*/}
                            {/*                                                        className="blockquote align-items-center text-center">*/}
                            {/*                                                        <h5 className="mb-0 text-wrap d-flex justify-content-around">*/}
                            {/*                                                            <i className="fa fa-quote-left fa-2x quote-icon"*/}
                            {/*                                                               aria-hidden="true" /> {quote}*/}
                            {/*                                                            <i className="fa fa-quote-right fa-2x quote-icon"*/}
                            {/*                                                               aria-hidden="true" />*/}
                            {/*                                                        </h5>*/}
                            {/*                                                    </blockquote>*/}
                            {/*                                                </h5>*/}
                            {/*                                            </div>*/}
                            {/*                                        </div>*/}
                            {/*                                    </div>*/}
                            {/*                                </div>*/}
                            {/*                            </SwiperSlide>*/}
                            {/*                        ))*/}
                            {/*                    }*/}
                            {/*                </Swiper>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</section>*/}

                            <section className="pb-5 pb-md-4">
                                <div className="container-fluid">
                                    <h4 className="section-title text-center my-3">
                                        Other Work
                                    </h4>
                                    <Swiper className="h-100" id="otherWorksSlider" {...defaultSliderConfig} spaceBetween={20} slidesPerView={3} breakpoints={{
                                        320:{
                                            slidesPerView: 1,
                                            navigation: false,
                                        },
                                        480:{
                                            slidesPerView: 1,
                                            navigation: false,
                                        },
                                        640:{
                                            slidesPerView: 1,
                                            navigation: true,
                                        },
                                        768:{
                                            slidesPerView: 3,
                                            navigation: true,
                                        },
                                        1024:{
                                            slidesPerView: 3,
                                            navigation: true,
                                        },
                                    }}>
                                        {
                                            allClientsDataCsv && Array.isArray(allClientsDataCsv.edges) && allClientsDataCsv.edges.length > 0 && allClientsDataCsv.edges.filter((clientData) => {
                                                return clientData.node.id !== id;
                                            }).map((filteredData) => (
                                                <SwiperSlide id="other-work-slide" key={filteredData.node.id}>
                                                        <ProjectCard parentClassName="text-left" projectDisplayName={filteredData.node.projectDisplayName} clientLogo={filteredData.node.clientLogo} clientName={filteredData.node.clientName} city={filteredData.node.city} state={filteredData.node.state} countryCode={filteredData.node.countryCode} sector={filteredData.node.sector as ProjectCateoryType} projectCardDescription={filteredData.node.projectCardDescription} />
                                                </SwiperSlide>
                                            ))
                                        }
                                    </Swiper>
                                </div>
                            </section>
                        </main>
                    </div>
                </div>
            </Layout>
        </BackgroundImage>
    )
}

export  default ProjectDetails;

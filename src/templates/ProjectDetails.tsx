import React from "react";
import {AllClientsDataType, LocationProps, ProjectCateoryType, SingleAssetFluidType} from "../utils/types";
import Layout from "../layouts/Layout";
import {useStaticQuery, graphql, navigate} from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import './project-details.scss';
import LocationIcon from "../images/svgAssets/location.svg";
import {Link} from 'gatsby';
import ClientLogo from "../components/ClientLogo";
import GooglePlayBadge from '../images/svgAssets/google-play-badge.svg';
import AppStoreBadge from '../images/svgAssets/app-store-badge.svg';
import {setProjectCategoryBackgroundClass, setProjectCategoryColorClass} from "../utils/helpers";
import {noAppLinksMsg} from "../utils/globals";
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper";
// scss dependencies
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import ProjectCard from "../components/projectCard/ProjectCard";

// component props
type ProjectDetailsProps = {
    // accessing typescript location object
    location: Location;
    // context of dynamically generated pages
    pageContext: {
        node: Record<string | ProjectCateoryType, string>;
    };
}

type TestimonialDataType = {
    profile_pic: string;
    name: string;
    designation: string;
    quote: string;
}

SwiperCore.use([Autoplay, Navigation, Pagination])

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
        launchWebsite} = pageContext.node;

    console.log('query data', pageContext);

    const demoVideoLinksData: Array<string> = [demoVideoLink_1,demoVideoLink_2,demoVideoLink_3,demoVideoLink_4,demoVideoLink_5].filter((link) => link !== '' && link !== null);
    const problemStatementData: Array<string> = [problem_1, problem_2,problem_3,problem_4,problem_5, problem_6,problem_7,problem_8,problem_9, problem_10].filter((entry) => entry !== '' && entry !== null);
    const solutionStatementData: Array<string> = [solution_1, solution_2,solution_3,solution_4,solution_5, solution_6,solution_7,solution_8,solution_9, solution_10].filter((entry) => entry !== null && entry !== '');
    const frontendTechData: Array<string> = [frontendTech_1,frontendTech_2,frontendTech_3,frontendTech_4,frontendTech_5].filter((entry) => entry !== '' && entry !== null);
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
        <BackgroundImage style={{height: '100%'}} className="bg-project-details" fluid={file.childImageSharp.fluid}>
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
                                                    <Link to="/OurWork/">Our Work</Link>
                                                </li>
                                                <li className="breadcrumb-item active text-dark"
                                                    aria-current="page">
                                                    {projectDisplayName}
                                                </li>
                                            </ol>
                                            <ol className="breadcrumb d-block d-sm-flex d-md-none bg-transparent">
                                                <li className="breadcrumb-mobile">
                                                   <Link to={'/OurWork/'}>
                                                       <i className="fa fa-angle-left pr-1 text-dark" aria-hidden="true"/>
                                                       Our Work
                                                   </Link>
                                                </li>
                                            </ol>
                                        </div>
                                        {launchWebsite ? <div className="website-btn">
                                            <a target="_blank" className="btn btn-primary launch-web-btn shadow-hover"
                                               href={launchWebsite} role="button">Launch Website</a>
                                        </div> : null}
                                    </nav>
                                    <div className="text-center rounded-0 border-0">
                                        <span className={`project-title border-${setProjectCategoryBackgroundClass(sector as ProjectCateoryType)}`}>{projectDisplayName}</span>
                                        <h5 className="py-2 text-wrap proect-details-desc">
                                            {projectCardDescription}
                                        </h5>
                                        {tagline ?
                                            <q className="proect-details-desc">{tagline}</q> : null}
                                    </div>
                                    <div
                                        className="row row-cols-1 row-cols-md-3 justify-content-center align-content-start py-2 py-md-5 mx-md-4">
                                        <div className="col">
                                            <div className="media d-block d-sm-block d-md-flex">
                                                <div
                                                    className="d-flex justify-content-center align-items-center py-2 py-md-2">
                                                         <ClientLogo imgAltText={clientName} clientLogo={clientLogo} />
                                                </div>
                                                <div
                                                    className="media-body py-4 py-md-0 d-flex align-self-stretch justify-content-between flex-column">
                                                    <div>
                                                        <h5 className="text-center text-sm-center text-md-left">
                                                            {clientName}
                                                        </h5>
                                                    </div>
                                                    <div className="d-flex align-items-baseline justify-content-center justify-content-sm-center justify-content-md-start ml-0">
                                                        <LocationIcon />
                                                        <span className="card-subtitle mb-2 text-muted pl-2">
                                                            {city}, {state} ({countryCode})
                                                        </span>
                                                    </div>
                                                    <span className={`badge rounded-pill bg-${setProjectCategoryBackgroundClass(sector as ProjectCateoryType)} px-2 py-2 mb-2 text-${setProjectCategoryColorClass(sector as ProjectCateoryType)}`}>{sector}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="row d-flex justify-content-center align-items-start">
                                                {googlePlayLink ? <div className="col d-flex justify-content-center">
                                                    <a href={googlePlayLink} target="_blank">
                                                        <GooglePlayBadge alt="Google Play badge" />
                                                    </a>
                                                </div> : null}
                                                {!googlePlayLink && !appStoreLink ? <div className="d-flex col justify-content-center">
                                                    <span className={"text-center"}>
                                                        <i>{noAppLinksMsg}</i>
                                                    </span>
                                                </div> : null}
                                                {appStoreLink ? <div className="col justify-content-center d-flex">
                                                    <a href={appStoreLink} target="_blank">
                                                        <AppStoreBadge alt="App store badge" />
                                                    </a>
                                                </div> : null}
                                            </div>
                                        </div>

                                        {demoVideoLinksData.length !== 0 ? <div className="col py-5 py-md-0">
                                            <div className="media">
                                                <div className="media-body">
                                                    <h5 className="text-md-left text-center py-2 py-md-0 d-flex justify-content-center justify-content-md-center">Videos</h5>
                                                    <div
                                                        className="wrap d-flex align-items-baseline justify-content-md-center justify-content-center">
                                                        {demoVideoLinksData.map((demoLink, index): JSX.Element => (
                                                            <a key={index} target="_blank" href={demoLink}>
                                                                <i className="fa fa-youtube-play py-2 px-md-3 px-2 play-demo-icon"/>
                                                                <p className="text-center text-dark video-text font-weight-bold">Video-{index + 1}</p>
                                                            </a>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div> : null}

                                    </div>
                                </div>
                            </div>

                            <section className="row row-cols-1 row-cols-md-2 row-cols-lg-2 px-5"
                                     id="project-details-section-2">
                                <div className="col mb-4">
                                    <div className="card work-card h-100 mx-md-5 shadow">
                                        <div className="d-flex justify-content-center">
                                            <svg width="8em" height="8em" viewBox="0 0 185 154" fill="none">
                                                <path
                                                    d="M173.554 137.471c-15.284 19.276-43.7 18.298-80.623 12.939-37.992-5.513-46.4-1.486-73.805-18.086-27.406-16.6-24.923-48.364 6.58-51.584 31.502-3.22 24.908-21.786 84.837-11.345 89.42 15.58 78.294 48.8 63.011 68.076z"
                                                    fill="url(#paint0_linear)"
                                                />
                                                <g
                                                    clipPath="url(#clip0)"
                                                    fill="#fff"
                                                    stroke="#000"
                                                    strokeWidth={2}
                                                    strokeMiterlimit={10}
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M183.846 95.806c0 2.36-.408 4.72-1.156 7.08-2.38 7.484-8.634 14.563-18.696 20.361-26.447 15.17-69.413 15.17-95.86 0-10.062-5.798-16.316-12.877-18.696-20.361-.748-2.36-1.155-4.72-1.155-7.08 0-9.91 6.594-19.889 19.851-27.44 26.447-15.17 69.413-15.17 95.86 0 13.189 7.551 19.852 17.462 19.852 27.44z" />
                                                    <path d="M183.846 95.806v14.226c0 9.911-6.595 19.89-19.852 27.441-26.446 15.17-69.413 15.17-95.86 0-13.324-7.619-19.919-17.53-19.919-27.508V95.806c0 2.36.408 4.72 1.156 7.08 2.38 7.484 8.634 14.563 18.696 20.361 26.446 15.17 69.413 15.17 95.859 0 10.062-5.798 16.317-12.877 18.696-20.361.816-2.36 1.224-4.72 1.224-7.08z" />
                                                    <path d="M79.284 116.842c-20.26-11.597-20.26-30.475 0-42.071 20.26-11.597 53.233-11.597 73.493 0 20.259 11.596 20.259 30.474 0 42.071-20.26 11.597-53.233 11.597-73.493 0zm65.13-37.352c-15.704-8.967-41.199-8.967-56.835 0-15.705 8.967-15.705 23.598 0 32.565 15.704 8.967 41.199 8.967 56.835 0 15.705-8.967 15.705-23.53 0-32.565z" />
                                                    <path d="M98.456 105.852c-9.654-5.528-9.654-14.563 0-20.091 9.654-5.529 25.427-5.529 35.081 0 9.654 5.528 9.654 14.563 0 20.091-9.654 5.529-25.359 5.529-35.08 0zm26.787-15.305c-5.099-2.899-13.326-2.899-18.425 0-5.098 2.9-5.098 7.62 0 10.518 5.099 2.899 13.326 2.899 18.425 0 5.03-2.899 5.03-7.618 0-10.517zM114.328 2.328c-.393-.135-.59-.337-.59-.54 0-.202.197-.404.59-.539.786-.337 2.064-.337 2.85 0 .393.135.59.337.59.54 0 .202-.197.404-.59.539-.786.337-2.064.337-2.85 0z" />
                                                    <path d="M114.328 95.842c-.393-.135-.59-.337-.59-.54V1.79c0 .202.197.404.59.54.786.336 2.064.336 2.85 0 .393-.136.59-.338.59-.54v93.514c0 .202-.197.404-.59.54-.786.336-2.064.336-2.85 0zM106.531 10.014v-6.54l7.139 4.18.068 23.8-7.207-4.247V10.014zM126.073 15.34v11.867l-7.615 4.315V7.992l7.615-4.518v11.867z" />
                                                </g>
                                                <defs>
                                                    <linearGradient
                                                        id="paint0_linear"
                                                        x1={170.875}
                                                        y1={164.422}
                                                        x2={18.2833}
                                                        y2={45.3295}
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#2EC675" />
                                                        <stop offset={1} stopColor="#08DF6D" />
                                                    </linearGradient>
                                                    <clipPath id="clip0">
                                                        <path
                                                            fill="#fff"
                                                            transform="translate(47.535)"
                                                            d="M0 0H136.991V149.474H0z"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
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
                                        <div className="d-flex justify-content-center">
                                            <svg width="8em" height="8em" viewBox="0 0 201 113" fill="none">
                                                <path
                                                    d="M8.506 91.758c14.771 23.342 41.202 24.557 80.791 16.088 40.458-8.655 41.941 2.344 73.495-17.99 39.062-25.175 19.768-63.942-12.724-63.347-37.79.693-29.398-11.255-96.607-10.426-56.505.697-61.403 49.683-44.955 75.675z"
                                                    fill="url(#paint1_linear)"
                                                />
                                                <g clipPath="url(#clip1)">
                                                    {
                                                        "&lt;1ath d=&quot;M140.971 8.73254C140.971 8.81492 140.888 8.8973 140.888 8.97968C140.724 9.30921 140.559 9.72112 140.395 10.0506L140.065 23.8908C140.23 23.6436 140.312 23.4789 140.395 23.2317C140.477 23.067 140.477 22.9846 140.559 22.8198C140.559 22.7374 140.642 22.6551 140.642 22.5727C140.642 22.4903 140.724 22.4903 140.724 22.4079C140.806 22.1608 140.806 21.9136 140.888 21.5841C140.888 21.5017 140.888 21.4193 140.888 21.337L141.218 7.41443C141.218 7.90872 141.135 8.32063 140.971 8.73254Z&quot; fill=&quot;white&quot; stroke=&quot;black&quot; stroke-width=&quot;2&quot; stroke-miterlimit=&quot;10&quot; stroke-linejoin=&quot;round&quot;/&gt;"
                                                    }
                                                    <path
                                                        d="M127.716 13.51c-.494-.164-1.07-.329-1.564-.494-.165-.082-.33-.164-.412-.164l-.988-.495-.494-.247c-.329-.165-.576-.412-.823-.576-.082-.083-.247-.165-.329-.248l-.988-.988c-.741-.989-1.071-1.977-.988-2.966l-.33 13.923c0 .988.33 1.977.988 2.965.247.33.577.742.988.989.083.082.247.165.33.33.247.247.576.411.823.576l.494.247.988.495c.164.082.329.164.411.164.083 0 .165.083.165.083.412.164.906.33 1.317.412 1.071.576 2.635 1.647 2.882 2.965l.329-13.922c-.082-1.4-1.729-2.472-2.799-3.048zM199.095 22.408c0 .082 0 .247-.082.33-.083.164-.083.329-.165.494-.082.082-.082.247-.165.33-.082.082-.082.164-.164.246-.083.165-.247.412-.33.577a3.531 3.531 0 01-.494.577l-.082.082c-.247.247-.494.412-.741.66-.329.246-.658.494-1.07.74-.082.083-.165.083-.329.165l-.988.495c-.33.164-.659.247-.988.33-.577.164-1.235.329-1.812.411-.164 0-.329.082-.493.082-.577.083-1.235.083-1.812.083h-.247c-.576 0-1.235-.083-1.811-.165h-.165c-4.281-1.07-5.845.66-6.504.494l4.199 13.017c.165.082.412.082.577.164.411.083.905.165 1.317.248h.247c.329.082.658.082 1.07.082h1.153c.411 0 .823 0 1.235-.082.164 0 .247 0 .329-.083.165 0 .329-.082.494-.082.164 0 .411-.083.576-.083.412-.082.823-.164 1.235-.33.247-.081.494-.164.823-.246.083 0 .165-.083.165-.083l.988-.494c.082-.082.247-.082.329-.165.412-.247.741-.494 1.071-.741 0 0 .082 0 .082-.082.247-.165.494-.412.658-.577l.083-.083c.164-.164.329-.329.494-.576 0 0 0-.083.082-.083.165-.164.247-.412.329-.576.083-.083.083-.165.165-.247v-.083c.082-.082.082-.247.165-.33.082-.164.082-.246.164-.411v-.083c0-.082 0-.164.083-.33 0-.164.082-.246.082-.411v-.247l.329-13.923c0 .577-.082.824-.082.989zM106.969 26.362c-.247-.33-.412-.741-.412-1.07l-.329 13.922c0 .33.082.741.412 1.07l9.385 12.688.33-13.923-9.386-12.687z"
                                                        fill="#fff"
                                                        stroke="#000"
                                                        strokeWidth={2}
                                                        strokeMiterlimit={10}
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M138.666 36.578c-.247-.412-.577-.742-.988-1.071-.083-.083-.247-.165-.33-.248-.247-.247-.576-.412-.905-.659-.165-.082-.329-.164-.412-.247-.329-.165-.741-.33-1.07-.494-.165-.083-.247-.083-.412-.165-.082 0-.082-.082-.164-.082-.494-.165-.988-.33-1.482-.412h-.083c-.411-.083-.741-.165-1.152-.247-.165 0-.33 0-.412-.083-.165 0-.247 0-.411-.082h-1.976c-.33 0-.659 0-.988.082-.165 0-.33.083-.494.083-.165 0-.33.082-.577.082-.164 0-.247 0-.411.083-.412.082-.824.164-1.235.329l-.741.247c-.247.082-.494.247-.741.33l-.494.247-1.235.741c-.082 0-.082.083-.165.083-.411.33-.741.659-.988 1.07l-.082.083-.082.082a5.57 5.57 0 00-.577.907c0 .082-.082.164-.082.164-.247.165-.576.412-.988.577-.082.082-.247.082-.411.165-.33.164-.659.33-1.071.494-.411.082-.823.247-1.235.247l-.329 13.923c.247 0 .412-.083.576-.083.247-.082.412-.082.659-.164.165-.083.329-.083.494-.165.247-.083.412-.165.659-.33.164-.082.247-.082.411-.164.329-.165.659-.412.988-.577a4.94 4.94 0 01.741-1.236l.082-.082c.33-.33.659-.742 1.071-1.071.082 0 .082-.083.164-.083.33-.247.741-.576 1.235-.741l.494-.247a7.93 7.93 0 011.482-.577c.576-.165 1.07-.247 1.647-.412.164 0 .329-.082.576-.082.494-.082.988-.082 1.482-.165h.247c.576 0 1.153 0 1.647.083.164 0 .247 0 .411.082.494.082 1.07.165 1.564.247h.083c.576.165 1.07.33 1.646.494.165.083.247.083.412.165.329.165.741.33 1.07.494.165.083.33.165.412.248.329.164.576.411.905.576.083.083.247.165.33.247.329.33.658.66.988 1.071.741.989 1.07 1.977.988 2.966l.329-13.922c0-.824-.329-1.813-1.07-2.801zM192.18 44.404l-.33 13.922-21.323 7.497.329-13.922 21.324-7.497z"
                                                        fill="#fff"
                                                        stroke="#000"
                                                        strokeWidth={2}
                                                        strokeMiterlimit={10}
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M134.961 62.446l-.329 13.922-13.091-15.982.247-13.923 13.173 15.983z"
                                                        fill="#fff"
                                                        stroke="#000"
                                                        strokeWidth={2}
                                                        strokeMiterlimit={10}
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M161.389 54.866l-.33 13.923-26.427 7.579.329-13.922 26.428-7.58zM139.489 40.12c0 .082 0 .165-.082.33 0 .164-.083.329-.165.494-.082.082-.082.247-.165.33-.082.082-.082.164-.164.329-.083.165-.247.412-.33.576-.164.248-.329.412-.494.577l-.082.083c-.247.247-.494.412-.741.659-.329.247-.741.494-1.07.741-.082.082-.165.083-.329.165l-.988.494c-.33.165-.659.247-.988.33-.494.164-1.071.247-1.647.412-.165 0-.329.082-.494.082-.494.082-.988.082-1.399.165h-.247c-.577 0-1.071 0-1.647-.083-.165 0-.247 0-.412-.082-.576-.082-1.07-.165-1.646-.247l-.33 13.84c.33.082.741.165 1.071.165.164 0 .329 0 .494.082.164 0 .247 0 .411.083H129.939c.329 0 .576 0 .906-.083.164 0 .329-.082.493-.082.165 0 .33-.083.577-.083.164 0 .247 0 .411-.082.412-.082.824-.165 1.235-.33.247-.082.494-.164.824-.247.082 0 .164-.082.164-.082l.988-.494c.083-.083.247-.083.33-.165.411-.247.741-.495 1.07-.742h.082c.247-.164.494-.412.659-.576l.082-.083c.165-.164.329-.33.412-.494 0 0 0-.082.082-.082.165-.165.247-.412.329-.577.083-.082.083-.165.165-.247v-.082c.082-.083.082-.248.165-.33.082-.165.082-.247.164-.412v-.082c0-.083 0-.165.083-.33 0-.165.082-.247.082-.412v-.247l.329-13.922c-.082.33-.082.494-.082.741zM124.587 59.397c.412 0 .741-.082 1.071-.082h.411l.33-13.922h-.494c-.33 0-.659 0-1.071.082h-.082c-.329 0-.741.082-1.07.165h-.082c-.247.082-.577.082-.824.164-.164.083-.247.083-.411.165-.247.082-.494.165-.741.33l-.33 13.922c.33-.165.741-.33 1.153-.494.247-.082.576-.165.906-.247.329-.083.74-.165 1.07-.165.082.082.082.082.164.082z"
                                                        fill="#fff"
                                                        stroke="#000"
                                                        strokeWidth={2}
                                                        strokeMiterlimit={10}
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M126.81 1.4c5.022-1.482 11.032-.082 13.42 3.213 1.317 1.813 1.317 3.708.165 5.438.082.906.494 2.06 1.729 2.883l19.018-5.85c1.811-.576 4.034 0 4.857 1.154l9.468 12.77c.494-.083.905-.165 1.317-.248 1.235-.412 2.223-1.07 2.882-1.565.823-1.565 2.552-2.883 5.022-3.625 4.939-1.565 10.949-.082 13.419 3.213 2.47 3.295.33 7.167-4.61 8.733-2.717.823-5.681.741-8.233 0-.906 0-2.058.164-3.046.412-.412.164-.824.329-1.153.494l10.621 14.417c.905 1.235.164 2.636-1.647 3.212l-19.183 5.85c.247.988 1.4 1.894 2.306 2.471 2.716.494 5.104 1.73 6.421 3.542 2.47 3.296.33 7.168-4.61 8.733-5.022 1.483-10.95.082-13.42-3.213-1.152-1.648-1.317-3.378-.494-4.943 0-.824-.247-2.224-1.482-3.13l-22.064 6.755c-1.811.577-4.034 0-4.94-1.153l-10.702-14.5c.329-.164.741-.33 1.152-.494 1.235-.412 2.717-.412 3.623-.412 2.387.577 5.104.494 7.492-.247 5.022-1.483 7.08-5.437 4.61-8.732-2.47-3.296-8.48-4.696-13.42-3.213-2.716.823-4.528 2.389-5.269 4.119a8.572 8.572 0 01-2.469 1.235c-.412.083-.824.248-1.235.248l-9.386-12.605c-.905-1.235-.165-2.636 1.647-3.213l21.982-6.755c-.165-1.318-1.812-2.389-2.882-2.966-2.305-.576-4.363-1.73-5.598-3.377-2.388-3.213-.33-7.085 4.692-8.65zM80.953 27.021c0 .083-.082.165-.082.247-.165.33-.33.742-.494 1.071l-.33 13.923c.165-.165.248-.412.33-.66.082-.164.082-.246.165-.411 0-.082.082-.165.082-.247 0-.083.082-.083.082-.165.082-.247.082-.494.165-.824v-.247l.329-13.84c0 .412-.082.741-.247 1.153zM67.78 31.8c-.576-.165-1.07-.33-1.564-.495-.164-.082-.329-.165-.411-.165l-.988-.494-.494-.247c-.33-.165-.576-.412-.823-.577-.083-.082-.248-.165-.33-.247l-.988-.988c-.74-.99-1.07-1.978-.988-2.966l-.329 13.922c0 .989.33 1.977.988 2.966.247.33.576.741.988.989.082.082.247.164.33.247.246.247.575.412.822.576l.494.248.988.494c.165.082.33.165.412.165.082 0 .165.082.165.082.411.165.905.33 1.4.412.987.494 2.552 1.565 2.799 2.8L70.58 34.6c-.33-1.235-1.811-2.306-2.8-2.8z"
                                                        fill="#fff"
                                                        stroke="#000"
                                                        strokeWidth={2}
                                                        strokeMiterlimit={10}
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M46.953 57.09l.329-13.922c0 .33.082.742.329 1.071l-.33 13.923c-.246-.412-.328-.742-.328-1.071z"
                                                        fill="#fff"
                                                    />
                                                    <path
                                                        d="M47.61 44.24l-.33 13.922c-.246-.33-.41-.742-.328-1.071l.329-13.923c-.083.33.082.742.329 1.071z"
                                                        fill="#fff"
                                                        stroke="#000"
                                                        strokeWidth={2}
                                                        strokeMiterlimit={10}
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M46.953 57.09l.329-13.922c0 .33.082.742.329 1.071l-.33 13.923c-.246-.412-.328-.742-.328-1.071z"
                                                        stroke="#000"
                                                        strokeWidth={2}
                                                        strokeMiterlimit={10}
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M47.61 44.24l-.33 13.922 9.386 12.687.33-13.923-9.386-12.687zM110.592 70.107l-.33 13.922 20.088-6.096.33-13.922-20.088 6.096zM109.439 68.789l.082-3.707c0-.989-.329-1.977-.988-2.966-.247-.412-.576-.742-.988-1.071-.082-.082-.247-.165-.329-.247-.247-.247-.576-.412-.905-.66-.165-.082-.33-.164-.412-.246-.329-.165-.741-.33-1.07-.495-.165-.082-.247-.082-.412-.164-.082 0-.082-.083-.165-.083-.494-.164-.988-.33-1.482-.412h-.082c-.412-.082-.741-.164-1.153-.247-.164 0-.329 0-.411-.082-.165 0-.247 0-.412-.083-.164 0-.247 0-.411-.082h-1.565c-.329 0-.658 0-.988.082-.164 0-.329.083-.494.083-.164 0-.329.082-.576.082-.165 0-.247 0-.412.083-.411.082-.823.164-1.235.33-.247.081-.494.164-.823.246-.082 0-.082.083-.165.083-.329.164-.74.33-1.07.494-.082.082-.164.082-.247.165-.411.247-.74.494-1.07.741h-.082c-.247.165-.494.412-.659.577l-.082.082c-.165.165-.33.33-.494.577 0 0 0 .082-.083.082-.164.165-.247.412-.329.577-.082.082-.082.165-.165.247v.082c-.082.083-.082.248-.164.33-.083.165-.083.247-.165.412v.082c0 .083 0 .165-.082.33 0 .165-.082.247-.082.412v.247l-.33 13.922c0-.247.083-.412.083-.659 0-.082 0-.165.082-.33.082-.164.082-.329.165-.494.082-.082.082-.247.164-.33.082-.081.082-.164.165-.246.082-.165.247-.412.33-.577.164-.247.328-.412.493-.659l.082-.082c.247-.248.494-.412.741-.66.33-.247.741-.494 1.07-.74.083-.083.165-.083.248-.166.329-.164.658-.33 1.07-.494.33-.165.658-.247.988-.33.576-.164 1.07-.246 1.646-.411.165 0 .33-.083.494-.083.494-.082 2.553-.741 4.528-.412 7.245 1.319 6.422 9.145 6.422 9.145.165 1.153.988 1.977 2.223 2.966l.329-13.923a9.196 9.196 0 01-.823-1.318z"
                                                        fill="#fff"
                                                        stroke="#000"
                                                        strokeWidth={2}
                                                        strokeMiterlimit={10}
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M62.594 64.505l12.102 15.982-.247 14.252-12.184-16.312"
                                                        fill="#fff"
                                                    />
                                                    <path
                                                        d="M62.594 64.505l12.102 15.982-.247 14.252-12.184-16.312"
                                                        stroke="#000"
                                                        strokeWidth={2}
                                                        strokeMiterlimit={10}
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M99.23 73.65l-.247 13.84-24.37 7.25.248-14.253 24.37-6.838z"
                                                        fill="#fff"
                                                        stroke="#000"
                                                        strokeWidth={2}
                                                        strokeMiterlimit={10}
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M66.793 19.69c4.94-1.484 11.032-.083 13.42 3.212 1.317 1.813 1.234 3.707.164 5.438.083.823.412 1.977 1.564 2.718l19.842-6.096c1.811-.577 4.034 0 4.857 1.153l9.468 12.77c.412-.083.905-.165 1.235-.248.988-.33 1.811-.824 2.47-1.236.741-1.73 2.552-3.295 5.269-4.119 5.022-1.482 11.032-.082 13.419 3.213 2.388 3.296.33 7.168-4.61 8.733-2.47.741-5.105.741-7.492.247-.906 0-2.388.082-3.623.412-.411.082-.74.247-1.152.494l10.703 14.5c.905 1.153.164 2.636-1.647 3.212l-20.088 6.179c-1.317-.906-1.482-2.307-1.564-3.13-.083-1.978.658-3.296-.494-4.944-2.388-3.295-8.398-4.695-13.42-3.212-4.94 1.482-7.08 5.437-4.61 8.732 1.317 1.812 3.704 2.966 6.421 3.542.988.577 2.059 1.483 2.388 2.472l-21.159 6.426c-1.811.576-4.034 0-4.857-1.154L62.594 64.505c-.576 0-1.153.165-1.647.33-1.234.412-2.222 1.07-2.799 1.483-.823 1.565-2.552 2.883-5.022 3.624-4.94 1.483-10.95.083-13.42-3.213-2.47-3.295-.329-7.167 4.611-8.732 2.717-.824 5.68-.742 8.233 0 .906 0 1.976-.165 3.046-.412.494-.165.988-.33 1.4-.66L47.61 44.24c-.905-1.153-.164-2.636 1.647-3.213l21.323-6.508c-.33-1.236-1.811-2.224-2.8-2.8-2.387-.578-4.445-1.73-5.598-3.378-2.47-3.213-.411-7.085 4.61-8.65zM160.977 62.444v-2.717l-.082 2.635c.082 0 .082.082.082.082zM161.06 58.491v-.33 1.483-1.153z"
                                                        fill="#fff"
                                                        stroke="#000"
                                                        strokeWidth={2}
                                                        strokeMiterlimit={10}
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M180.571 61.539c0 .082 0 .247-.082.33-.083.164-.083.329-.165.493-.082.083-.082.248-.165.33-.082.082-.082.165-.164.33-.083.164-.247.411-.329.576-.165.247-.33.412-.494.66 0 0 0 .082-.083.082-.247.247-.494.411-.741.659-.329.247-.741.494-1.07.741-.082.083-.165.083-.329.165l-.988.494c-.33.165-.659.247-.988.33-.577.164-1.071.247-1.647.412-.164 0-.329.082-.494.082-.494.082-.988.082-1.564.165h-.165c-.576 0-1.152 0-1.729-.083h-.411a64.058 64.058 0 01-1.565-.247h-.082c-.576-.165-1.07-.33-1.646-.494-.165-.082-.247-.082-.412-.165-.329-.165-.741-.33-1.07-.494-.165-.082-.33-.165-.412-.247-.329-.165-.576-.412-.906-.66-.082-.082-.247-.164-.329-.247-.329-.329-.741-.659-.988-1.07-.247-.33-.741-1.566-.823-1.895v14.499c0 .906 1.152 2.06 1.482 2.389.082.082.247.165.329.247.247.247.576.412.906.577.164.082.329.165.411.247.33.165.741.33 1.071.494.164.083.247.083.411.165.083 0 .083.082.165.082.494.165.988.33 1.482.412h.082c.412.083.741.165 1.153.248.164 0 .329 0 .411.082h.412c.165 0 .247 0 .412.082h1.564c.329 0 .659 0 .988-.082.165 0 .329-.082.494-.082.165 0 .329-.083.494-.083.165 0 .247 0 .412-.082.411-.083.823-.165 1.234-.33.247-.082.494-.165.824-.247.082 0 .082-.082.164-.082.33-.165.741-.33 1.071-.495.082-.082.164-.082.247-.164.411-.248.741-.495 1.07-.742h.082c.247-.165.494-.412.659-.577l.082-.082.494-.494s0-.082.083-.082c.164-.165.246-.413.329-.577.082-.083.082-.165.164-.247v-.083c.083-.082.083-.247.165-.33.082-.164.082-.246.165-.411v-.083c0-.082 0-.164.082-.33 0-.164.082-.246.082-.411v-.247l.33-13.923c-.165 0-.165.248-.165.495z"
                                                        fill="#fff"
                                                        stroke="#000"
                                                        strokeWidth={2}
                                                        strokeMiterlimit={10}
                                                        strokeLinejoin="round"
                                                    />
                                                    <path
                                                        d="M62.594 64.712c-2.553 0-4.858 2.471-5.187 2.8l-.165.165c-.247.247-.576.577-.905.824-.165.165-.33.247-.494.33-.247.164-.494.33-.824.494a2.467 2.467 0 00-.658.33l-1.235.494c-.576.165-1.07.247-1.647.412-.164 0-.329.082-.576.082-.494.082-.988.082-1.482.165h-.165c-.576 0-1.152 0-1.728-.083h-.412c-.576-.082-1.07-.164-1.647-.247h-.082c-.576-.164-1.07-.33-1.647-.494-.164-.082-.247-.082-.411-.165-.33-.165-.741-.33-1.07-.494-.165-.082-.33-.165-.412-.247-.33-.165-.577-.412-.906-.577-.082-.082-.247-.165-.33-.247a4.122 4.122 0 00-.905-1.318c-.74-.989-1.07-1.977-.988-2.966l-.329 13.84c0 .989.33 1.977.988 2.966.247.412.576.741.988 1.071.082.082.247.165.33.247.246.247.575.412.905.577.164.082.33.164.411.247.33.165.66.33 1.07.494.165.083.248.083.412.165.083 0 .083.082.165.082.494.165.988.33 1.482.412h.082c.412.083.741.165 1.153.247.165 0 .247 0 .412.083.164 0 .247 0 .411.082.165 0 .247 0 .412.083h1.564c.33 0 .659 0 .988-.083.165 0 .33-.082.494-.082.165 0 .33-.083.576-.083.165 0 .247 0 .412-.082.412-.082.823-.165 1.235-.33l.74-.247.495-.247c.247-.082.494-.165.659-.33l.74-.494c.165-.082.412-.247.577-.33.082-.081.164-.081.164-.164.247-.247.494-.412.741-.659l.165-.165c.082-.164.247-.247.33-.412.164-.164.246-.412.411-.659l4.367-1.79"
                                                        fill="#fff"
                                                    />
                                                    <path
                                                        d="M62.594 64.712c-2.553 0-4.858 2.471-5.187 2.8l-.165.165c-.247.247-.576.577-.905.824-.165.165-.33.247-.494.33-.247.164-.494.33-.824.494a2.467 2.467 0 00-.658.33l-1.235.494c-.576.165-1.07.247-1.647.412-.164 0-.329.082-.576.082-.494.082-.988.082-1.482.165h-.165c-.576 0-1.152 0-1.728-.083h-.412c-.576-.082-1.07-.164-1.647-.247h-.082c-.576-.164-1.07-.33-1.647-.494-.164-.082-.247-.082-.411-.165-.33-.165-.741-.33-1.07-.494-.165-.082-.33-.165-.412-.247-.33-.165-.577-.412-.906-.577-.082-.082-.247-.165-.33-.247a4.122 4.122 0 00-.905-1.318c-.74-.989-1.07-1.977-.988-2.966l-.329 13.84c0 .989.33 1.977.988 2.966.247.412.576.741.988 1.071.082.082.247.165.33.247.246.247.575.412.905.577.164.082.33.164.411.247.33.165.66.33 1.07.494.165.083.248.083.412.165.083 0 .083.082.165.082.494.165.988.33 1.482.412h.082c.412.083.741.165 1.153.247.165 0 .247 0 .412.083.164 0 .247 0 .411.082.165 0 .247 0 .412.083h1.564c.33 0 .659 0 .988-.083.165 0 .33-.082.494-.082.165 0 .33-.083.576-.083.165 0 .247 0 .412-.082.412-.082.823-.165 1.235-.33l.74-.247.495-.247c.247-.082.494-.165.659-.33l.74-.494c.165-.082.412-.247.577-.33.082-.081.164-.081.164-.164.247-.247.494-.412.741-.659l.165-.165c.082-.164.247-.247.33-.412.164-.164.246-.412.411-.659l4.367-1.79v.509"
                                                        stroke="#000"
                                                        strokeWidth={2}
                                                        strokeMiterlimit={10}
                                                        strokeLinejoin="round"
                                                    />
                                                </g>
                                                <defs>
                                                    <linearGradient
                                                        id="paint1_linear"
                                                        x1={4.39998}
                                                        y1={-3.12735}
                                                        x2={173.527}
                                                        y2={81.0653}
                                                        gradientUnits="userSpaceOnUse"
                                                    >
                                                        <stop stopColor="#00BDFF" />
                                                        <stop offset={1} stopColor="#3DA7CC" />
                                                    </linearGradient>
                                                    <clipPath id="clip1">
                                                        <path
                                                            fill="#fff"
                                                            transform="translate(37.566)"
                                                            d="M0 0H162.435V95.5629H0z"
                                                        />
                                                    </clipPath>
                                                </defs>
                                            </svg>
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
                                    <Swiper id="otherWorksSlider" {...defaultSliderConfig} spaceBetween={20} slidesPerView={3} breakpoints={{
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
                                                <SwiperSlide key={filteredData.node.id}>
                                                   <button className="border-0 bg-transparent" onClick={(): void => {
                                                       navigate(`/OurWork/${filteredData.node.clientName.split(' ').join('-')}_${filteredData.node.projectDisplayName.split(' ').join('-')}`);
                                                   }}>
                                                       <ProjectCard parentClassName="h-100 text-left" projectDisplayName={filteredData.node.projectDisplayName} clientLogo={filteredData.node.clientLogo} clientName={filteredData.node.clientName} city={filteredData.node.city} state={filteredData.node.state} countryCode={filteredData.node.countryCode} sector={filteredData.node.sector as ProjectCateoryType} projectCardDescription={filteredData.node.projectCardDescription} />
                                                   </button>
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

import React from 'react';
import Layout from "../layouts/Layout";
import SubHeader from "../components/servicesHeader/ServicesSubHeader";
import ContentSection from "../components/contentSection/ContentSection";
import AppDevArtwork from '../images/png/appDev.png';

type AppDevSectionProps = {
    location: Location;
}

const AppDev: React.FC<AppDevSectionProps> = ({location}) => {
    return (
        <Layout location={location}>
            <SubHeader location={location} />
            <ContentSection sectionTitle="Customized Application Development" imgSrc={AppDevArtwork} sectionContent={
                <div>
                    <p>
                        We, at Eumentis Cloud, design, build and maintain custom applications that run on any device hosted on premise, cloud or hybrid infrastructure.
                    </p>
                    <p>
                        Over years of experience we have developed our set of frameworks, tools and pipeline that enables us to develop and test enterprise grade application quickly. In cases where our clients have a preference for specific tools, components or packages, we are more than happy and able to accommodate those specifics.
                    </p>
                    <p>
                        We can develop applications from scratch, enhance existing running applications and also help with integration of applications with one another.
                    </p>
                    <ul>
                        <li>iOS & Android application development</li>
                        <li>Web application development</li>
                        <li>Windows application development</li>
                    </ul>
                </div>
            } />
        </Layout>
    )
}

export default AppDev

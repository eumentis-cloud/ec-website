import React from 'react';
import Layout from "../layouts/Layout";
import SubHeader from "../components/servicesHeader/ServicesSubHeader";
import ContentSection from "../components/contentSection/ContentSection";
import StartupsArtwork from '../images/png/startups.png';
import {LocationProps} from "../utils/types";

// FC
const Startups: React.FC<LocationProps> = ({location}) => (
    <Layout location={location}>
        <SubHeader location={location} />
        <ContentSection sectionTitle="Product Development for Startups" imgSrc={StartupsArtwork} sectionContent={
            <div>
                <p>
                    Are you a startup or entrepreneur with an idea for a billion dollar product? Establishing a repeatable and scalable business is all about turning that great idea into a successful product. A development partner can rapidly ramp up a team that has successfully traveled the road many times before and can help you avoid the pitfalls.
                </p>
                <p>
                    Many startups find that they achieve faster and more cost-effective execution using a seasoned product development partner.
                </p>
                <p>
                    We, at Eumentis Cloud, having developed products for several startups are the ideal partners you can have in your startup journey. Our customized approach to product development can address complex technology challenges and meet fast time to market targets.
                </p>
                <ul>
                    <li>Agile software development</li>
                    <li>IT automation and DevOps</li>
                    <li>Cloud infrastructure management and scaling</li>
                </ul>
            </div>
        } />
    </Layout>
)

export default Startups;

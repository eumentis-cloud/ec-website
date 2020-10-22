import React from "react";
import Layout from "../layouts/Layout";
import {LocationProps} from "../utils/types";
import AboutUsHeader from "../components/aboutUsSubHeader/AboutUsHeader";
import ContentSection from "../components/contentSection/ContentSection";
import StoryArtwork from '../images/png/about_story.png';

// FC
const OurStoryOurMission: React.FC<LocationProps> = ({location}) => (
    <Layout location={location}>
        <AboutUsHeader location={location} />
        <ContentSection sectionTitle={`About 'Eumentis Cloud'`} imgSrc={StoryArtwork} sectionContent={
            <>
                <p>
                    At Eumentis Cloud, we love learning and working with the newest and latest technologies - it makes us happy. We use this passion of technology to:
                </p>
                <ul>
                    <li>Help businesses incorporate digital technologies that gives them the competitive edge</li>
                    <li>Help individuals/businesses transform their next-big startup ideas into viable products</li>
                    <li>Help developers in IT companies or startups automate the  manual, repetitive tasks of managing infrastructure and applications</li>
                </ul>
                <p>
                    The primary motivator of going to work, at Eumentis Cloud, is watching the smile that our dedication and hard work puts on the face of our clients.
                </p>
                <h3>Our Mission</h3>
                <p>
                    In this digital age, technology advances exponentially which makes it almost impossible for businesses to keep up. They have to keep up or risk dying out.
                    Our mission is to take the pressure of keeping up with these technological advances away from businesses and individuals and not let the lack of digital
                    technology be a barrier to their growth and success.
                </p>
            </>
        } />
    </Layout>
)

export default OurStoryOurMission;

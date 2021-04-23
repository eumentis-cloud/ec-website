import React from 'react';
import Layout from "../layouts/Layout";
import {LocationProps} from "../utils/types";
import AboutUsHeader from "../components/aboutUsSubHeader/AboutUsHeader";
import ContentSection from "../components/contentSection/ContentSection";
import EumentisArtwork from '../images/png/about_eumentis.png';

// Functional Component
const AboutUs: React.FC<LocationProps> = ({location}): JSX.Element => {
    return (
        <Layout location={location}>
            <AboutUsHeader location={location} />
            <ContentSection sectionTitle="Origins of the name 'Eumentis'" imgSrc={EumentisArtwork} sectionContent={
                <>
                    <p>
                        Eumentis [<i>you-men-tis</i>] was derived by prefixing ‘eu’ to the latin word ‘mentis’.
                    </p>
                    <p>
                        <strong>Eu-</strong> <i>(prefix)</i>
                    </p>
                    <ol>
                        <li>good, well</li>
                        <li>true, genuine</li>
                    </ol>
                    <p>
                        <strong>Mentis</strong> <i>(genitive of mens)</i> | <i>noun in Latin</i>
                    </p>
                    <ol>
                        <li>mind</li>
                        <li>intellect</li>
                        <li>reasoning, judgement</li>
                    </ol>
                    <blockquote className="ec-quote-text">
                        {" "} At Eumentis, we are genuine, of good intellect, have great reasoning and a sound mind; which is
                        portrayed by our name.{" "}
                    </blockquote>
                </>
            } />
        </Layout>
    )
}
export default AboutUs;

import React from 'react';
import Layout from "../layouts/Layout";
import SubHeader from "../components/servicesHeader/ServicesSubHeader";
import DtArtwork from '../images/png/dt.png';
import ContentSection from "../components/contentSection/ContentSection";

type DigitalTransformationSectionProps = {
    location: Location;
}

const DigitalTransformation: React.FC<DigitalTransformationSectionProps> = ({location}) => {
    return (
        <Layout location={location}>
            <SubHeader location={location} />
            <ContentSection imgSrc={DtArtwork} sectionTitle="Digital Transformation" sectionContent={
                <div>
                    <p>
                        Digital transformation represents the opportunity for businesses to think and operate
                        like digital companies
                        in the way they engage their customers, empower their employees, optimize their
                        operations and transform
                        their products. Companies that are doing this are seeing strong results: reduced
                        overhead, conservation of
                        resources, increased profits, and optimized operational efficiencies. Digital
                        transformation is the new strategic
                        imperative—no longer just a handy source of competitive differentiation but a must-do
                        for every company, in every industry, and across every geography.
                    </p>
                    <p>
                        From mobile apps and cloud computing to social media and real-time marketing — and all
                        of the big and small data between them — technology
                        is advancing at an accelerated pace and businesses struggle to keep up with technology
                        and its impact. In today’s growing age of cut-throat competition,
                        businesses must undergo “digital transformation” or risk being shut out of the game.
                    </p>
                    <p>
                        We, at Eumentis Cloud, have an up-to-date knowledge of all recent technologies; ranging
                        from the cloud, Big Data, analytics, artificial intelligence,
                        mobile, IoT and blockchain. This places us at a prime position in helping you with your
                        digital transformation journey.
                    </p>
                </div>}
            />
        </Layout>
    )
}

export default DigitalTransformation

import React from 'react';
import Layout from "../layouts/Layout";
import SubHeader from "../components/servicesHeader/ServicesSubHeader";
import ContentSection from "../components/contentSection/ContentSection";
import DevOpsArtwork from '../images/png/devOps.png';

type DevOpsSectionProps = {
    location: Location;
}

const DevOps: React.FC<DevOpsSectionProps> = ({location}) => {
    return (
        <Layout location={location}>
            <SubHeader location={location} />
            <ContentSection sectionTitle="IT Automation & DevOps" imgSrc={DevOpsArtwork} sectionContent={
                <div>
                    <p>
                        Seventy percent of IT service outages are due to unexpected configuration changes, and as a result, most IT departments spend over 50 percent of their time on repetitive manual maintenance tasks.  When you're spending most of your time being reactive, you've got less time to spend on the work that matters: deploying applications quickly and moving your business ahead. That's where IT automation comes in. Automation enforces consistency across your development, testing and production environments, and ensures you can quickly orchestrate changes.
                    </p>
                    <p>
                        We, at Eumentis Cloud, provide the following services to automate your IT infrastructure:
                    </p>
                    <ul>
                        <li>Cloud infrastructure management</li>
                        <li>Continuous integration</li>
                        <li>Continuous delivery</li>
                        <li>Deployment automation</li>
                        <li>Continuous testing</li>
                        <li>Continuous monitoring</li>
                        <li>Infrastructure as Code (Continuous configuration automation)</li>
                    </ul>
                </div>
            } />
        </Layout>
    )
}

export default DevOps

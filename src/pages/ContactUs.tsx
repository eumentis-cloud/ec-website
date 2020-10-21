import React from "react";
import Layout from "../layouts/Layout";
import ContentSection from "../components/contentSection/ContentSection";
import ContactArtwork from '../images/png/contact.png';
import {LocationProps} from "../utils/types";
import SocialMediaBar from "../components/SocialMediaBar";

const ContactUs: React.FC<LocationProps> = ({location}) => {
    return (
        <Layout location={location}>
            <ContentSection sectionTitle="Contact Information" imgSrc={ContactArtwork} contentClassName="no-justify"
                            sectionContent={
                                <div>
                                    <h3>Pune office (Main)</h3>
                                    <p>
                                        Office 310, Rose Icon Commercial Complex<br />
                                        Pimple Saudagar<br />
                                        Pune - 411027
                                    </p>
                                    <h3>Delhi office</h3>
                                    <p>
                                        833, Sector 14<br />
                                        Gurgaon - 122007<br />
                                    </p>
                                    <h3>Bangalore office</h3>
                                    <p>
                                        F12, Golden Orchid<br />
                                        Lavelle Road<br />
                                        Bangalore - 560001<br />
                                    </p>
                                    <h3>Social media</h3>
                                    <div className="row contact-social-media">
                                       <SocialMediaBar />
                                    </div>
                                </div>
                            }
            />
        </Layout>
    )
}

export default ContactUs;

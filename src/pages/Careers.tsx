import React from 'react';
import {LocationProps} from "../utils/types";
import Layout from "../layouts/Layout";
import '../scss/careers.scss';
import CareersLayout from "../layouts/CareersLayout";
import {Link} from 'gatsby';
import CareersCard from "../components/CareersCard";

// FC
const Careers: React.FC<LocationProps> = ({location}) => {

    return (
        <Layout location={location} className="px-0 mx-0 overflow-hidden">
            <CareersLayout isApplySectionApplicable={false} sectionTitle={'Apply for following available positions with Eumentis Informatics Pvt. Ltd.'} children={
                <section>
                    <div className="career-section-heading text-center pt-2 pb-4 text-dark">Available positions</div>
                    <div className="contents">
                        <div className="row row-cols-1 row-cols-md-3 justify-content-center">
                            <Link to={"/Careers/TechnicalLead/"}>
                                <CareersCard positionName="Technical Lead" department="Technology" />
                            </Link>
                            <Link to="/Careers/SeniorDeveloper/" className="py-4 py-md-0">
                                <CareersCard positionName="Senior Developer" department="Technology" />
                            </Link>
                            <Link to="/Careers/JuniorDeveloper/">
                                <CareersCard positionName="Junior Developer" department="Technology" />
                            </Link>
                        </div>
                    </div>
                </section>
            }  />
        </Layout>
    )
}

export default Careers;

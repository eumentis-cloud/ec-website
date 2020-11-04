import React from 'react';
import {LocationProps} from "../utils/types";
import Layout from "../layouts/Layout";
import '../scss/careers.scss';
import CareersLayout from "../layouts/CareersLayout";
import {Link} from 'gatsby';
import ServicesCard from "../components/servicesCard/ServicesCard";
import Img from '../images/svgAssets/mission.svg';
import ProjectCard from "../components/projectCard/ProjectCard";

// FC
const Careers: React.FC<LocationProps> = ({location}) => {

    return (
        <Layout location={location} className="px-0 mx-0 overflow-hidden">
            <CareersLayout sectionTitle={'Apply for software development positions with Eumentis Informatics Pvt. Ltd.'} children={
                <section>
                    <div className="heading text-center pt-2 pb-4 text-dark">Available positions</div>
                    <div className="contents">
                        <div className="row row-cols-1 row-cols-md-3">
                            <Link to={"/Careers/TechnicalLead/"}>
                                <ProjectCard parentClassName="col mb-4" clientName={'Technical Lead'} />
                            </Link>
                            <Link to="/Careers/SeniorDeveloper/"><ProjectCard parentClassName="col mb-4" clientName={'Senior Developer'} /></Link>
                            <Link to="/Careers/JuniorDeveloper/"><ProjectCard parentClassName="col mb-4" clientName={'Junior Developer'} /></Link>
                        </div>
                    </div>
                </section>
            }  />
        </Layout>
    )
}

export default Careers;

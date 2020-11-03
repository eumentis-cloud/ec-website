import React from 'react';
import {LocationProps} from "../utils/types";
import Layout from "../layouts/Layout";
import '../scss/careers.scss';
import CareersLayout from "../layouts/CareersLayout";
import {Link} from 'gatsby';

// FC
const Careers: React.FC<LocationProps> = ({location}) => {

    return (
        <Layout location={location} className="px-0 mx-0 overflow-hidden">
            <CareersLayout sectionTitle={'Apply for software development positions with Eumentis Informatics Pvt. Ltd.'} children={
                <section>
                    <div className="heading">Available positions</div>
                    <div className="contents">
                        <ul>
                            <li>
                                <Link className="link-for-position" to={'/Careers/SeniorDeveloper/'}>Senior Software Developer</Link>
                            </li>
                            <li>
                                <Link className="link-for-position" to={'/Careers/JuniorDeveloper/'}>Junior Software Developer</Link>
                            </li>
                        </ul>
                    </div>
                </section>
            }  />
        </Layout>
    )
}

export default Careers;

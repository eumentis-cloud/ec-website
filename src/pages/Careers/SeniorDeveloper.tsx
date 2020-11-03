import React from 'react';
import {LocationProps} from "../../utils/types";
import Layout from "../../layouts/Layout";
import '../../scss/careers.scss';
import CareersLayout from '../../layouts/CareersLayout';

// FC
const JuniorDeveloper: React.FC<LocationProps> = ({location}) => {

    return (
        <Layout location={location} className="px-0 mx-0 overflow-hidden">
            <CareersLayout sectionTitle={'Apply for software development positions with Eumentis Informatics Pvt. Ltd.'} children={
                <section>
                    <div className="heading">Available positions</div>
                    <div className="contents">
                        <ul>
                            <li>
                                <a className="link-for-position" href="seniorDeveloper.html"
                                >Senior Software Developer</a
                                >
                            </li>
                            <li>
                                <a className="link-for-position" href="juniorDeveloper.html"
                                >Junior Software Developer</a
                                >
                            </li>
                        </ul>
                    </div>
                </section>
            }  />
        </Layout>
    )
}

export default JuniorDeveloper;

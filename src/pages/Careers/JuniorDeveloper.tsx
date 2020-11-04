import React from 'react';
import {LocationProps} from "../../utils/types";
import Layout from "../../layouts/Layout";
import '../../scss/careers.scss';
import CareersLayout from '../../layouts/CareersLayout';
import {Link} from "gatsby";

// FC
const JuniorDeveloper: React.FC<LocationProps> = ({location}) => {

    return (
        <Layout location={location} className="px-0 mx-0 overflow-hidden">
            <CareersLayout applyLink="https://forms.gle/xgsub4f96Cps7VuM8" sectionTitle={'Apply for Junior Software Developer'} children={
                <>
                    <section>
                        <div className="career-section-heading">About company</div>
                        <div className="contents">
                            At Eumentis Informatics
                            {' '}<Link to={"/"} className="link-for-position">
                            (cloud.eumentis.com)
                        </Link>
                            , we are a team of IIT Delhi graduates with a mission to use technology to solve complex
                            business problems. We
                            <ul>
                                <li>
                                    assist businesses in their Digital Transformation journey by building business
                                    specific web and mobile applications.
                                </li>
                                <li>
                                    assist startups to ideate, conceptualize and build their amazing products
                                </li>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <div className="career-section-heading">Job summary</div>
                        <div className="contents">We are looking for ambitious individuals with a desire to dive deep
                            into web development. Anyone with an inclination to learn, grow & relearn is well suited for
                            our team. We are looking to hire developers with some knowledge of web development and <b>train
                                them</b> in <b>React Native and ReactJS</b>.
                        </div>
                    </section>
                    <section>
                        <div className="career-section-heading">Job responsibilities</div>
                        <div className="contents">
                            <ul>
                                <li>Develop and maintain multiple single page applications and mobile applications
                                    (Android & iOS) in coordination with other developers
                                </li>
                                <li>Build reusable components and front-end libraries for future use</li>
                                <li>Translate designs and wireframes into high-quality code</li>
                                <li>Identify problems documented by customer feedback, test and correct theme</li>
                                <li>Create and maintain software and technical documentation</li>
                                <li>Stay up-to-date with all the emerging technologies/industry trends that can be
                                    integrated into the company’s development pipeline
                                </li>
                                <li>Fix front-end related bugs, performance issues, etc as and when they arise</li>
                                <li>Write well designed, testable, efficient code by using best software development
                                    practices
                                </li>
                                <li>Ensure cross-browser, cross-platform, and cross-device compatibility</li>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <div className="career-section-heading">Candidate requirements</div>
                        <div className="contents">
                            <h6>Must have:</h6>
                            <ul>
                                <li>A Bachelor’s degree with some background in coding, and understanding of data
                                    structures and algorithms
                                </li>
                                <li>Excellent problem solving and analytical skills</li>
                                <li>Good written and oral communication skills - English</li>
                                <li>Eagerness for continuous learning and improvement</li>
                                <li>Ability to understand and learn new libraries/tools/technologies from their official
                                    website and documentation
                                </li>
                            </ul>
                            <h6>Have Some knowledge of:</h6>
                            <ul>
                                <li>HTML5 & CSS3</li>
                                <li>JavaScript</li>
                                <li>Front-end CSS framework Bootstrap (Bootstrap 4 preferred)</li>
                                <li>Code-versioning using Git and Github/Bitbucket</li>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <div className="career-section-heading">Job benefits</div>
                        <div className="contents">
                            <ul>
                                <li>Salary in the range of <b> 1.5-3.5 Lac per annum</b></li>
                                <li>Job location - <b>Pune</b></li>
                                <li>Work on cool startup ideas</li>
                                <li>Fast career growth with unlimited skill development</li>
                                <li>Learn and work on the cutting edge technologies in front-end development such as <b>ReactJS
                                    & React Native</b></li>
                                <li>Tremendous scope to use expertise to solve interesting and wide range of technical
                                    problems
                                </li>
                                <li>Work with and get mentored by a group of highly motivated and experienced
                                    individuals
                                </li>
                                <li>Guaranteed rapid growth in terms of knowledge and technical application.</li>
                                <li>Expand technical knowledge by engaging in online courses, seminars & meetups.</li>
                            </ul>
                        </div>
                    </section>
                </>
            }  />
        </Layout>
    )
}

export default JuniorDeveloper;

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
            <CareersLayout jobPosition="Junior Developer" applyLink="https://forms.gle/xdF2otHGBgZ38v858" sectionTitle={'Apply for Junior Developer'} children={
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
                                <li>Develop multiple single page applications and websites under supervision of technical lead</li>
                                <li>Build reusable components and front-end libraries for future use</li>
                                <li>Translate designs and wireframes into high-quality code</li>
                                <li>Identify problems documented by customer feedback, test and correct theme</li>
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
                            <h5>Primary</h5>
                            <ul>
                                <li>A Bachelor’s degree with some background in coding, and understanding of data
                                    structures and algorithms
                                </li>
                                <li>Excellent problem solving and analytical skills</li>
                                <li>Good written and oral communication skills - English</li>
                                <li>Eagerness for continuous learning and improvement</li>
                            </ul>
                            <h5>Secondary</h5>
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
                                <li>Salary range: <b> 1.5-3.5 Lac per annum</b> (depending on skills)</li>
                                <li>Job location - Work from home (temporary); <b>Pune</b> (permanent)</li>
                                <li>Building cool web and mobile applications usi	ng cutting edge technologies such as React Native and ReactJS
                                </li>
                                <li>Being a part of a rapid growth organization expanding into Machine Learning and AI</li>
                                <li>Using your training experience to solve an interesting and wide range of technical problems</li>
                                <li>Working with a group of highly motivated and experienced individuals</li>
                                <li>Working on unicorn worthy startup ideas</li>
                                <li>Engaging in top online courses, seminars & meetups</li>
                            </ul>
                        </div>
                            <div className="container">
                                <div className="mission">
                                    <div>Our focus is to guide eager learners so that they can lead teams to execute top to
                                        bottom web application development projects on their own in the future.
                                    </div>
                                    <div>So, if you are looking for a place that pays you to learn, become the best in the
                                        industry and be a master of web development, come join us.
                                    </div>
                                </div>
                            </div>
                    </section>
                </>
            }  />
        </Layout>
    )
}

export default JuniorDeveloper;

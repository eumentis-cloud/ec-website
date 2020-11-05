import React from 'react';
import {LocationProps} from "../../utils/types";
import Layout from "../../layouts/Layout";
import '../../scss/careers.scss';
import CareersLayout from '../../layouts/CareersLayout';
import {Link} from "gatsby";

// FC
const TechnicalLead: React.FC<LocationProps> = ({location}) => {

    return (
        <Layout location={location} className="px-0 mx-0 overflow-hidden">
            <CareersLayout applyLink="https://forms.gle/xgsub4f96Cps7VuM8" sectionTitle={'Apply for Technical Lead'} children={
                <>
                <section>
                    <div className="career-section-heading">About company</div>
                    <div className="contents">
                        At Eumentis Informatics
                        {' '}<Link to={"/"} className="link-for-position">
                        (cloud.eumentis.com)
                            </Link>
                        , we are a team of IIT Delhi graduates with a mission to use technology to solve complex business problems. We
                        <ul>
                            <li>
                                assist businesses in their Digital Transformation journey by building business specific web and mobile applications.
                            </li>
                            <li>
                                assist startups to ideate, conceptualize and build their amazing products
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div className="career-section-heading">Job summary</div>
                    <div className="contents">We are looking for ambitious individuals with <b>2+ years</b> experience in <b>React Native</b> looking for a new challenge. We are offering an opportunity to smart developers to make a transition into a more expansive role of Tech Lead. This position is suited for anyone with an inclination to expand their technical skills while managing a team of developers. Being a growth hungry organization, through this position, we are providing a chance for rapid advancement in career trajectory.</div>
                </section>
                <section>
                <div className="career-section-heading">Job responsibilities</div>
                <div className="contents">
                <h6>Primary</h6>
                <ul>
                <li>Guide team of developers to:</li>
                <ul>
                <li>Build mobile and web applications</li>
                <li>Build reusable components and frontend libraries</li>
                <li>Translate designs and wireframes into high-quality code</li>
                <li>Troubleshoot and resolve application bugs</li>
                </ul>
                <li>Evaluate development team’s code and provide constructive feedback</li>
                <li>Manage projects’ code repositories, evaluate and merge pull requests</li>
                <li>In collaboration with Project Managers, define weekly & monthly work targets</li>
                <li>Plan, assign and monitor work to achieve set targets</li>
                <li>Troubleshoot and resolve issues faced by development team</li>
                <li>Strategize and build complex features</li>
                <li>Anticipate and resolve technical challenges during project execution</li>
                <li>Analyze functional specification documents and convert them into detailed JIRA issues</li>
                <li>Manage deployment of mobile and web applications to various environments</li>
                <li>Create and maintain software and technical documentation for projects</li>
                <li>Mentor developers with focus on building a long-term high performing development team</li>
                <li>Evaluate and understand 3rd party libraries, devise methods for integration with 3rd party services, for use in projects</li>
                </ul>
                </div>
                </section>
                <section>
                <div className="career-section-heading">Candidate requirements</div>
                <div className="contents">
                <h6>Must have:</h6>
                <ul>
                <li>A Bachelor’s degree with some background in coding, and understanding of data structures and algorithms</li>
                <li>Excellent problem solving and analytical skills</li>
                <li>Good written and oral communication skills - English</li>
                <li>Eagerness for continuous learning and improvement</li>
                <li>Ability to understand and learn new libraries/tools/technologies from their official website and documentation</li>
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
                <li>Learn and work on the cutting edge technologies in front-end development such as <b>ReactJS & React Native</b></li>
                <li>Tremendous scope to use expertise to solve interesting and wide range of technical problems</li>
                <li>Work with and get mentored by a group of highly motivated and experienced individuals</li>
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

export default TechnicalLead;

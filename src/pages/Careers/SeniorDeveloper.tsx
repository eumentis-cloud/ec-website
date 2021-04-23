import React from 'react';
import {LocationProps} from "../../utils/types";
import Layout from "../../layouts/Layout";
import '../../scss/careers.scss';
import CareersLayout from '../../layouts/CareersLayout';
import {Link} from 'gatsby';

// FC
const JuniorDeveloper: React.FC<LocationProps> = ({location}) => {

    return (
        <Layout location={location} className="px-0 mx-0 overflow-hidden">
            <CareersLayout jobPosition="Senior Developer" applyLink="https://forms.gle/g9ytY14HYS8S4pEN9" sectionTitle={'Apply for Senior Software Developer'} children={
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
                        <div className="contents">We are looking for ambitious individuals with experience in web
                            development.
                            We have a requirement for <b>JavaScript</b> experts who can build & manage web and mobile
                            applications.
                            We are expanding exponentially which provides a great launchpad for career and personal
                            growth.
                            We invite you to be a part of this Digital Transformation journey by building cool and
                            exciting applications.
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
                            <p>Experience of at least 2 end-to-end app development cycles (Wireframing to app
                                deployment)</p>
                            <h6>Must have:</h6>
                            <ul>
                                <li>Knowledge and hands-on experience in following technologies:
                                    <ul>
                                        <li>Javascript ES6/7/8</li>
                                        <li>Node.js and at least one of Express.js/Ember.js/Next.js</li>
                                        <li>At least one of React/Vue.js/Angular/Meteor/Gatsby/jQuery</li>
                                        <li>At least one of React Native/Ionic/Flutter/PhoneGap/Apache Cordova</li>
                                        <li><a className="link-for-position"
                                               href="https://github.com/axios/axios">Axios</a> - HTTP client
                                        </li>
                                        <li>SQL (MySQL, PostgreSQL)/NoSQL (MongoDB, DynamoDB, Apache Cassandra)</li>
                                        <li>At least one of Sequelize/TypeORM/Knex.js</li>
                                    </ul>
                                </li>
                                <li>Code-versioning using Git and Github/Bitbucket</li>
                                <li>Fetching data from RESTful APIs</li>
                                <li>Excellent problem solving and analytical skills</li>
                                <li>Good written and oral communication skills - English</li>
                            </ul>
                            <h6>Have Some knowledge of:</h6>
                            <ul>
                                <li>TypeScript</li>
                                <li><a target="_blank" className="link-for-position" href="https://redux.js.org/">Redux</a> - State
                                    management library
                                </li>
                                <li>UI libraries for React
                                    <li><a target="_blank" className="link-for-position" href="https://material-ui.com/">MATERIAL-UI</a>
                                    </li>
                                    <li><a target="_blank" className="link-for-position" href="https://ant.design/">Ant
                                        Design</a> [antd]
                                    </li>
                                </li>
                                <li>Sass - CSS preprocessor</li>
                                <li>GraphQL and its concepts</li>
                                <li><a target="_blank" className="link-for-position" href="https://www.apollographql.com/docs/react/">Apollo
                                    Client</a> - Javascript front-end client for GraphQL
                                </li>
                                <li>Other tools/technologies: Webpack, NPM, NodeJS, Gulp</li>
                                <li>Cloud platform: AWS (EC2, S3, AppSync, RDS)</li>
                                <li>Project Management tools - JIRA/Asana/Trello/NOTION</li>
                            </ul>
                        </div>
                    </section>
                    <section>
                        <div className="career-section-heading">Job benefits</div>
                        <div className="contents">
                            <ul>
                                <li>Salary in the range of <b>5.5-8.5 Lacs per annum</b> (as per skills)</li>
                                <li>Job location - <b>Pune</b></li>
                                <li>Working on multiple front-end single page applications having various
                                    functionalities
                                </li>
                                <li>Expand knowledge base to become a full stack developer</li>
                                <li>Tremendous scope to use expertise to solve an interesting and wide range of
                                    technical problems
                                </li>
                                <li>Working with a group of highly motivated and experienced individuals</li>
                                <li>Working on the cutting edge technologies in front-end development such
                                    as <b>ReactJS</b></li>
                                <li>Working on cool startup ideas</li>
                                <li>Guaranteed rapid growth in terms of knowledge and technical application.</li>
                                <li>Expand technical knowledge by engaging in online courses, seminars & meetups</li>
                            </ul>
                        </div>
                    </section>
                </>
            }  />
        </Layout>
    )
}

export default JuniorDeveloper;

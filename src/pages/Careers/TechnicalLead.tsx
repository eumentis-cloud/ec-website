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
            <CareersLayout jobPosition="Technical Lead" applyLink="https://forms.gle/gm7hEtfCPW3Nv1N59" sectionTitle={'Apply for Technical Lead'} children={
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
                    <div className="contents">We are looking for ambitious individuals with <b>2+ years</b> experience in <b>React Native</b> & <b>ReactJS</b>looking for a new challenge. We are offering an opportunity to smart developers to make a transition into a more expansive role of Tech Lead. This position is suited for anyone with an inclination to expand their technical skills while managing a team of developers. Being a growth hungry organization, through this position, we are providing a chance for rapid advancement in career trajectory.</div>
                </section>
                <section>
                <div className="career-section-heading">Job responsibilities</div>
                <div className="contents">
                <h5>Primary</h5>
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
                <h5>Secondary</h5>
                <ul>
                <li>Communicate with clients on technical aspects of projects. Provide satisfactory explanation to client’s technical queries</li>
                <li>Assist in hiring and training of new developers</li>
                <li>Research and propose new and more efficient technical upgrades to current development pipeline</li>
                <li>Develop functional React Native and React components for use in multiple projects</li>
                <li>Motivate team members to become better developers & maintain positive spirit within the team</li>
                <li>Assist in building project proposals by providing accurate time and effort estimates, and execution strategy</li>
                </ul>
                </div>
                </section>
                <section>
                <div className="career-section-heading">Candidate requirements</div>
                <div className="contents">
                <h5>Primary</h5>
                <ul>
                <li>Candidate must have at least <b>two years</b> of experience and have executed at least <b>two</b> major projects, working with <b>React Native & ReactJS</b> each</li>
                <li>A bachelor’s degree in engineering is preferred with MOOCs in web development being a big positive</li>
                <li>Candidate must have knowledge and hands on experience in following technologies:</li>
                <ul>
                    <li>React Native (both iOS and Android)</li>
                    <li>ReactJS (along with Hooks & Context)</li>
                    <li>HTML5 & CSS3</li>
                    <li>TypeScript (with React & React Native)</li>
                    <li>JavaScript</li>
                    <li>Front-end CSS framework Bootstrap</li>
                </ul>
                <li>Code-versioning using Git and Github/Bitbucket</li>
                <li>Fetching data from RESTful APIs</li>
                <li>Experience in Agile Scrum Methodology</li>
                <li>Experience in project management tools like: JIRA, Asana, Trello, etc.</li>
                <li>Excellent problem solving and analytical skills</li>
                <li>Good written and oral communication skills - English</li>
                <li>Eagerness for continuous learning and improvement</li>
                <li>Adaptable to new working environments and processes</li>
                <li>Good time management skills and multi-tasking ability</li>
                <li>Ability to successfully execute assigned responsibilities as mentioned above</li>
                </ul>
                <h5>Secondary</h5>
                <ul>
                <li>Experience in managing small development teams</li>
                <li>UI libraries for React</li>
                <ul>
                    <li><a href="https://material-ui.com/">Material-UI</a></li>
                    <li><a href="https://ant.design/docs/react/introduce">Ant Design</a></li>
                    </ul>
                <li>Creating a backend web server with NodeJS and Express (or any other web framework for Node)</li>
                <li>GraphQL and its concepts (schema, types, queries, mutations, etc.)</li>
                <ul>
                    <li><a href="https://www.apollographql.com/docs/react/">Apollo Client</a> - Javascript front-end client for GraphQL</li>
                    <li><a href="https://www.apollographql.com/docs/apollo-server/">Apollo Server</a> - GraphQL server in NodeJS</li>
                    <li><a href="https://hasura.io/">Hasura</a> - A managed GraphQL server on PostgreSQL</li>
                </ul>
                <li>Firebase (Cloud Firestore, Authentication, Cloud Storage & Cloud Functions)</li>
                <li>Testing React components using Jest & React Testing Library</li>
                <li>Other tools/technologies: Webpack, Parcel, NPM, Yarn, Gulp, etc.</li>
                <li>Experience in building CI/CD pipeline for Web and Mobile environments</li>
                <li>AWS</li>
                <li>Any SQL database (PostgreSQL is preferred)</li>
                <li>Sass - CSS preprocessor</li>
                </ul>
                <div>The secondary skills can be offset by a candidate's desire to learn new technologies and passion for coding. We are looking for a teammate who can take ownership of their work and flourish with minimal supervision.</div>
                </div>
                </section>
                <section>
                <div className="career-section-heading">Job benefits</div>
                <div className="contents">
                <ul>
                <li>Salary range:<b> 12-20 Lac per annum</b> (depending on skills and experience)</li>
                <li>Job location - Work from home (temporary); <b>Pune</b> (permanent)</li>
                <li>Expanding technical skills by getting to learn multiple backend and frontend technologies</li>
                <li>Managing team and making the transition from a developer to a project owner</li>
                <li>Getting paid to receive on the job training of a management degree and taking the next big step in your career</li>
                <li>Building cool web and mobile applications and being witness to our client’s Digital Transformation journey</li>
                <li>Getting to work on interesting, challenging, and unicorn worthy startup ideas</li>
                <li>Work with and get mentored by a group of highly motivated and experienced individuals</li>
                <li>Guaranteed rapid growth in terms of knowledge and technical application</li>
                </ul>
                </div>
                <div className="container">
                                <div className="mission">
                                    <div>Our focus is to get developers who have the ambition and ability to grow and mature into more leadership roles with a solid technical base.
                                    </div>
                                    <div>If you feel you are the right fit, please <a href="https://forms.gle/HscMQmRiwpeQN5h29">apply here</a>.
                                    </div>
                                </div>
                            </div>
                </section>
                </>
            }  />
        </Layout>
    )
}

export default TechnicalLead;

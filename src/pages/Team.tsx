import React from 'react';
import Layout from "../layouts/Layout";
import SubHeader from "../components/aboutUsSubHeader/AboutUsHeader";
import {graphql} from "gatsby";
import TeamMember from "../components/teamTile/TeamMember";
import './team.scss'

// Team page props
type TeamDataType = {
    // accessing typescript location object
    location: Location;
    // team members csv data
    data: {
        allEcTeamDataCsv: {
            edges: Array<{
                node: {
                    // unique id for each team member
                    id: string;
                    // team member name
                    name: string;
                    // team member job role
                    role: string;
                    // team member academics
                    academics: string;
                    // team member profile photo with file extension
                    profile_pic: string;
                }
            }>
        }
    }
}

// Functional Component
const Team: React.FC<TeamDataType> = ({location, data}) => {
    return (
        <Layout location={location}>
            <SubHeader location={location} />
            <section className="page-content-container">
                <h1 className="page-title">Meet our team</h1>
                <div className="container">
                    <div id="page-content-section" className="row">
                        <div id="page-content" className="col-12" style={{paddingTop: 0}}>
                            <p>
                                We are a small team of highly talented individuals with degrees from leading colleges.
                                The team is a mix of childhood and college friends.
                                Therefore, there is an excellent bonding, understanding and communication among the team
                                members.
                                Each member of the team excels in different domain, so we take on only a few projects at
                                a time to ensure that we give our 100% to each and every client and project.
                            </p>
                            <h4 className="section-title text-center py-4">
                                Core Team
                            </h4>
                            <div className="row">
                                {data && data.allEcTeamDataCsv && data.allEcTeamDataCsv.edges && Array.isArray(data.allEcTeamDataCsv.edges) && data.allEcTeamDataCsv.edges.filter((items) => {
                                    return items.node
                                }).filter((entries) => entries.node.academics).map((item): JSX.Element => (
                                    <TeamMember key={item.node.id} name={item.node.name} role={item.node.role} academics={item.node.academics} profile_pic={item.node.profile_pic} />
                                ))}
                            </div>
                            <h4 className="section-title text-center py-5">
                                Developers
                            </h4>
                            <div className="row">
                                {data && data.allEcTeamDataCsv && data.allEcTeamDataCsv.edges && Array.isArray(data.allEcTeamDataCsv.edges) && data.allEcTeamDataCsv.edges.filter((items) => {
                                    return items.node && !items.node.academics
                                }).map((item): JSX.Element => (
                                    <TeamMember key={item.node.id} name={item.node.name} role={item.node.role} academics={item.node.academics} profile_pic={item.node.profile_pic} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </Layout>
    )
}

export default Team

// fetching team CSV data and converting into JSON data array
export const TeamDataQuery = graphql`
    query {
        allEcTeamDataCsv {
            edges {
                node {
                    id
                    name
                    role
                    profile_pic
                    academics
                }
            }
        }
    }
`;

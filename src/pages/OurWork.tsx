import React from "react";
import Layout from "../layouts/Layout";
import {AllClientsDataType, LocationProps, ProjectCateoryType} from "../utils/types";
import ProjectCard from "../components/projectCard/ProjectCard";
import {useStaticQuery, graphql} from "gatsby";

// FC
const OurWork: React.FC<LocationProps> = ({location}) => {

    const allClientsData: AllClientsDataType = useStaticQuery(graphql`
        query {
            allClientsDataCsv {
                edges {
                    node {
                        id
                        projectDisplayName
                        clientLogo
                        clientName
                        city
                        state
                        countryCode
                        projectCategory
                        projectCardDescription
                    }
                }
            }
        }

    `)

    return (
        <Layout location={location}>
            <section className="wrap py-1 container-fluid px-md-5 page-content-container">
                <h1 className="page-title">
                    Showcasing our top projects
                </h1>
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        allClientsData.allClientsDataCsv.edges.map((data) => (
                            <ProjectCard key={data.node.id} projectDisplayName={data.node.projectDisplayName} clientLogo={data.node.clientLogo} clientName={data.node.clientName} city={data.node.city} state={data.node.state} countryCode={data.node.countryCode} projectCategory={data.node.projectCategory as ProjectCateoryType} projectCardDescription={data.node.projectCardDescription} />
                        ))
                    }
                </div>
            </section>
        </Layout>
    )
}

export default OurWork;

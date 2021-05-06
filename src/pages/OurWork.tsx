import React from 'react';
import Layout from '../layouts/Layout';
import { AllClientsDataType, LocationProps, ProjectCateoryType } from '../utils/types';
import ProjectCard from '../components/projectCard/ProjectCard';
import { useStaticQuery, graphql, Link } from 'gatsby';

// FC
const OurWork: React.FC<LocationProps> = ({ location }) => {
  // fetching data for client project cards
  const { allClientsDataCsv }: AllClientsDataType = useStaticQuery(graphql`
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
            sector
            projectCardDescription
          }
        }
      }
    }
  `);

  return (
    <Layout location={location}>
      <section className="wrap py-1 container-fluid page-content-container">
        <h1 className="page-title">Showcasing our top projects</h1>
        <div className="row row-cols-1 row-cols-md-4 me-md-5 me-lg-5 me-xl-5 justify-content-center">
          {allClientsDataCsv.edges.map((data) => (
            <Link
              className="col mx-md-3 mx-lg-3 mx-xl-3 mb-4 project-card-link"
              key={data.node.id}
              to={
                data.node.clientName === 'Drona Lectures' || data.node.clientName === 'VendR'
                  ? '/OurWork/'
                  : `${data.node.clientName
                      .split(' ')
                      .join('-')}_${data.node.projectDisplayName.split(' ').join('-')}`
              }
            >
              <ProjectCard
                location={location}
                projectDisplayName={data.node.projectDisplayName}
                clientLogo={data.node.clientLogo}
                clientName={data.node.clientName}
                city={data.node.city}
                state={data.node.state}
                countryCode={data.node.countryCode}
                sector={data.node.sector as ProjectCateoryType}
                projectCardDescription={data.node.projectCardDescription}
              />
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default OurWork;

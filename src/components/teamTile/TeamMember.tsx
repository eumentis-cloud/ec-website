import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import './teamMember.scss'
import GatsbyImage  from 'gatsby-image'
import {FluidImageType} from "../../utils/types";

// team member component props
type TeamMemberTileProps = {
  // team member name
  name: string
  // team member job role
  role: string;
  // team member academic details (for core team members)
  academics: string;
  // team member profile_pic name
  profile_pic: string
}

// Functional Component
const TeamMember: React.FC<TeamMemberTileProps> = ({
  name,
  role,
  academics,
  profile_pic,
}) => {

  // fetching team profile pic data and converting into JSON data array
  const imageData: FluidImageType = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { regex: "/(jpg)|(png)|(jpeg)/" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="col-12 col-md-6 col-xl-4 team-member">
      {imageData &&
        imageData.allFile &&
        imageData.allFile.edges &&
        imageData.allFile.edges.length > 0 &&
        imageData.allFile.edges
          .filter((entries): boolean => {
            return entries && entries.node && entries.node.base === profile_pic
          })
          .map((item): JSX.Element => (
            <GatsbyImage
              key={item.node.base}
              fluid={item.node.childImageSharp.fluid}
              imgStyle={{
                clipPath: 'circle(7.6rem at center)',
                padding: '3rem',
              }}
              alt={name}
            />
          ))}
      <h4>{name}</h4>
      <h5 className="core-team-college">{academics}</h5>
      <h5>{role}</h5>
    </div>
  )
}

export default TeamMember

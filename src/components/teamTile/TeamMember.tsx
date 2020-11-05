import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import './teamMember.scss'
import GatsbyImage  from 'gatsby-image'
import {FixedImageType} from "../../utils/types";

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
  const imageData: FixedImageType = useStaticQuery(graphql`
    query {
      allFile(filter: {extension: {regex: "/(jpg)|(png)|(jpeg)/"}, absolutePath: {regex: "/team/"}}) {
        edges {
          node {
            base
            childImageSharp {
              fixed(width: 307, height: 307) {
                aspectRatio
                base64
                src
                srcSet
                width
                height
              }
            }
          }
        }
      }
    }
  `)

  return (
        <div className="col-12 col-md-6 col-xl-4 team-member">
            {imageData && imageData.allFile.edges.length > 0 &&
            imageData.allFile.edges
                .filter((entries): boolean => {
                    return entries.node.base === profile_pic
                })
                .map((item): JSX.Element => (
                    <GatsbyImage
                        className="mb-2"
                        key={item.node.base}
                        fixed={item.node.childImageSharp.fixed}
                        imgStyle={{
                            clipPath: 'circle(40%)',
                            padding: '1.5rem',
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

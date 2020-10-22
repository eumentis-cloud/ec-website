import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {AllClientsDataType} from "../utils/types";

// FC props
type TopClientsCountrySliderProps = {
    // get base image name from allFile query to fetch top clients images
    baseImg: string;
}

// FC component
const TopClientsCountrySlider: React.FC<TopClientsCountrySliderProps> = ({baseImg}) => {

    // fetching top client's country and logo data
    const topClientsData: AllClientsDataType = useStaticQuery(graphql`
        query {
            allClientsDataCsv {
                edges {
                    node {
                        id
                        countryName
                        clientLogo
                    }
                }
            }
        }
    `);

    return (
        <>
            {topClientsData.allClientsDataCsv.edges.filter((item, index) => {
                return item.node.clientLogo === baseImg;
            }).splice(0,1).map((data): JSX.Element => (
                <h4 key={data.node.id}>{data.node.countryName}</h4>
            ))}
        </>
    )
};

export default TopClientsCountrySlider;

import React from 'react';
import {navigate} from "gatsby";
import {LocationProps} from "../../utils/types";
import SubHeaderTab from "../SubHeaderTab";
import BulbLogo from '../../images/svgAssets/bulb.svg';
import MissionLogo from '../../images/svgAssets/mission.svg';
import TeamLogo from '../../images/svgAssets/team.svg';

// Functional Component
const SubHeader: React.FC<LocationProps> = ({location}) => {
    return (
        <nav className="row justify-content-center secondary-nav">
            <SubHeaderTab gridStyle="col-4 col-md-3 col-xl-2" location={location} route={"/AboutUs/"} tabTitle={"About Eumentis"} logo={<BulbLogo />} />
            <SubHeaderTab gridStyle="col-4 col-md-3 col-xl-2" location={location} route={"/OurStoryOurMission/"} tabTitle={"Our Story & Mission"} logo={<MissionLogo />} />
            <SubHeaderTab gridStyle="col-4 col-md-3 col-xl-2" location={location} route={"/Team/"} tabTitle={"Our Team"} logo={<TeamLogo />} />
        </nav>
    )
}

export default SubHeader;

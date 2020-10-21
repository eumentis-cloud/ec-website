import React from 'react';
import {LocationProps} from "../../utils/types";
import SubHeaderTab from "../SubHeaderTab";
import DtLogo from '../../images/svgAssets/dt.svg';
import StartupsLogo from '../../images/svgAssets/startups.svg';
import DevOpsLogo from '../../images/svgAssets/devops.svg';
import AppDevLogo from '../../images/svgAssets/appDev.svg';


const ServicesSubHeader: React.FC<LocationProps> = ({location}) => {
    return (
       <nav className="row justify-content-center secondary-nav">
           <SubHeaderTab location={location} route="/DigitalTransformation/" tabTitle="DT" logo={<DtLogo />} gridStyle="col-3" />
           <SubHeaderTab location={location} route="/Startups/" tabTitle="Startups" logo={<StartupsLogo />} gridStyle="col-3" />
           <SubHeaderTab location={location} route="/DevOps/" tabTitle="DevOps" logo={<DevOpsLogo />} gridStyle="col-3" />
           <SubHeaderTab location={location} route="/AppDev/" tabTitle="App Dev" logo={<AppDevLogo />} gridStyle="col-3" />
       </nav>
    )
}

export default ServicesSubHeader;

import React from "react";
import {navigate} from "gatsby";
import {LocationProps} from "../utils/types";

type AboutUsHeaderTabProps = {
    // current route
    route: string;
    // sub header tab title
    tabTitle: string;
    // sub header tab logo
    logo: JSX.Element;
    // 
    gridStyle: string;
}

// FC
const SubHeaderTab: React.FC<AboutUsHeaderTabProps & LocationProps> = ({location, gridStyle, route, tabTitle, logo}) => (
    <div className={`${gridStyle} secondary-nav-item ${location.pathname === route ? 'secondary-nav-item-active' : ''}`} onClick={(): void => {
        navigate(route);
    }}>
        {logo}
        <h4 className="secondary-nav-item-title">{tabTitle}</h4>
    </div>
)

export default SubHeaderTab

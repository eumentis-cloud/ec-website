import React from "react";
import {navigate} from "gatsby";

type AboutUsHeaderTabProps = {
    location: Location;
    route: string;
    tabTitle: string;
    logo: JSX.Element;
    gridStyle: string;
}

const SubHeaderTab: React.FC<AboutUsHeaderTabProps> = ({location, gridStyle, route, tabTitle, logo}) => {
    return (
        <div className={`${gridStyle} secondary-nav-item ${location.pathname === route ? 'secondary-nav-item-active' : ''}`} onClick={(): void => {
            navigate(route);
        }}>
            {logo}
            <h4 className="secondary-nav-item-title">{tabTitle}</h4>
        </div>
    )
}

export default SubHeaderTab

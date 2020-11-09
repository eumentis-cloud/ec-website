import React from 'react';
import LocationIcon from "../images/svgAssets/location.svg";
import TechnologyDeptLogo from '../images/svgAssets/tech_dept.svg';

type CareersCardProps = {
    // job role name
    positionName: string;
    // job dept
    department: string;
}

// Functional Component
const CareersCard: React.FC<CareersCardProps> = ({ positionName, department}) => {
    return (
        <div className="col md-4">
            <div className="card work-card h-100">
                <TechnologyDeptLogo />
                <div className="card-body ml-1">
                        <h5 className="d-block text-wrap careers-card-title border-0">
                        <span style={{borderBottom: '.35rem solid'}} className="border-warning">
                            {positionName}
                        </span>
                        </h5>
                    <div className="d-flex align-items-baseline pt-3 pb-2">
                        <LocationIcon />
                        <span className="card-subtitle careers-card-subtitle mb-2 text-muted pl-2"><b className="text-black">WFH</b> (Temporarily) | <b className="text-black">Pune</b> (Permanent)</span>
                    </div>
                    <span className={`badge rounded-pill bg-warning py-2 px-4 mb-2 text-black text-black`}>{department}</span>
                </div>
            </div>
        </div>
    )
}

export default CareersCard;

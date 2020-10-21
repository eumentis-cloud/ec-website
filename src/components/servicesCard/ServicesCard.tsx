import React from 'react';
import {Link} from 'gatsby';

type ServicesCardProps = {
    title: string;
    description: string;
    img: any;
    navigateTo: string;
}

// Functional component
const ServicesCard: React.FC<ServicesCardProps> = ({title, description, img, navigateTo}) => {
    return (
        <div className="col-6 col-md-6 service-box">
            <Link to={navigateTo}>
                <div className="service-box-container">
                    {img}
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </Link>
        </div>
    )
}

export default ServicesCard

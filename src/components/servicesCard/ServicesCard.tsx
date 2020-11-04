import React from 'react';
import {Link} from 'gatsby';

type ServicesCardProps = {
    title: string;
    description?: string;
    img: any;
    navigateTo: string;
    className?: string;
}

// Functional component
const ServicesCard: React.FC<ServicesCardProps> = ({title, description, img, navigateTo, className= 'col-6 col-md-6 service-box'}) => {
    return (
        <div className={className}>
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

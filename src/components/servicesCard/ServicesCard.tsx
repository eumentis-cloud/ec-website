import React from 'react';
import {Link} from 'gatsby';

type ServicesCardProps = {
    // service card title
    title: string;
    // service card desc
    description?: string;
    // service card logo
    img: any;
    // service card link
    navigateTo: string;
    // parent container css class
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

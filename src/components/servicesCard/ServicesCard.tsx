import React from 'react';
import { Link } from 'gatsby';

type ServicesCardProps = {
  // service card title
  title: string;
  // service card desc
  description?: string;
  // service card logo
  img: any;
  // service card link
  navigateTo?: string;
  // parent container css class
  className?: string;
  // whether page is redirected to an external link
  hasExternalLink?: boolean;
  // url to external link
  externalURL?: string;
};

// Functional component
const ServicesCard: React.FC<ServicesCardProps> = ({
  title,
  description,
  img,
  navigateTo,
  className = 'col-6 col-md-6 service-box',
  hasExternalLink,
  externalURL,
}) => (
  <div className={className}>
    {hasExternalLink ? (
      <a href={externalURL} target="_blank" rel="noopener noreferrer">
        <div className="service-box-container">
          {img}
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </a>
    ) : (
      <Link to={navigateTo as string}>
        <div className="service-box-container">
          {img}
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </Link>
    )}
  </div>
);

export default ServicesCard;

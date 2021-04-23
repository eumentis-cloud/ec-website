import React from 'react'
import { Link } from 'gatsby'
import './header.scss'
import CaretIcon from '../../images/svgAssets/caret-up.svg';
import {LocationProps} from "../../utils/types";

// Functional Component
const Header: React.FC<LocationProps> = ({ location }) => {
  return (
    <nav
      id="primary-nav"
      className="row justify-content-center yellow-triangle"
    >
        <Link to={"/"} className={`col-auto primary-nav-item ${
            location.pathname === '/' ? 'primary-nav-active' : ''
        }`}>
          <span className="nav-item">Home</span>
        {location.pathname === '/' ?
            <div style={{top: '1.65rem', paddingLeft: 8, position: 'absolute', fontSize: '1.2rem', color: '#FFF'}}>
              <CaretIcon />
            </div> : null}
        </Link>
      <Link to={"/Services/DigitalTransformation/"} className={`col-auto primary-nav-item ${location.pathname === '/Services/DigitalTransformation/' || location.pathname === '/Services/AppDev/' || location.pathname === '/Services/DevOps/' || location.pathname === '/Services/Startups/' ? 'primary-nav-active' : ''}`}>
        <span className="nav-item">Our Services</span>
        {location.pathname === '/Services/DigitalTransformation/' || location.pathname === '/Services/AppDev/' || location.pathname === '/Services/Startups/' || location.pathname === '/Services/DevOps/' ?
            <div style={{top: '1.65rem', paddingLeft: 28, position: 'absolute', fontSize: '1.2rem', color: location.pathname === '/Services/Startups/' ? '#FFF' : '#FFFF66' }}>
              <CaretIcon />
            </div> : null
        }
      </Link>

      <Link
          to={"/OurWork/"}
          className={`col-auto primary-nav-item ${
              location.pathname === '/OurWork/' ? 'primary-nav-active' : ''
          }`}
      >
        <span className="nav-item">Our Work</span>
        {location.pathname === '/OurWork/' ?
            <div style={{top: '1.65rem', paddingLeft: 16, position: 'absolute', fontSize: '1.2rem', color: '#FFF'}}>
              <CaretIcon />
            </div> : null}
      </Link>

      <Link
        to={'/AboutUs/'}
        className={`col-auto primary-nav-item ${
          location.pathname === '/AboutUs/' || location.pathname === '/OurStoryOurMission/' || location.pathname === '/Team/' ? 'primary-nav-active' : ''
        }`}
      >
          <span className="nav-item">About Us</span>
        {location.pathname === '/AboutUs/' ?
            <div style={{top: '1.65rem', paddingLeft: 14, position: 'absolute', fontSize: '1.2rem', color: '#FFFF66'}}>
              <CaretIcon />
            </div> : null}
      </Link>

      <Link
          to={'/Careers/'}
          className={`col-auto primary-nav-item ${
              location.pathname === '/Careers/' ? 'primary-nav-active' : ''
          }`}
      >
        <span className="nav-item">Careers</span>
        {location.pathname === '/Careers/' ?
            <div style={{top: '1.65rem', paddingLeft: 12, position: 'absolute', fontSize: '1.2rem', color: '#FFFF66'}}>
              <CaretIcon />
            </div> : null}
      </Link>

      <Link
        to={'/ContactUs/'}
        className={`col-auto primary-nav-item ${
          location.pathname === '/ContactUs/' ? 'primary-nav-active' : ''
        }`}
      >
        <span className="nav-item">Contact Us</span>
        {location.pathname === '/ContactUs/' ?
            <div style={{top: '1.65rem', paddingLeft: 18, position: 'absolute', fontSize: '1.2rem', color: '#FFF'}}>
              <CaretIcon />
            </div> : null}
      </Link>
    </nav>
  )
}

export default Header;

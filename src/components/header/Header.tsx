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
      <div
        className={`col-auto primary-nav-item ${
          location.pathname === '/' ? 'primary-nav-active' : ''
        }`}
      >
          <Link className="nav-item" activeClassName="nav-item active" to={'/'}>Home</Link>
        {location.pathname === '/' ?
            <div style={{top: '1.65rem', paddingLeft: 8, position: 'absolute', fontSize: '1.2rem', color: '#FFF'}}>
              <CaretIcon />
            </div> : null}
      </div>
      <div className={`col-auto primary-nav-item ${location.pathname === '/Services/DigitalTransformation/' ? 'primary-nav-active' : ''}`}>
        <Link to={"/Services/DigitalTransformation/"} className="nav-item" activeClassName="nav-item active">Our Services</Link>
        {location.pathname === '/Services/DigitalTransformation/' || location.pathname === '/Services/AppDev/' || location.pathname === '/Services/Startups/' || location.pathname === '/Services/DevOps/' ?
            <div style={{top: '1.65rem', paddingLeft: 28, position: 'absolute', fontSize: '1.2rem', color: location.pathname === '/Services/Startups/' ? '#FFF' : '#FFFF66' }}>
              <CaretIcon />
            </div> : null
        }
      </div>

      <div
          className={`col-auto primary-nav-item ${
              location.pathname === '/OurWork/' ? 'primary-nav-active' : ''
          }`}
      >
        <Link className="nav-item" activeClassName="nav-item active" to={'/OurWork/'}>Our Work</Link>
        {location.pathname === '/OurWork/' ?
            <div style={{top: '1.65rem', paddingLeft: 16, position: 'absolute', fontSize: '1.2rem', color: '#FFF'}}>
              <CaretIcon />
            </div> : null}
      </div>

      <div
        className={`col-auto primary-nav-item ${
          location.pathname === '/AboutUs/' || location.pathname === '/OurStoryOurMission/' || location.pathname === '/Team/' ? 'primary-nav-active' : ''
        }`}
      >
          <Link className="nav-item" activeClassName="nav-item active" to={'/AboutUs/'}>About Us</Link>
        {location.pathname === '/AboutUs/' ?
            <div style={{top: '1.65rem', paddingLeft: 14, position: 'absolute', fontSize: '1.2rem', color: '#FFFF66'}}>
              <CaretIcon />
            </div> : null}
      </div>
      <div
        className={`col-auto primary-nav-item ${
          location.pathname === '/ContactUs/' ? 'primary-nav-active' : ''
        }`}
      >
        <Link className="nav-item" activeClassName="nav-item active" to={'/ContactUs/'}>Contact Us</Link>
        {location.pathname === '/ContactUs/' ?
            <div style={{top: '1.65rem', paddingLeft: 18, position: 'absolute', fontSize: '1.2rem', color: '#FFF'}}>
              <CaretIcon />
            </div> : null}
      </div>
    </nav>
  )
}

export default Header

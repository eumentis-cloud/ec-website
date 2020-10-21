import React from 'react'
import { Link } from 'gatsby'
import './header.scss'

// header component props
type HeaderProps = {
  // accessing typescript location object
  location: Location
}

// Functional Component
const Header: React.FC<HeaderProps> = ({ location }: HeaderProps) => {
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
      </div>

      <div
        className={`col-auto primary-nav-item ${
          location.pathname === '/AboutUs/' ? 'primary-nav-active' : ''
        }`}
      >
          <Link className="nav-item" activeClassName="nav-item active" to={'/AboutUs/'}>About Us</Link>
      </div>
      <div
        className={`col-auto primary-nav-item ${
          location.pathname === '/OurWork/' ? 'primary-nav-active' : ''
        }`}
      >
        <Link className="nav-item" activeClassName="nav-item active" to={'/OurWork/'}>Our Work</Link>
      </div>
      <div
        className={`col-auto primary-nav-item ${
          location.pathname === '/ContactUs/' ? 'primary-nav-active' : ''
        }`}
      >
        <Link className="nav-item" activeClassName="nav-item active" to={'/ContactUs/'}>Contact Us</Link>
      </div>
    </nav>
  )
}

export default Header

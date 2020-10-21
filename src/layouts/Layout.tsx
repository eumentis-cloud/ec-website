import React  from 'react'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import 'font-awesome/css/font-awesome.css'
import "../scss/globals.scss";

// Layout Props
interface LayoutProps {
    // child JSX elements
    children?: React.ReactNode
    // accessing typescript location object
    location: Location
}

// Functional Component
const Layout: React.FC<LayoutProps> = ({ children, location }: LayoutProps) => {

    return (
        <div>
            <div id="primary-container" className="container-fluid">
                <Header location={location} />
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout

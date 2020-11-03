import React  from 'react'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import 'font-awesome/css/font-awesome.css'
import "../scss/globals.scss";
import {LocationProps} from "../utils/types";

// Layout Props
interface LayoutProps {
    // child JSX elements
    children?: React.ReactNode;
    // other classNames
    className?: string;
}

// Functional Component
const Layout: React.FC<LayoutProps & LocationProps> = ({ children, location, className = 'container-fluid' }) => {

    return (
        <>
            <div id="primary-container" className={className}>
                <Header location={location} />
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Layout

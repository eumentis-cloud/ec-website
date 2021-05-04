import React from "react";
import LinkedinLogo from "../images/png/social_linkedin.png";
import GithubLogo from "../images/png/social_github.png";
import FacebookLogo from "../images/png/social_facebook.png";
import TwitterLogo from "../images/png/social_twitter.png";
import MediumLogo from '../images/png/social_medium.png';

// FC
const SocialMediaBar: React.FC = () => {
    return (
            <>
                <div className="col-auto">
                    <a href="https://linkedin.com/company/eumentis">
                        <img src={LinkedinLogo} alt="LinkedIn" className="social-media-icon" />
                    </a>
                </div>
                <div className="col-auto"><a href="https://github.com/eumentis-cloud">
                    <img src={GithubLogo} alt="Github" className="social-media-icon" /></a>
                </div>
                <div className="col-auto"><a href="https://facebook.com/cloud.eumentis">
                    <img src={FacebookLogo} alt="Facebook" className="social-media-icon" /></a>
                </div>
                <div className="col-auto">
                    <a href="https://twitter.com/eumentis_cloud">
                        <img src={TwitterLogo} alt="Twitter" className="social-media-icon" />
                    </a>
                </div>
                <div className="col-auto">
                    <a href="https://medium.com/eumentis-cloud">
                        <img src={MediumLogo} alt="Medium" className="social-media-icon" />
                    </a>
                </div>
            </>
    )
}

export default SocialMediaBar;

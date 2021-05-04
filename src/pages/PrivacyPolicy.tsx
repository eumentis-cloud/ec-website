import React from 'react';
import { LocationProps } from '../utils/types';
import Layout from '../layouts/Layout';
import '../scss/globals.scss';
import LinkedinLogo from '../images/png/social_linkedin.png';
import GoogleLogo from '../images/png/social_google.png';
import FbLogo from '../images/png/social_facebook.png';
import BingLogo from '../images/jpg/social_bing.jpg';

// functional component
const PrivacyPolicy: React.FC<LocationProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <section className="section-container">
        <div className="container-fluid">
          <h2 className="fs-1 text-center font-weight-bold">Eumentis Privacy Policy</h2>
          <p className="container text-center">
            This Privacy Policy describes how your personal information is collected, used, and
            shared when you visit or make a purchase from{' '}
            <a href="www.eumentis.com">www.eumentis.com</a> (the “Site”).
          </p>
          <div className="row justify-content-center mt-4">
            <div className="col-lg-9">
              <div className="card shadow rounded-3 border">
                <div className="card-body">
                  <h5 className="card-title border-bottom pb-2">PERSONAL INFORMATION WE COLLECT</h5>
                  <p className="text-muted">
                    When you visit the Site, we automatically collect certain information about your
                    device, including information about your web browser, IP address, time zone, and
                    some of the cookies that are installed on your device. Additionally, as you
                    browse the Site, we collect information about the individual web pages or
                    products that you view, what websites or search terms referred you to the Site,
                    and information about how you interact with the Site. We refer to this
                    automatically collected information as “<b>Device Information.</b>”
                  </p>
                  <h5 className="card-title text-uppercase">
                    We collect Device Information using the following technologies:
                  </h5>
                  <ul className="list-unstyled pt-3 border-top">
                    <li className="h6 text-muted mb-3">
                      “<b className="text-dark">Cookies</b>” are data files that are placed on your
                      device or computer and often include an anonymous unique identifier. For more
                      information about cookies, and how to disable cookies, visit
                      <a href="http://www.allaboutcookies.org"> http://www.allaboutcookies.org </a>.
                    </li>
                    <li className="h6 text-muted mb-3">
                      “<b className="text-dark">Log files</b>” track actions occurring on the Site,
                      and collect data including your IP address, browser type, Internet service
                      provider, referring/exit pages, and date/time stamps.
                    </li>
                    <li className="h6 text-muted mb-3">
                      “<b className="text-dark">Web beacons</b>”, “<b className="text-dark">Tags</b>
                      ”, “<b className="text-dark">Pixels</b>” are electronic files used to record
                      information about how you browse the Site.
                    </li>
                  </ul>
                  <p className="text-dark pb-2">
                    When we talk about “Personal Information” in this Privacy Policy, we are talking
                    both about Device Information and Order Information.
                  </p>

                  <h5 className="card-title border-bottom pb-2">
                    HOW DO WE USE YOUR PERSONAL INFORMATION ?
                  </h5>
                  <p className="text-dark">
                    We use this Information to: <b className="text-dark">Communicate with you.</b>
                  </p>
                  <p className="text-muted">
                    When in line with the preferences you have shared with us, provide you with
                    information or advertising relating to our products or services.
                  </p>
                  <p className="text-muted">
                    We use the Device Information that we collect to help us screen for potential
                    risk and fraud (in particular, your IP address), and more generally to improve
                    and optimize our Site (for example, by generating analytics about how our
                    customers browse and interact with the Site, and to assess the success of our
                    marketing and advertising campaigns).
                  </p>
                  <p className="text-muted">Other uses include advertising, retargeting.</p>

                  <h5 className="card-title border-bottom pb-2">
                    SHARING YOUR PERSONAL INFORMATION{' '}
                  </h5>

                  <p className="text-muted">
                    We share your Personal Information with third parties to help us use your
                    Personal Information, as described above. We use Google Analytics to help us
                    understand how our customers use the Site--you can read more about how Google
                    uses your Personal Information here:{' '}
                    <a href="https://www.google.com/intl/en/policies/privacy/">
                      https://www.google.com/intl/en/policies/privacy/
                    </a>
                    . You can also opt-out of Google Analytics here:{' '}
                    <a href="https://tools.google.com/dlpage/gaoptout">
                      https://tools.google.com/dlpage/gaoptout
                    </a>
                    .
                  </p>
                  <p className="text-muted">
                    Finally, we may also share your Personal Information to comply with applicable
                    laws and regulations, to respond to a subpoena, search warrant or other lawful
                    request for information we receive, or to otherwise protect our rights.
                  </p>

                  <h5 className="card-title border-bottom pb-2">BEHAVIOURAL ADVERTISING</h5>
                  <p className="text-muted">
                    As described above, we use your Personal Information to provide you with
                    targeted advertisements or marketing communications we believe may be of
                    interest to you. For more information about how targeted advertising works, you
                    can visit the Network Advertising Initiative’s (“NAI”) educational page at{' '}
                    <a href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work">
                      http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work
                    </a>
                    .
                  </p>

                  <h6 className="card-title pb-2">
                    You can opt out of targeted advertising by using below links:
                  </h6>

                  <div className="row">
                    <div className="col-auto">
                      <a href="https://www.google.com/settings/ads/anonymous">
                        <img src={GoogleLogo} alt="google" height={25} />
                      </a>
                    </div>
                    <div className="col-auto">
                      <a href="https://www.linkedin.com/psettings/guest-controls/retargeting-opt-out">
                        <img src={LinkedinLogo} alt="LinkedIn" height={25} />
                      </a>
                    </div>
                    <div className="col-auto">
                      <a href="https://www.facebook.com/settings/?tab=ads">
                        <img src={FbLogo} alt="facebook" height={25} />
                      </a>
                    </div>
                    <div className="col-auto">
                      <a href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads">
                        <img src={BingLogo} alt="microsoft bing" height={25} />
                      </a>
                    </div>
                  </div>

                  <p className="text-muted">
                    Additionally, you can opt out of some of these services by visiting the Digital
                    Advertising Alliance’s opt-out portal at:{' '}
                    <a href="http://optout.aboutads.info/">http://optout.aboutads.info/</a>.
                  </p>

                  <h5 className="card-title border-bottom pb-2">DO NOT TRACK</h5>
                  <p className="text-muted">
                    Please note that we do not alter our Site’s data collection and use practices
                    when we see a Do Not Track signal from your browser.
                  </p>

                  <h5 className="card-title border-bottom pb-2">CHANGES</h5>
                  <p className="text-muted">
                    We may update this privacy policy from time to time in order to reflect, for
                    example, changes to our practices or for other operational, legal or regulatory
                    reasons.
                  </p>

                  <h5 className="card-title border-bottom pb-2">CONTACT US</h5>
                  <p className="text-muted">
                    For more information about our privacy practices, if you have questions, or if
                    you would like to make a complaint, please contact us by e-mail at{' '}
                    <a href="mailto:abhi@eumentis.com">abhi@eumentis.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;

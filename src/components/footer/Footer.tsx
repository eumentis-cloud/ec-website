import { Link } from 'gatsby';
import React, { FormEvent, useState } from 'react';
import './footer.scss';
import LinkedInLogo from '../../images/svgAssets/linkedin.svg';
import isEmail from 'validator/lib/isEmail';

// contact form type
type ContactFormType = {
  name: string;
  email: string;
  mobile?: string;
  message: string;
};

//
const defaultFormValues: ContactFormType = {
  name: '',
  email: '',
  mobile: undefined,
  message: '',
};

//
type FormErrorsType = Array<'name' | 'email' | 'message' | 'mobile'>;

//
const indianMobileRegex: RegExp = /^[6-9]\d{9}$/;

// Functional Component
const Footer: React.FC = () => {
  //
  const [formValues, setFormValues] = useState<ContactFormType>(defaultFormValues);
  //
  const [formErrors, setFormErrors] = useState<FormErrorsType>([]);

  //
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    // prevent default form submission
    e.preventDefault();
    //
    const isEmailValid = isEmail(formValues.email);
    //
    let errors: FormErrorsType = [];

    if (!isEmailValid || formValues.email === '') {
      errors.push('email');
    }
    console.log('mobile', formValues.mobile);
    if (
      formValues.mobile &&
      formValues.mobile.length > 0 &&
      indianMobileRegex.test(formValues.mobile as string)
    ) {
      errors.push('mobile');
    }
    if (formValues.name === '') {
      errors.push('name');
    }
    if (formValues.message === '') {
      errors.push('message');
    }

    setFormErrors(errors);
    console.log('formErrors', formErrors);

    if (errors.length === 0) {
      // form success
      console.log('formValues', formValues);
    }
  };

  return (
    <>
      <footer>
        <div className="row no-gutters align-items-end">
          <div className="col footer-contact black-bg">
            <div className="row no-gutters">
              <div className="col col-md-5 col-lg-6">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/eumentis"
                  className="d-flex align-content-center justify-content-center hoverable"
                >
                  <LinkedInLogo style={{ padding: 2 }} />
                  <span className="d-none d-sm-none d-md-none d-lg-inline-block d-xl-inline-block">
                    Connect on LinkedIn
                  </span>
                </a>
              </div>
              <div className="col col-md-7 col-lg-6">
                <a className="contact-call-container hoverable" href="tel:+918806413069">
                  <svg
                    className="ec-theme-color"
                    x="0px"
                    y="0px"
                    viewBox="0 0 480.6 480.6"
                    xmlSpace="preserve"
                  >
                    <path
                      className="st0"
                      d="M365.4 317.9c-15.7-15.5-35.3-15.5-50.9 0-11.9 11.8-23.8 23.6-35.5 35.6-3.2 3.3-5.9 4-9.8 1.8-7.7-4.2-15.9-7.6-23.3-12.2-34.5-21.7-63.4-49.6-89-81-12.7-15.6-24-32.3-31.9-51.1-1.6-3.8-1.3-6.3 1.8-9.4 11.9-11.5 23.5-23.3 35.2-35.1 16.3-16.4 16.3-35.6-.1-52.1-9.3-9.4-18.6-18.6-27.9-28-9.6-9.6-19.1-19.3-28.8-28.8-15.7-15.3-35.3-15.3-50.9.1-12 11.8-23.5 23.9-35.7 35.5C7.3 103.9 1.6 117 .4 132.3c-1.9 24.9 4.2 48.4 12.8 71.3 17.6 47.4 44.4 89.5 76.9 128.1 43.9 52.2 96.3 93.5 157.6 123.3 27.6 13.4 56.2 23.7 87.3 25.4 21.4 1.2 40-4.2 54.9-20.9 10.2-11.4 21.7-21.8 32.5-32.7 16-16.2 16.1-35.8.2-51.8-19-19.1-38.1-38.1-57.2-57.1zM346.3 238.2l36.9-6.3c-5.8-33.9-21.8-64.6-46.1-89-25.7-25.7-58.2-41.9-94-46.9l-5.2 37.1c27.7 3.9 52.9 16.4 72.8 36.3 18.8 18.8 31.1 42.6 35.6 68.8zM404 77.8C361.4 35.2 307.5 8.3 248 0l-5.2 37.1c51.4 7.2 98 30.5 134.8 67.2 34.9 34.9 57.8 79 66.1 127.5l36.9-6.3c-9.7-56.2-36.2-107.2-76.6-147.7z"
                    />
                  </svg>
                  <span className="d-none d-sm-none d-md-none d-lg-inline-block d-xl-inline-block">
                    +91-9028146205
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div id="footer-company-details-container" className="col-auto black-bg">
            <div id="footer-company-details">
              <svg x="0px" y="0px" viewBox="0 0 119.4 106" xmlSpace="preserve">
                <style>
                  {
                    '.st2{display:none;fill:none;stroke:#fff;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10}.st4{fill:#ff0}'
                  }
                </style>
                <path className="st2" d="M84.4 61.8L87.6 75.9" />
                <path className="st2" d="M88.6 61.8L91.8 75.9" />
                <path className="st2" d="M80.4 61.8L83.6 75.9" />
                <path d="M107.5 35.6c.5-2 .7-4.2.7-6.3C108.2 13.1 94.5 0 77.6 0 66 0 55.9 6.2 50.7 15.3c-3.1-1.6-6.7-2.6-10.5-2.6-12 0-21.7 9.3-21.7 20.7v.9h-.1C8.3 34.4 0 42.3 0 52.1s8.3 17.7 18.5 17.7h82.3c10.2 0 18.5-7.9 18.5-17.7.1-7.5-4.9-14-11.8-16.5z" />
                <path
                  d="M102.8 38.6c.4-1.7.6-3.5.6-5.4 0-13.8-12.2-24.9-27.3-24.9-10.4 0-19.4 5.3-24 13-2.8-1.4-6-2.2-9.4-2.2-10.7 0-19.4 7.9-19.4 17.7v.8h-.1c-9.1 0-16.6 6.8-16.6 15.1S14 67.8 23.2 67.8h73.6c9.1 0 16.6-6.8 16.6-15.1 0-6.4-4.4-11.9-10.6-14.1z"
                  fill="#ffb"
                />
                <path
                  id="XMLID_64_"
                  className="st4"
                  d="M78.7 76.2l-.8.4c-.4 0-.5-.3-.5-.7V61.4c0-.3.1-.5.5-.5l.8.4c.4 0 .8.5.8.8v13.4c-.1.4-.4.7-.8.7z"
                />
                <path d="M77.6 106c-27.5 0-49.7-16.7-49.7-37.3s22.3-37.3 49.7-37.3" />
                <path
                  className="st4"
                  d="M42.7 68.7c0 9.2 7.5 16.7 16.7 16.7 3.9 0 7.5-1.3 10.3-3.6 2.5-2 5.2-3.9 8-5.5V61.1c-2.8-1.6-5.5-3.5-8-5.5-2.8-2.2-6.4-3.6-10.3-3.6-9.2 0-16.7 7.5-16.7 16.7z"
                />
                <path d="M55.5 73.7h-13v-9.9h13v.1c-1.2 2.9-1.1 6.9 0 9.8z" />
                <path
                  id="XMLID_67_"
                  d="M94.9 71.9h.9c1 0 1.8-.8 1.8-1.9v-2.8c0-1-.8-1.9-1.8-1.9h-.9c-.1-2.1-1.8-3.8-3.9-3.8v14c2.1.2 3.7-1.5 3.9-3.6z"
                />
                <path
                  id="XMLID_2_"
                  d="M79.4 63v11.4c0 .8.7 1.5 1.6 1.5.9 0 1.6-.7 1.6-1.5V63c0-.8-.7-1.5-1.6-1.5-.9 0-1.6.6-1.6 1.5z"
                />
                <path
                  id="XMLID_7_"
                  className="st4"
                  d="M82.6 63v11.4c0 .8.6 1.5 1.3 1.5.7 0 1.3-.7 1.3-1.5V63c0-.8-.6-1.5-1.3-1.5-.7 0-1.3.6-1.3 1.5z"
                />
                <path
                  id="XMLID_9_"
                  d="M85.2 63v11.4c0 .8.7 1.5 1.6 1.5.9 0 1.6-.7 1.6-1.5V63c0-.8-.7-1.5-1.6-1.5-.9 0-1.6.6-1.6 1.5z"
                />
                <path
                  id="XMLID_8_"
                  className="st4"
                  d="M88.4 63v11.4c0 .8.6 1.5 1.3 1.5.7 0 1.3-.7 1.3-1.5V63c0-.8-.6-1.5-1.3-1.5-.7 0-1.3.6-1.3 1.5z"
                />
              </svg>
              <h4
                id="footer-company-name"
                className="d-none d-sm-none d-md-none d-lg-inline-block d-xl-inline-block"
              >
                <Link className="link" to={'/'}>
                  Eumentis Cloud
                </Link>
              </h4>
            </div>
          </div>
          <div className="col footer-contact black-bg">
            <div className="row no-gutters">
              <div className="col">
                <a className="hoverable" href="https://api.whatsapp.com/send?phone=919028146205">
                  <svg
                    className="ec-theme-color"
                    x="0px"
                    y="0px"
                    viewBox="0 0 418.9 420.9"
                    xmlSpace="preserve"
                  >
                    <path
                      className="st0"
                      d="M357.8 61.2C318.5 21.7 266.1 0 210.3 0 95.4 0 1.8 93.6 1.7 208.5c0 36.8 9.6 72.6 27.8 104.3L0 420.9l110.6-29c30.5 16.6 64.8 25.4 99.7 25.4h.1c114.9 0 208.5-93.6 208.6-208.6-.1-55.7-21.8-108.1-61.2-147.5zM210.3 382c-31.2 0-61.7-8.4-88.3-24.2l-6.3-3.8-65.6 17.2 17.5-64-4.1-6.6C46.1 273 37 241.1 37 208.4 37 113 114.8 35.2 210.4 35.2c46.3 0 89.8 18.1 122.6 50.8 32.7 32.8 50.7 76.3 50.7 122.6-.1 95.7-77.9 173.4-173.4 173.4zm95.1-129.8c-5.2-2.6-30.8-15.2-35.6-17-4.8-1.7-8.3-2.6-11.7 2.6-3.5 5.2-13.5 17-16.5 20.4-3 3.5-6.1 3.9-11.3 1.3-5.2-2.6-22-8.1-41.9-25.9-15.5-13.8-25.9-30.9-29-36.1-3-5.2-.3-8 2.3-10.6 2.3-2.3 5.2-6.1 7.8-9.1 2.6-3 3.5-5.2 5.2-8.7 1.7-3.5.9-6.5-.4-9.1-1.3-2.6-11.7-28.3-16.1-38.7-4.2-10.2-8.5-8.8-11.7-8.9-3-.2-6.5-.2-10-.2s-9.1 1.3-13.9 6.5c-4.8 5.2-18.2 17.8-18.2 43.5s18.7 50.4 21.3 53.9c2.6 3.5 36.7 56.1 89 78.7 12.4 5.4 22.1 8.6 29.7 11 12.5 4 23.8 3.4 32.8 2.1 10-1.5 30.8-12.6 35.2-24.8 4.3-12.2 4.3-22.6 3-24.8-1.3-2.2-4.8-3.5-10-6.1z"
                    />
                  </svg>
                  <span className="d-none d-sm-none d-md-none d-lg-inline-block d-xl-inline-block">
                    Message on Whatsapp Web
                  </span>
                </a>
              </div>
              <div className="col">
                <a href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#contactModal">
                  <svg
                    x="0px"
                    y="0px"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="bi bi-envelope-fill ec-theme-color"
                    viewBox="0 0 16 16"
                  >
                    <path
                      className="st0"
                      d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                    />
                  </svg>
                  <span className="d-none d-sm-none d-md-none d-lg-inline-block d-xl-inline-block">
                    Write to us
                  </span>
                </a>
                <div
                  className="modal fade"
                  id="contactModal"
                  tabIndex={-1}
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <form noValidate className="needs-validation" onSubmit={handleFormSubmit}>
                        <div className="modal-header">
                          <h5 className="modal-title" id="modalName">
                            Write to us
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body text-start modal-dialog-scrollable">
                          <div className="mb-3">
                            <label htmlFor="name" className="form-label">
                              Name<sup className="text-danger">*</sup>
                            </label>
                            <input
                              value={formValues.name}
                              type="text"
                              className={`form-control ${
                                formErrors.includes('name') ? 'is-invalid' : ''
                              }`}
                              id="name"
                              placeholder="Enter your name"
                              required
                              onChange={(e) => {
                                setFormValues({ ...formValues, name: e.target.value });
                              }}
                            />
                            <div className="invalid-feedback">Please enter Name and try again.</div>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                              Email<sup className="text-danger">*</sup>
                            </label>
                            <input
                              value={formValues.email}
                              placeholder="Enter your email address"
                              type="email"
                              className={`form-control ${
                                formErrors.includes('email') ? 'is-invalid' : ''
                              }`}
                              id="email"
                              required
                              onChange={({ target: { value } }) => {
                                setFormValues({ ...formValues, email: value });
                              }}
                            />
                            <div className="invalid-feedback">
                              Please enter a valid email and try again.
                            </div>
                          </div>
                          <div className="mb-3">
                            <label htmlFor="mobile" className="form-label">
                              Mobile Number
                            </label>
                            <div className="has-validation">
                              <div className="input-group mb-1 mobile-input">
                                <span className="input-group-text" id="mobile-prefix">
                                  +91
                                </span>
                                <input
                                  value={formValues.mobile}
                                  type="mobile"
                                  className={`form-control ${
                                    formErrors.includes('mobile') ? 'is-invalid' : ''
                                  }`}
                                  placeholder="Mobile Number"
                                  aria-label="Mobile Number"
                                  aria-describedby="mobile-prefix"
                                  onChange={({ target: { value } }) => {
                                    setFormValues({ ...formValues, mobile: value });
                                  }}
                                />
                              </div>
                              <div className="form-text">Only Indian mobile number</div>
                              <div className="invalid-feedback">
                                Please enter a valid mobile number and try again
                              </div>
                            </div>
                          </div>

                          <div className="mb-3">
                            <label htmlFor="message" className="form-label">
                              Message<sup className="text-danger">*</sup>
                            </label>
                            <textarea
                              value={formValues.message}
                              onChange={({ target: { value } }) => {
                                setFormValues({ ...formValues, message: value });
                              }}
                              required
                              className={`form-control ${
                                formErrors.includes('message') ? 'is-invalid' : ''
                              }`}
                              id="message"
                              rows={1}
                            />
                            <div className="invalid-feedback">
                              Please enter a message and try again
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary text-uppercase"
                            data-bs-dismiss="modal"
                            onClick={() => {
                              setFormErrors([]);
                              setFormValues(defaultFormValues);
                            }}
                          >
                            Close
                          </button>
                          <button type="submit" className="text-uppercase btn btn-primary">
                            submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

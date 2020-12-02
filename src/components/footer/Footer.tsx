import { Link } from 'gatsby'
import Modal from 'react-modal';
import React, {useState} from 'react'
import './footer.scss'
import {useForm} from "react-hook-form";

type ContactFormType = {
  fullName: string | null;
  emailAddress: string | null;
  mobileNo: string | null;
  message: string | null;
}

// Functional Component
const Footer: React.FC = () => {
  // toggling write to us modal
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const methods = useForm<ContactFormType>({
    defaultValues: {
      fullName: null,
      emailAddress: null,
      mobileNo: null,
      message: null,
    }
  });

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    methods.reset();
  }

  return (
      <>
        <footer>
          <div className="row no-gutters align-items-end">
            <div className="col footer-contact black-bg">
              <div className="row no-gutters">
                <div className="col col-md-5 col-lg-6">
                  <a className="hoverable" onClick={() => {
                    toggleModal()
                  }}>
                    <svg
                        className="ec-theme-color"
                        x="0px"
                        y="0px"
                        viewBox="0 0 550.8 550.8"
                        xmlSpace="preserve"
                    >
                      <path
                          className="st0"
                          d="M501.6 491.8c12.4 0 23.1-4.1 32.2-12.2l-156-156.1c-3.7 2.7-7.4 5.3-10.8 7.8-11.7 8.6-21.2 15.3-28.4 20.1-7.3 4.8-17 9.7-29 14.8-12.1 5-23.4 7.5-33.8 7.5h-.6c-10.5 0-21.7-2.5-33.8-7.5-12.1-5-21.8-9.9-29-14.8-7.3-4.8-16.8-11.5-28.4-20.1-3.3-2.4-6.9-5-10.8-7.8L16.9 479.6c9.1 8.1 19.9 12.2 32.2 12.2h452.5zM31 225.3c-11.7-7.8-22-16.7-31-26.7V436l137.5-137.5C110 279.2 74.6 254.9 31 225.3zM520.1 225.3c-41.9 28.3-77.4 52.7-106.8 73.2L550.8 436V198.6c-8.8 9.8-19.1 18.7-30.7 26.7z"
                      />
                      <path
                          className="st0"
                          d="M501.6 59H49.2c-15.8 0-27.9 5.3-36.4 16C4.3 85.6 0 99 0 114.9c0 12.9 5.6 26.9 16.9 42 11.3 15.1 23.3 26.9 36 35.5 7 4.9 28 19.5 63 43.8 18.9 13.1 35.4 24.5 49.5 34.4 12.1 8.4 22.4 15.7 31 21.7 1 .7 2.5 1.8 4.6 3.3 2.2 1.6 5 3.6 8.5 6.1 6.7 4.8 12.2 8.7 16.6 11.7 4.4 3 9.7 6.3 16 10 6.2 3.7 12.1 6.5 17.7 8.3 5.5 1.8 10.7 2.8 15.4 2.8h.6c4.7 0 9.8-.9 15.4-2.8 5.5-1.8 11.4-4.6 17.7-8.3 6.2-3.7 11.6-7 16-10s9.9-6.9 16.6-11.7c3.5-2.5 6.3-4.5 8.5-6.1 2.1-1.5 3.6-2.6 4.6-3.3 6.7-4.7 17.1-11.9 31.1-21.6 25.5-17.7 63-43.8 112.7-78.3 15-10.4 27.5-23.1 37.5-37.8 10-14.7 15.1-30.2 15.1-46.4 0-13.5-4.9-25.1-14.6-34.7-9.9-9.7-21.5-14.5-34.8-14.5z"
                      />
                    </svg>
                    <span className="d-none d-sm-none d-md-none d-lg-inline-block d-xl-inline-block">
                Write to us
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
                +91-8806413069
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
                  <a
                      className="hoverable"
                      href="https://api.whatsapp.com/send?phone=918806413069"
                  >
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
                  <a className="hoverable" href="https://m.me/pwsamd">
                    <svg
                        className="ec-theme-color"
                        x="0px"
                        y="0px"
                        viewBox="0 0 786 794"
                        xmlSpace="preserve"
                    >
                      <path
                          className="st0"
                          d="M393 0C176 0 0 164.5 0 367.5 0 483 56.9 586 146 653.4V794l134.1-74.4c35.8 10 73.6 15.4 112.9 15.4 217 0 393-164.5 393-367.5S610.1 0 393 0zm41.4 492.8L332.7 387.2 137 495.5l214.6-227.7 101.6 105.6L649 265.1 434.4 492.8z"
                      />
                    </svg>
                    <span className="d-none d-sm-none d-md-none d-lg-inline-block d-xl-inline-block">
                Message on Messenger
              </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <Modal closeTimeoutMS={500} isOpen={isModalOpen} onRequestClose={toggleModal}>
          <div>Write to us, if you would like to avail our services.</div>
          <form onSubmit={methods.handleSubmit((data) => {
            console.log('formData', data);
          }, (errors) => {
            console.log('form errors', errors);
          })}>
            <div>
              <input className="contact-form-input" ref={methods.register({required: 'Please enter full name and try again'})} name="fullName" placeholder="Full Name" />
              {methods.errors.fullName ? <span style={{color: 'red'}}>{methods.errors.fullName.message}</span> : null}
            </div>
            <div>
              <input className="contact-form-input" ref={methods.register({required: 'Please enter email address and try again'})} name="emailAddress" placeholder="Email Address" />
              {methods.errors.emailAddress ? <span style={{color: 'red'}}>{methods.errors.emailAddress.message}</span> : null}
            </div>
            <div>
              <input className="contact-form-input" ref={methods.register({required: 'Please enter mobile number and try again', pattern: {
                value: /^[6-9]\d{9}$/,
                  message: 'Please enter valid mobile number and try again',
                }})} name="mobileNo" placeholder="Mobile no. (India only)" />
              {methods.errors.mobileNo ? <span style={{color: 'red'}}>{methods.errors.mobileNo.message}</span> : null}
            </div>
            <div>
              <input className="contact-form-input" ref={methods.register({required: 'Please enter message and try again'})} name="message" placeholder="Message" />
              {methods.errors.message ? <span style={{color: 'red'}}>{methods.errors.message.message}</span> : null}
            </div>
            <div className="contact-form-btn-container">
              <button className="mx-2 bg-secondary text-white px-3 py-1 rounded-lg border-0" onClick={toggleModal}>BACK</button>
              <button className="mx-2 bg-primary text-white px-3 py-1 rounded-lg border-0" onClick={toggleModal} type="submit">SUBMIT</button>
            </div>
          </form>
        </Modal>
      </>
  );
}

export default Footer

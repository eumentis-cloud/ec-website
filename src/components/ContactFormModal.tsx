import React, { useState } from 'react';
import isEmail from 'validator/lib/isEmail';

// contact form type
type ContactFormType = {
  // contact person's name
  name: string;
  // contact person's email
  email: string;
  // contact person's mobile no
  mobile?: string;
  // contact message
  message: string;
};

// contact form default values
const defaultFormValues: ContactFormType = {
  name: '',
  email: '',
  mobile: '',
  message: '',
};

// type to identify form errors
type FormErrorsType = Array<'name' | 'email' | 'message' | 'mobile'>;

// regex for indian mobile validations
const indianMobileRegex: RegExp = /^[6-9]\d{9}$/;

// contact form modal component
const ContactFormModal = () => {
  // storing contact form values
  const [formValues, setFormValues] = useState<ContactFormType>(defaultFormValues);
  // state to store form errors for validation
  const [formErrors, setFormErrors] = useState<FormErrorsType | undefined>([]);

  // function to handle form submission
  const handleFormSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    // prevent default form submission
    e.preventDefault();
    // is email valid
    const isEmailValid = isEmail(formValues.email);
    // temp errors store before displaying errors on UI
    let errors: FormErrorsType = [];

    if (!isEmailValid || formValues.email === '') {
      errors.push('email');
    }
    if (formValues.mobile && !indianMobileRegex.test(formValues.mobile)) {
      errors.push('mobile');
    }
    if (formValues.name === '') {
      errors.push('name');
    }
    if (formValues.message === '') {
      errors.push('message');
    }
    setFormErrors(errors);
    // when form has no errors
    if (errors.length === 0) {
      // form success
      console.log('formValues', formValues);
      setFormErrors(undefined);
    }
  };

  return (
    <div
      className="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard={false}
      id="contactModal"
      tabIndex={-1}
      aria-labelledby="contact form"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalName">
              Write to us
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => {
                setFormErrors([]);
                setFormValues(defaultFormValues);
              }}
            />
          </div>
          <div className="modal-body text-start">
            {formErrors === undefined ? (
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  className="bi bi-check-circle-fill my-3 m-5"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg>
                <p className="lead">
                  Thank you for getting in touch with us. <br /> We will get back to you soon.
                </p>
              </div>
            ) : (
              <form noValidate>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name<sup className="text-danger">*</sup>
                  </label>
                  <input
                    value={formValues.name}
                    type="text"
                    className={`form-control ${
                      Array.isArray(formErrors) && formErrors.includes('name') ? 'is-invalid' : ''
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
                      Array.isArray(formErrors) && formErrors.includes('email') ? 'is-invalid' : ''
                    }`}
                    id="email"
                    required
                    onChange={({ target: { value } }) => {
                      setFormValues({ ...formValues, email: value });
                    }}
                  />
                  <div className="invalid-feedback">Please enter a valid email and try again.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="mobile" className="form-label">
                    Mobile Number
                  </label>
                  <div
                    className={`input-group mb-1 mobile-input ${
                      Array.isArray(formErrors) && formErrors.includes('mobile')
                        ? 'has-validation'
                        : ''
                    }`}
                  >
                    <span className="input-group-text" id="mobile-prefix">
                      +91
                    </span>
                    <input
                      value={formValues.mobile}
                      type="text"
                      className={`form-control ${
                        Array.isArray(formErrors) && formErrors.includes('mobile')
                          ? 'is-invalid'
                          : ''
                      }`}
                      placeholder="Mobile Number"
                      aria-label="Mobile Number"
                      aria-describedby="mobile-prefix"
                      onChange={({ target: { value } }) => {
                        setFormValues({ ...formValues, mobile: value });
                      }}
                    />
                    <div className="invalid-feedback mobile-validation-text">
                      Please enter a valid mobile number and try again
                    </div>
                  </div>
                  <div className="form-text">Only Indian Mobile numbers</div>
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
                      Array.isArray(formErrors) && formErrors.includes('message')
                        ? 'is-invalid'
                        : ''
                    }`}
                    id="message"
                    rows={1}
                  />
                  <div className="invalid-feedback">Please enter a message and try again</div>
                </div>
              </form>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary text-uppercase"
              data-bs-dismiss="modal"
              onClick={(): void => {
                setFormErrors([]);
                setFormValues(defaultFormValues);
              }}
            >
              Close
            </button>
            {Array.isArray(formErrors) && formErrors.length >= 0 ? (
              <button
                onClick={(e) => {
                  handleFormSubmit(e);
                }}
                type="submit"
                className="text-uppercase btn btn-primary"
              >
                submit
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactFormModal;

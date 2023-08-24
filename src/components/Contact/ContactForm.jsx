import React, { useState } from "react";
import './ContactForm.css';
import config from "../../config";

const ContactForm = () => {

  const [nameValue, setNameValue] = useState('');
  const [emaillValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [submitMessage, setSubmitMessage] = useState();
  const [submitting, setSubmitting] = useState(false);


  const handelNameValueChange = (event) => {
    setNameValue(event.target.value);
  };

  const handelEmailValueChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handelMessageValueChange = (event) => {
    setMessageValue(event.target.value);
  };

  const onSubmitClick = (event) => {
    if (!nameValue || !emaillValue || !messageValue || submitting) return;

    setSubmitting(true);

    const data = {
      name: nameValue,
      email: emaillValue,
      message: messageValue
    };

    event.preventDefault();
    fetch(`${config.API_BASE_URL}/contact/form`, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      return response.json();
    }).then((data) => {
      if (!data || !data.result || data.result !== 'ok') {
        setSubmitMessage({ message: 'Oops! something went wrong! please try again later.', type: 'error' });
        return;
      }
      setSubmitMessage({ message: `Thank you! Your message has been submitted successfully.`, type: 'success' });
    }).catch((_error) => {
      setSubmitMessage({ message: 'Oops! something went wrong! please try again later.', type: 'error' });
    }).then(() => {
      setSubmitting(false);
    });
  };


  return (
    <div className="contact-form-wrap">
      {(!submitMessage || submitMessage.type !== "success") &&
        <form action="#">
          <div className="row">
            <div className="col-md-6">
              <div className="form-grp">
                <input type="text" placeholder="Enter your Name" value={nameValue} onChange={handelNameValueChange} required />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-grp">
                <input type="email" placeholder="Enter you email" value={emaillValue} onChange={handelEmailValueChange} required />
              </div>
            </div>
          </div>
          <div className="form-grp">
            <textarea name="massage" placeholder="Enter your message" value={messageValue} onChange={handelMessageValueChange} required ></textarea>
          </div>
          {submitMessage && <div className="error-box error">{submitMessage.message}</div>}
          <div className="submit-btn text-center">
            <button type="submit" className="btn" onClick={onSubmitClick}>
              {submitting && <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>}
              {!submitting && <span>Send Message</span>}
            </button>
          </div>
        </form>
      }
      {(submitMessage && submitMessage.type === "success") && <div className="success-box success">{submitMessage.message}</div>}
    </div>
  );
};

export default ContactForm;

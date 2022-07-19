import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const serviceID = "service_ID";
  const templateID = "template_qp01jcf";
  const userID = "user_FGBISNRESgwqjOPPYfAp3";
  const [status, setStatus] = useState("");
  const [start, setStart] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, e.target, userID).then(
      (result) => {
        console.log(result.text);
        setStatus("SUCCESS");
        setStart(false);
      },
      (error) => {
        console.log(error.text);
      }
    );
    
  };

  return (
    <div id="contact" className="contacts">
      {status && (
        <div className="text-center">
          <h1>THANK YOU!</h1>
          <p>
          Your message has been received! I'll contact you as soon as possible!{" "}
          </p>
        </div>
      )}
      {start && (
        <>
          <div className="text-center">
            <h1>Contact Me</h1>
            <p>
              Please fill out the form and describe your project and needs!{" "}
            </p>
          </div>
          <div className="contatiner">
            <form onSubmit={sendEmail}>
              <div className="row">
                <div className="col-md-6 col-xs-12">
                  <div className="text-center">
                    <input
                      id="name"
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                    />
                    <div className="line"></div>
                  </div>
                  <div className="text-center">
                    <input
                      id="phone"
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      name="phone"
                    />
                    <div className="line"></div>
                  </div>
                  <div className="text-center">
                    <input
                      id="phone"
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      name="email"
                    />

                    <div className="line"></div>
                  </div>
                  <div className="text-center">
                    <input
                      id="subject"
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                    />
                    <div className="line"></div>
                  </div>
                </div>
                <div className="col-md-6 col-xs-12">
                  <div className="text-center">
                    <textarea
                      id="description"
                      type="text"
                      className="form-control"
                      placeholder="Message"
                      name="message"
                    ></textarea>
                    <div className="line"></div>
                  </div>

                  <button className="btn-main-offer contact-btn" type="submit">
                    contact me
                  </button>
                </div>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;

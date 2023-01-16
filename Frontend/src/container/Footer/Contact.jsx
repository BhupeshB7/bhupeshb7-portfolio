import React from "react";
import styled from "styled-components";

const Contact = () => {
    const Wrapper = styled.section`
    .container{
        width: 120rem;
        margin: 0 auto;
    }
@media (max-width:968px) {
    iframe{
        width:95%;
    }
}

    padding: 9rem 0 5rem 0;
    .container {
      margin-top: 6rem;
      text-align: center;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"]{
    max-width: 16rem;
    margin-top: 2rem;
    background-color: antiquewhite;
    color: red;
    padding: 1.4rem 2.2rem;
    border-style: solid;
    border-width: .1rem;
    text-transform: uppercase;
    font-size: 1.8rem;
    cursor: pointer;
    }

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: #FFF;
              border: 1px solid red;
              color: red;
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

    return (
        <Wrapper>
            <h2 className="common-heading">Feel Free to Contact us</h2>

            {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.28620995241!2d73.92422475000001!3d18.59334505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70e0d%3A0x2d19689e09e2fced!2sPhoenix%20Mall%20Washrooms!5e0!3m2!1sen!2sin!4v1658905192255!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe> */}
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7184.138378011847!2d86.25776049940875!3d25.801291374890347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ee07fd29690e25%3A0xcd71e1207ed511b7!2sPachahara%20Bujurg%2C%20Bihar%20848205!5e0!3m2!1sen!2sin!4v1672773225783!5m2!1sen!2sin"
                width="50%"
                height="450"
                style={{ margin: "auto", alignItems: "center", display: "flex", justifyContent: "center", boxShadow: "0px 2px 8px rgba(0,0,0,0.25)", background: "white" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe> */}
            <div className="container">
                <div className="contact-form">
                    <form
                        action="https://formspree.io/f/xgedgjkr"
                        method="POST"
                        className="contact-inputs">
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            autoComplete="off"
                            required
                        />

                        <input
                            type="email"
                            name="Email"
                            placeholder="Email"
                            autoComplete="off"
                            required
                        />

                        <textarea
                            name="message"
                            cols="30"
                            rows="6"
                            autoComplete="off"
                            required></textarea>

                        <input type="submit" value="send" />
                    </form>
                </div>
            </div>
        </Wrapper>
    );
};

export default Contact;
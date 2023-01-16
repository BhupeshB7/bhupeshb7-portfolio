
import styled from "styled-components";
import './Footer.scss';
import MotionWrap from '../../Wrapper/Motion.wrap';
import AppWrap from '../../Wrapper/AppWrap';
import call from '../../assets/call.png'
import email1 from '../../assets/email.png'
import coffee from '../../assets/coffee.png'
import { useState } from "react";
const Footer = () => {
    const Wrapper = styled.section`
    .container{
       display: flex;
       align-items: center;
       justify-content: center;
       .contact-form{
           form{          
             input, textarea{
                   display: flex;
                   align-items: center;
                   justify-content: center;
                   margin: auto;
                   height: 70px;
                   width: 600px; border: 1px solid #f8eded;
                    border-bottom : 2px solid var(--secondary-color);
                   padding: 1rem ;
                   margin: 1rem;
                   text-transform: uppercase;
                   font-size: 17px;
                   &:focus{
                    color: #2430af;
                    border: none;
                    outline: none;
                    border: 1px solid #f9f4f4;
                    border-bottom : 2px solid #2430af;

                   }


               }
               textarea{
                   height: 200px;
                   text-transform: capitalize;
               }

       input[type="submit"] {
           padding: 1rem 1.2rem;
           border-radius: 10px;
           border: none;
           background-color: var(--secondary-color);
           width: 180px;
           font-weight: 500;
           color: var(--white-color);
           outline: none;
           font-family: var(--font-base);

           transition: cubic-bezier(0.55, 0.085, 0.68, 0.53);
           cursor: pointer;

           &:hover {
               background-color: #2430af;
           }
       }
           }

       }
       @media screen and (max-width: 850px) {
        .contact-form{
           form{          
             input, textarea{
                width: 400px;
             }
           }
        }
    }
       @media screen and (max-width: 768px) {
        .contact-form{
           form{          
             input, textarea{
                width: 350px;
             }
           }
        }
    }
  
    }
     `;


    const [value, setValue] = useState();
    const contactHandler = (data) => {
        value(console.log(data));

    }
    const handleInputChange = () => {
        setValue('');
    }
    return (
        <Wrapper>
            <h2 className="head-text">Take a <img src={coffee} height={"120px"} width={"120px"} alt="" style={{ marginLeft: "-3%", marginBottom: "-5%" }} />  &nbsp; <br /> &  <span>chat with me</span> </h2>

            <div className="app__footer-cards">
                <div className="app__footer-card ">
                    <img src={email1} alt="email" />
                    <a href="mailto:bkbhaskar858186@gmail.com" className="p-text">bkbhaskar858186@gmail.com</a>
                </div>
                <div className="app__footer-card">
                    <img src={call} alt="phone" />
                    <a href="tel:+91 8581869783" className="p-text">+91 8581869783</a>
                </div>
            </div>
            <div className="container">
                <div className="contact-form">
                    <form
                        action="https://formspree.io/f/xjvdkkkn"
                        method="POST"
                        onSubmit={contactHandler}
                        className="contact-inputs">
                        <input
                            type="text"
                            name="username"
                            placeholder="username"
                            autoComplete="off"
                            required
                            onClick={handleInputChange}
                        />

                        <input
                            type="email"
                            name="Email"
                            placeholder="Email"
                            autoComplete="off"
                            required
                            onClick={handleInputChange}
                        />

                        <textarea
                            name="message"
                            placeholder="Message"
                            cols="30"
                            rows="6"
                            autoComplete="off"
                            required
                            onClick={handleInputChange}
                        ></textarea>

                        <input type="submit" value="send" />
                    </form>
                </div>
            </div>
        </Wrapper>
    );
};

export default AppWrap(
    MotionWrap(Footer, 'app__footer'),
    'contact',
    'app__whitebg',
);






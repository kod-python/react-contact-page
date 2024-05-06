import "./contact.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";


const contact = () => {
  
  const [result, setResult] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")


  function handleSubmit(e) {
    e.preventDefault();
  let setResult =`Form has been submitted with with Input: ${name}. Email me on:${email}. Contact me on:${phone}. My message: ${message}` ;

  alert(setResult)
 
  }




 
  return (
    <div className="contact">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
      />



      <div className="contact-form">
        <div className="contact-page">
        <h2><FaEyeSlash/></h2>
          <h3>Get in touch with us</h3>
          <h2>Contact the Team</h2>
          
          <p>
            Have questions or feedback? Reach out!were here to help and ensure
            your experience <br />
            is great.
          </p>

          <div className="cont-phone">
            <div className="phone">
              <i className="fa-solid fa-phone-volume"></i>
            </div>

            <p>
              Call us on <br />
              +233220988765
            </p>
          </div>

          <div className="cont-envelope">
            <div className="envelope">
              <i className="fa-solid fa-envelope"></i>
            </div>

            <p>
              Send us Email <br />
              Wastemangh@gmail.com
            </p>
          </div>

          <div className="cont-location">
            <div className="location">
              <i className="fa-solid fa-location-dot"></i>
            </div>

            <p>
              Visit us at <br />
              Togbe Tawiah Building. First Floor,Ho Volta Region Ghana
            </p>
          </div>
        </div>

        <div className="form-page">
          <h3>Write Message</h3>

          <h2>Send a Message</h2>

  


  

<form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              name="F-name" 
              placeholder="Full Name*"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Email Address"
             value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="phone"
              name="phone"
              placeholder="phone"
             value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="3.5"
              placeholder="Wite a Message*"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>

            <button type="submit">
              Send Message <i className="fa-solid fa-arrow-right"></i>{" "}
            </button>
          </form>






          <h4>{result}</h4>
          
          
   
        </div>

      </div>
    </div>
  );
};
export default contact;

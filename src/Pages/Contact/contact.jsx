import "./contact.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";


const contact = () => {
  
  
  const [formData, setFormData] = useState({
     result: "",
     name: "",
     email: "",
     phone: "",
     message: "",
     errors:{}

  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ 
      ...formData, 
      [name]: value,
      errors: { ...formData.errors, [name]: value.trim() === "" }
    });
  };


  function handleSubmit(e) {
    e.preventDefault();

const { name, email, phone, message} = formData;
const errors = {};

setFormData({
  ... formData,
  result: "",
  name: "",
  email: "",
  phone: "",
  message: ""
});



if (!name.trim()) {
  errors.name = true;
}

if (!email.trim()) {
  errors.email = true;
}

if (!phone.trim()) {
  errors.phone = true;
}

if (!message.trim()) {
  errors.message = true;
}

if (Object.keys(errors).length > 0) {
  setFormData({ ...formData, errors });
  return;
}



console.log(formData);

setFormData({
  ...formData,
  result: `Form has been submitted with Input: ${name}. Email me on:${email}. Contact me on:${phone}. My message: ${message}`,
  name: "",
  email: "",
  phone: "",
  message: "",
  errors: {}
});

  





 
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
              name="name" 
              id="fullName"
              placeholder="Full Name*"
              value={formData.name}
              // value={name}
              // onChange={(e) => setName(e.target.value)}
              // onChange={handleName}
              onChange={handleInputChange}
             
            />
 {formData.errors.name && <p className="error-message">Please input your name</p>}
         
           
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              value={formData.email}
            //  value={email}
              // onChange={(e) => setEmail(e.target.value)}
              // onChange={handleEmail}
              onChange={handleInputChange}
            
            />

{formData.errors.email && <p className="error-message">Please input your email</p>}

            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="phone"
              value={formData.phone}
            //  value={phone}
              // onChange={(e) => setPhone(e.target.value)}
              // onChange={handlePhone}
              onChange={handleInputChange}
             
            />

{formData.errors.phone && <p className="error-message">Please input your phone number</p>}

            <textarea
              name="message"
              
              id="message"
              cols="30"
              rows="3.5"
              placeholder="Wite a Message*"
              value={formData.message}
              // value={message}
              // onChange={(e) => setMessage(e.target.value)}
              // onChange={handleMessage}
              onChange={handleInputChange}
            
            >
    
            </textarea>

            {formData.errors.message && <p className="error-message">Please fill in the message box</p>}

            <button type="submit">
              Send Message <i className="fa-solid fa-arrow-right"></i>{" "}
            </button>
          </form>



          {formData.result && (
            <div>
              <h4>Result:</h4>
              <p>{formData.result}</p>
            </div>
          )}
          
          
   
        </div>

      </div>
    </div>
  );
};
export default contact;

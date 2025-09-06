import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";

export default function Contact() {
  const form = useRef();
  const [showThankYou, setShowThankYou] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  
  const handleNameInput = (e) => {
    const value = e.target.value;
    const allowedPattern = /^[a-zA-Z\s,'-]*$/; 
    

    if (!allowedPattern.test(value)) {
      e.target.value = value.replace(/[^a-zA-Z\s,'-]/g, '');
    }
    
  
    if (e.target.value.length > 50) {
      e.target.value = e.target.value.substring(0, 50);
    }
  };

  const handleNameKeyPress = (e) => {
    const value = e.target.value;
    const char = e.key;
    const allowedPattern = /[a-zA-Z\s,'-]/; 
    
  
    if (!allowedPattern.test(char) || value.length >= 50) {
      e.preventDefault();
      return false;
    }
  };

  // Validation function
  const validateForm = (formData) => {
    const newErrors = {};
    
    // Name validation
    const name = formData.get('name').trim();
    if (!name) {
      newErrors.name = 'Name is required';
    } else if (name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    } else if (name.length > 50) {
      newErrors.name = 'Name must be less than 50 characters';
    } else if (!/^[a-zA-Z\s,'-]+$/.test(name)) {
      newErrors.name = 'Name can only contain letters, spaces, commas, hyphens, and apostrophes';
    }

    // Email validation
    const email = formData.get('email').trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Message validation
    const message = formData.get('project').trim();
    if (!message) {
      newErrors.project = 'Message is required';
    } else if (message.length < 10) {
      newErrors.project = 'Message must be at least 10 characters';
    }

    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    
    setErrors({});
    
   
    const formData = new FormData(form.current);
    

    const validationErrors = validateForm(formData);
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

 
    setIsLoading(true);

    emailjs
      .sendForm("service_lrdn34j", "template_4s2hgwh", form.current, {
        //using template 1 on email js
        publicKey: "nL1phBLrCuoyDx5DL",
      })
      .then(
        () => {
        
          setIsLoading(false);
          
      
          setShowThankYou(true);
          e.target.reset();
          
       
          setErrors({});

       
          setTimeout(() => {
            setShowThankYou(false);
          }, 5000);
        },

        (error) => {
          console.log("FAILED...", error.text);
          setIsLoading(false);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section_title">Get in touch</h2>
      <span className="section_subtitle">Contact Me</span>

      <div className="contact_container container grid">
        <div className="contact_content">
          <h3 className="contact_title">Talk to me</h3>

          <div className="contact_info">
            <div className="contact_card">
              <i className="bx bx-mail-send contact_card-icon"></i>
              <h3 className="contact_card-title">Email</h3>
              <span className="contact_card-data">
                tanmoykanrar.official@gmail.com
              </span>

              <a
                href="mailto:tanmoykanrar.official@gmail.com"
                className="contact_button"
              >
                Write me
                <i className="bx bx-right-arrow-alt conatct_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bxl-whatsapp contact_card-icon"></i>
              <h3 className="contact_card-title">Whatsapp</h3>
              <span className="contact_card-data">91+ 7059518947</span>

              <a
                href="https://wa.me/917059518947?text=Hallo%2C%20how%20are%20you?"
                target="_blank"
                rel="noopener noreferrer"
                className="contact_button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
              </a>
            </div>

            <div className="contact_card">
              <i className="bx bxl-linkedin contact_card-icon"></i>
              <h3 className="contact_card-title">Linkedin</h3>
              <span className="contact_card-data">tanmoykanrar</span>

              <a
                href="https://www.linkedin.com/in/tanmoykanrar/"
                className="contact_button"
              >
                Write me
                <i className="bx bx-right-arrow-alt conatct_button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact_content">
          <h3 className="contact_title">Write me your thought</h3>

          {showThankYou && (
            <div className="thank_you_message">
              <div className="thank_you_content">
                <i className="bx bx-check-circle thank_you_icon"></i>
                <h3 className="thank_you_title">Thank You!</h3>
                <p className="thank_you_text">
                  Your message has been sent successfully. I'll get back to you
                  soon!
                </p>
              </div>
            </div>
          )}

          {isLoading && (
            <div className="loading_message">
              <div className="loading_content">
                <div className="loading_spinner"></div>
                <p className="loading_text">Sending your message...</p>
              </div>
            </div>
          )}

          <form ref={form} onSubmit={sendEmail} className="contact_form">
            <div className="contact_form-div">
              <label htmlFor="name" className="contact_form-tag">
                Name <span className="required_asterisk">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className={`contact_form-input ${errors.name ? 'contact_form-input-error' : ''}`}
                placeholder="Your Name"
                disabled={isLoading}
                onInput={handleNameInput}
                onKeyPress={handleNameKeyPress}
                maxLength={50}
              />
              {errors.name && <span className="error_message">{errors.name}</span>}
            </div>

            <div className="contact_form-div">
              <label htmlFor="email" className="contact_form-tag">
                Email <span className="required_asterisk">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className={`contact_form-input ${errors.email ? 'contact_form-input-error' : ''}`}
                placeholder="Your Email"
                disabled={isLoading}
              />
              {errors.email && <span className="error_message">{errors.email}</span>}
            </div>

            <div className="contact_form-div contact_form-area">
              <label htmlFor="project" className="contact_form-tag">
                Message <span className="required_asterisk">*</span>
              </label>
              <textarea
                name="project"
                id="project"
                cols="30"
                rows="10"
                className={`contact_form-input ${errors.project ? 'contact_form-input-error' : ''}`}
                placeholder="Write your message"
                disabled={isLoading}
              ></textarea>
              {errors.project && <span className="error_message">{errors.project}</span>}
            </div>

            <button 
              type="submit" 
              className={`button button--flex ${isLoading ? 'contact_button_loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
              {!isLoading && (
                <svg
                  className="button__icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"
                    fill="var(--container-color)"
                  ></path>
                  <path
                    d="M10.11 14.7052C9.92005 14.7052 9.73005 14.6352 9.58005 14.4852C9.29005 14.1952 9.29005 13.7152 9.58005 13.4252L13.16 9.83518C13.45 9.54518 13.93 9.54518 14.22 9.83518C14.51 10.1252 14.51 10.6052 14.22 10.8952L10.64 14.4852C10.5 14.6352 10.3 14.7052 10.11 14.7052Z"
                    fill="var(--container-color)"
                  ></path>
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
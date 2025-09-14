import { useState } from "react";
import Certificate1 from "./../../assets/Prompt-Engineering.jpeg";
import Certificate2 from "./../../assets/aws.jpeg";
import Certificate3 from "./../../assets/web-dev.jpeg";
import Certificate4 from "./../../assets/ljnkedin-communication-certificate.jpeg";
import "./services.css";

export default function Services() {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="certificates">
      <h2 className="section_title">Certificates</h2>
      <span className="section_subtitle">What I achieve</span>

      <div className="services_container container grid">
        <div className="services_content">
          <div>
            <img src={Certificate1} alt="Product Designer" className="services_img" />
            {/* <i className="uil uil-web-grid services_icon"></i> */}
            <h3 className="services_title">
              ChatGPT Prompt Engineering for Developers <br/>
              <span className="services_title-line">from DeepLearning.AI</span>
            </h3>
          </div>
          <span className="services_button"> {/*onClick={() => toggleTab(1)*/}
            <a href="https://learn.deeplearning.ai/accomplishments/04719f6e-b81b-48a9-a3eb-61ad8f2e9b62" style={{ color: "inherit", textDecoration: "none" }}>View Now</a>

            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services_modal active_modal"
                : "services_modal"
            }
          >
            <div className="services_model-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_model-close"
              ></i>
              <h3 className="services_model-title">Product Designer</h3>
              <p className="services_modal-description">
                Services with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="servives_modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="servives_modal-info">Web page development</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="servives_modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="servives_modal-info">
                    I position your company brand..
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="servives_modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <img src={Certificate2} alt="Product Designer" className="services_img" />
            {/* <i className="uil uil-arrow services_icon"></i> */}
            <h3 className="services_title">
              Ultimate AWS Certified Solutions Architect Associate SAA-C03 <br/>
              <span className="services_title-line">from Udemy</span>
            </h3>
          </div>
          <span className="services_button"> {/*onClick={() => toggleTab(2)}*/}
            <a href="https://www.udemy.com/certificate/UC-9ea3529e-0f05-4e0c-94ad-e714dacfb9ed/" style={{ color: "inherit", textDecoration: "none" }}>View Now</a>
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services_modal active_modal"
                : "services_modal"
            }
          >
            <div className="services_model-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_model-close"
              ></i>
              <h3 className="services_model-title">UI/UX Designer</h3>
              <p className="services_modal-description">
                Services with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="servives_modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="servives_modal-info">Web page development</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="servives_modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="servives_modal-info">
                    I position your company brand..
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="servives_modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services_content">
          <div>
            <img src={Certificate3} alt="Product Designer" className="services_img" />
            {/* <i className="uil uil-edit services_icon"></i> */}
            <h3 className="services_title">
              The Complete 2023 Web Development Bootcamp <br/>
              <span className="services_title-line">from Udemy</span>
            </h3>
          </div>
           <span className="services_button"> {/*onClick={() => toggleTab(3)}*/}
            <a href="https://www.udemy.com/certificate/UC-d5113239-5102-472f-aab5-97671f743d1a/" style={{ color: "inherit", textDecoration: "none" }}>View Now</a>
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span> 
          <div
            className={
              toggleState === 3
                ? "services_modal active_modal"
                : "services_modal"
            }
          >
            <div className="services_model-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_model-close"
              ></i>
              <h3 className="services_model-title">Visual Designer</h3>
              <p className="services_modal-description">
                Services with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="servives_modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="servives_modal-info">Web page development</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="servives_modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="servives_modal-info">
                    I position your company brand..
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="servives_modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

                <div className="services_content">
          <div>
            <img src={Certificate4} alt="Product Designer" className="services_img" />
            {/* <i className="uil uil-edit services_icon"></i> */}
            <h3 className="services_title">
              Tips to Ask Questions that Enhance Communication <br/>
              <span className="services_title-line">from Linkedin</span>
            </h3>
          </div>
           <span className="services_button"> {/*onClick={() => toggleTab(3)}*/}
            <a href="https://www.linkedin.com/learning/certificates/ce6c531dd855219f0fd52e976dd5cac98d7326ef2d775570a47bd2415cd594d7" style={{ color: "inherit", textDecoration: "none" }}>View Now</a>
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span> 
          <div
            className={
              toggleState === 3
                ? "services_modal active_modal"
                : "services_modal"
            }
          >
            <div className="services_model-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_model-close"
              ></i>
              <h3 className="services_model-title">Visual Designer</h3>
              <p className="services_modal-description">
                Services with more than 3 years of experience. Providing quality
                work to clients and companies.
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="servives_modal-info">
                    I develop the user interface.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="servives_modal-info">Web page development</p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="servives_modal-info">
                    I create ux element interactions.
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="servives_modal-info">
                    I position your company brand..
                  </p>
                </li>

                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="servives_modal-info">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

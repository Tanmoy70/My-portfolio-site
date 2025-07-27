import React, { useState } from "react";
import "./qualification.css";

export default function Qualification() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section id="qualification" className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My prosonal journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification_icon"></i>
            Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification_icon"></i>
            Experience
          </div>
        </div>

        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Master's of Computer Application
                </h3>
                <span className="qualification_subtitle">
                  Seacom Engineering Collge
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2024 - 2026
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">
                  Bachelor of Computer Applications
                </h3>
                <span className="qualification_subtitle">
                  Seacom Management Collge
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2024
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Higher Secondary Certificate
                </h3>
                <span className="qualification_subtitle">
                  Makardha Bamasundari Institution
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2019 - 2021
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">
                  Secondary Certificate Program
                </h3>
                <span className="qualification_subtitle">
                  Prasastha Durlav Chandra Saha Vidyapith
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2013 - 2019
                </div>
              </div>
            </div>
          </div>

          {/* <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Product Designer</h3>
                <span className="qualification_subtitle">Microsoft Spain</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2024 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">UX Designer</h3>
                <span className="qualification_subtitle">
                  Apple Inc - Spain
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2020 - 2021
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Web Designer</h3>
                <span className="qualification_subtitle">Figma - Spain</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2018 - 2020
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div> */}

          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">MERN Developer</h3>
                <span className="qualification_subtitle">
                  Webgen Technologies Pvt. Ltd.
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2024 - Present
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">MCA (Pursuing)</h3>
                <span className="qualification_subtitle">
                  Seacom Engineering College
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2024 - Present
                </div>
              </div>
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">BCA</h3>
                <span className="qualification_subtitle">
                  Seacom Management College
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2024
                </div>
              </div>

              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

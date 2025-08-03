import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Tanmoy</h1>

        {/* <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer_link">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="footer_link">
              Skills
            </a>
          </li>
        </ul> */}

        <div className="footer_social">
          <a
            href="https://github.com/Tanmoy70"
            className="footer_social-link"
            target="_blank"
          >
            <i class="bx bxl-github"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/tanmoykanrar70/"
            className="footer_social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://x.com/tanmoy_kanrar"
            className="footer_social-link"
            target="_blank"
          >
            <i class="bx bxl-twitter"></i>
          </a>

           <a
            href="https://www.facebook.com/tanmoy.kanrar.573805"
            className="footer_social-link"
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>


           <a
            href="https://www.instagram.com/tanmoy_kanrar01/"
            className="footer_social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>
        </div>
        <span className="footer_copy">
          &#169;2025 TanmoyKanrar. All rights reserved
        </span>
      </div>
    </footer>
  );
}

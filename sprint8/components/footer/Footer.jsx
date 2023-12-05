import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./Footer.module.css";
import { montserrat } from "@/app/fonts";

export default function Footer() {
  return (
    <footer className="footer w-full">
      <div className={`footer-container ${styles.container}`}>
        <div className="flex flex-col">
          <h3 className={`${montserrat.className} text-slate-100 antialiased`}>
            Nuestras redes sociales
          </h3>
          <div
            className={`mt-2 footer__social text-slate-100 ${styles.footer__social}`}
          >
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="no-underline"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className={`icon ${styles.icon}`}
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="no-underline"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className={`icon ${styles.icon}`}
              />
            </a>
            <a
              href="https://www.twitter.com/"
              target="_blank"
              className="no-underline"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className={`icon ${styles.icon}`}
              />
            </a>
          </div>
        </div>
        <div className="footer__links">
          <a
            href="https://www.facebook.com/"
            className={`${montserrat.className} text-gray-50 antialiased no-underline hover:underline mx-2`}
          >
            About
          </a>
          <a
            href="https://www.facebook.com/"
            className={`${montserrat.className} text-gray-50 antialiased no-underline hover:underline mx-2`}
          >
            Contact
          </a>
          <a
            href="https://www.facebook.com/"
            className={`${montserrat.className} text-gray-50 antialiased no-underline hover:underline mx-2`}
          >
            Terms & Conditions
          </a>
          <a
            href="https://www.facebook.com/"
            className={`${montserrat.className} text-gray-50 antialiased no-underline hover:underline mx-2`}
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

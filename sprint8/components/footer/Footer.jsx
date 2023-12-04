import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__logo">
          <img src="#" alt="logo" />
        </div>
        <div className="footer__social">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            className="no-underline"
          >
            <img src="#" alt="facebook" />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            className="no-underline"
          >
            <img src="#" alt="instagram" />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            className="no-underline"
          >
            <img src="#" alt="twitter" />
          </a>
        </div>
        <div className="footer__links">
          <a href="https://www.facebook.com/" className="no-underline">
            About
          </a>
          <a href="https://www.facebook.com/" className="no-underline">
            Contact
          </a>
          <a href="https://www.facebook.com/" className="no-underline">
            Terms & Conditions
          </a>
          <a href="https://www.facebook.com/" className="no-underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}

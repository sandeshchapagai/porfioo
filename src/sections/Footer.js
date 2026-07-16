import React from "react";
import { socialprofils, logotext } from "../content_option";

export const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-inner">
      <p className="footer-brand">
        {logotext.toLowerCase()}<span className="brand-accent">.</span>
      </p>
      <div className="footer-links">
        <a href={socialprofils.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="#home">Back to top ↑</a>
      </div>
      <p className="footer-copy">© 2026 Sandesh Chapagai · Built with React</p>
    </div>
  </footer>
);

export default Footer;

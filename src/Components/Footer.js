import React from "react";

export const Footer = ({ social }) => (
  <footer>
    <div className="row">
      <div className="twelve columns">
        <ul className="social-links">
          {social?.map?.((network) => (
            <li key={network.name}>
              <a href={network.url}>
                <i className={network.className}></i>
              </a>
            </li>
          ))}
        </ul>

        <ul className="copyright">
          <li>&copy; Copyright 2024 Persona Studios</li>
        </ul>
      </div>
      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <i className="icon-up-open"></i>
        </a>
      </div>
    </div>
  </footer>
);

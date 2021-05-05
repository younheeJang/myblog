//MovieHeader

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const MovieHeader: React.FC = () => {
  return (
    <>
      <section className="hero is-link is-large">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item">
                  <img src="/images/LOGO.png" alt="Logo" />
                </a>
                <span className="navbar-burger" data-target="navbarMenuHeroB">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroB" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item is-active">Home</a>
                  <a className="navbar-item">Examples</a>
                  <a className="navbar-item">Documentation</a>
                  <span className="navbar-item">
                    <a className="button is-info is-inverted">
                      <span className="icon">
                        <FontAwesomeIcon icon={faDownload} />
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">Movie</p>
            <p className="subtitle">Recent5</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MovieHeader;

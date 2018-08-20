import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component{
  render(){
    return(
        <section className="header is-transparent" role="navigation">
          <div className="container">
            <div className="columns is-mobile is-size-7 is-weight-bold">
              <div className="column is-offset-4-mobile is-offset-5-tablet is-offset-1-desktop is-narrow  nav-home  ">
                <a className="navbar-item nav-btn__text has-text-grey-dark"  href="/">
                  <p >HOME</p>
                </a>
              </div>
              <div className="column is-narrow nav-btn ">
                <Link className="navbar-item nav-btn__text has-text-grey-dark" to="/contact">
                    <p>CONTACT</p>
                </Link>
              </div>
            </div>
          </div>
        </section>
    );
  }
}

export default Header;

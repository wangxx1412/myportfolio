import React, { Component } from "react";
import selfie from "../assets/images/selfie.jpg";
import { Link } from "react-router-dom";

class Hero extends Component {
  render() {
    return (
      <section className="hero is-large">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="hero__content column is-4-desktop is-offset-1-desktop is-offset-1-mobile is-offset-1-tablet">
              <div className="hero__title">
                <p className="titleIntro is-size-7 has-text-warning">
                  HI MY NAME IS
                </p>
                <h1 className="title is-size-1-tablet is-size-3-mobile">
                  XIAOXUAN WANG & WELCOME
                </h1>
                <h2 className="subtitle is-size-6 is-weight-normal has-text-grey-dark">
                  I'm a web developing enthusiast live in Canada, who love
                  learning and using new technology and enjoy coding. I'm also a
                  crypto-currency trader and a crazy soccer fan. If you want
                  contact me, you can use the{" "}
                  <span>
                    <Link className="has-text-warning" to="/contact">
                      contact page
                    </Link>
                  </span>{" "}
                  or through social medias listed at the footer.
                </h2>
              </div>
            </div>
            <div className="column is-5-desktop is-offset-1 is-hidden-touch">
              <div className="hero__img ">
                <img src={selfie} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;

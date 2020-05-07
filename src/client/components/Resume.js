import React, { Component } from "react";

class Resume extends Component {
  render() {
    return (
      <section className="resume">
        <div className="container is-fullhd">
          <div className="columns is-desktop is-vcentered">
            <div className="skill-title column  is-4-desktop is-offset-1-desktop is-11-touch is-offset-1-touch">
              <p className="titleIntro is-size-7 has-text-warning">
                MY SKILLS ARE
              </p>
              <p className="title is-1 is-size-1-tablet is-size-3-mobile">
                FULL STACK DEVELOPING & MULTI-PHYSICS SIMULATION
              </p>
              <p className="subtitle is-3 is-size-6 is-weight-normal has-text-grey-dark">
                If you are interested, please check my Resume through the button
                below.
              </p>
              <div className="btn-resume">
                <a
                  className="button is-large is-grey is-outlined is-radiusless"
                  href="https://drive.google.com/file/d/1XCY-OvDPLs_BhHfaVV92Kh_77iBFe_aU/view"
                >
                  <p className="btn-text">Resume</p>
                </a>
              </div>
            </div>
            <div className="skill-content column is-4-desktop is-offset-1-desktop is-11-touch is-offset-1-touch">
              <h2 className="content-title has-text-grey">WEB DEVELOP</h2>
              <div className="content-text">
                <p>
                  I grew my interest and skills in web developing by numerous
                  resources on the Internet and enhanced through Lighthouse Labs
                  Bootcamp. Here are the skills I have:
                </p>
                <dl>
                  <dt>
                    <strong>Programming Languages:</strong>
                  </dt>
                  <dd>JavaScript, HTML, CSS, Ruby</dd>
                  <dt>
                    <strong>Frameworks, Libraries:</strong>
                  </dt>
                  <dd>
                    React, Rails, JQuery, Vue, Express, SASS, Material UI,
                    GraphQL, Jest, Mocha, Chai, Cypress, React Testing Library
                  </dd>
                  <dt>
                    <strong>DB and Tools:</strong>
                  </dt>
                  <dd>PostgresSQL, MongoDB, Git, Trello, Vagrant, Webpack</dd>
                </dl>
              </div>
              <h2 className="content-title has-text-grey">ACADEMIC</h2>
              <div className="content-text">
                <p>
                  Graduated from University of Victoria, I gained knowledge and
                  the experiences in research from several projects.
                </p>
                <dl>
                  <dt>
                    <strong>Software:</strong>{" "}
                  </dt>
                  <dd>COMSOL, SolidWorks, MATLAB, MS Office, Latex.</dd>
                  <dt>
                    <strong>Skills:</strong>
                  </dt>
                  <dd>Plans, Reserach, Simulation, Debug, Analyze, Reports.</dd>
                </dl>
              </div>
              <h2 className="content-title has-text-grey">ONGOING</h2>
              <div className="content-text">
                <p>
                  While I'm keep on studying the techs I'm familiar with, I'm
                  going to pick up new stuffs.
                </p>
                <dl>
                  <dt>
                    <strong>Skills:</strong>
                  </dt>
                  <dd>PHP, Java, Python and more.</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Resume;

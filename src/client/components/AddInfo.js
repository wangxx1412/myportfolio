import React, { Component } from "react";
import mypage from "../assets/images/mypage.png";
import eh2d from "../assets/images/eh2d.jpg";
import wgm2d from "../assets/images/wgm2d.jpg";

class AddInfo extends Component {
  render() {
    return (
      <section className="addinfo">
        <div className="container is-fullhd">
          <div className="columns is-desktop">
            <div className="addinfo-title column is-vcentered is-4-desktop is-offset-1-desktop is-11-touch is-offset-1-mobile is-offset-1-tablet">
              <p className="titleIntro is-size-7 has-text-warning">
                LET'S MOVE ON TO
              </p>
              <p className="title is-1 is-size-1-tablet is-size-3-mobile">
                WORKS AND MORE
              </p>
            </div>
            <div className="addinfo-content column is-vcentered is-4-desktop is-offset-1-desktop is-10-touch is-offset-1-mobile is-offset-1-tablet">
              <h2 className="addinfo-title has-text-grey">EXPERIENCES</h2>
              <p className="addinfo-text">
                Born and raised in China and studied in Harbin Engineering
                University majoring Electrical Engineering, then continued my
                student life in University of Victoria in Canada. I gained
                social skills, attitude and academic experiences in school and
                several jobs: Food delivery, research assistant, volunteers and
                crypto-trader.
              </p>
            </div>
          </div>
          <div className="columns is-desktop">
            <div className="addinfo-content column is-4-desktop is-offset-1-desktop is-10-touch is-offset-1-mobile is-offset-1-tablet">
              <h2 className="addinfo-title has-text-grey">BACK IN UVIC</h2>
              <p className="addinfo-text">
                My graduate research focusing on "Whispering gallery-mode
                microcavities" and "Deign and simulation of Energy harvester".
              </p>
              <img src={eh2d} />
              <img src={wgm2d} />
            </div>
            <div className="addinfo-content column is-4-desktop is-offset-1-desktop is-10-touch is-offset-1-mobile is-offset-1-tablet">
              <h2 className="addinfo-title has-text-grey">HANDS ON WEB</h2>
              <p className="addinfo-text">
                I learned web developing by myself, some of my works are not
                finished which will be updated later, here is my portfolio.
              </p>
              <a href="https://xxwmypage.herokuapp.com/">
                <img src={mypage} />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AddInfo;

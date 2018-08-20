import React, { Component } from "react";
import github from '../assets/icons/github-logo.png';
import mail from '../assets/icons/gmail.png';
import ins from '../assets/icons/instagram-logo.png';
import linkedin from '../assets/icons/social-linkedin-circular-button.png';

class Footer extends Component{
  render(){
    return(
      <div className="footer has-text-centered">
        <div className="container is-fullhd">
          <div className="social-icons">
            <span className="icon" >
              <a href="https://github.com/wangxx1412">
                <img src={github}/>
              </a>
            </span>
            <span className="icon">
              <a href="https://www.linkedin.com/in/xiaoxuan-wang-449a5998/">
                <img src={linkedin} />
              </a>
            </span>
            <span className="icon">
              <a href="https://www.instagram.com/xxmabuuu/?hl=en">
                <img src={ins} />
              </a>
            </span>
            <span className="icon">
              <a href="mailto:wangxiaoxuan4869@gmail.com">
                <img src={mail} />
              </a>
            </span>
          </div>
          <div className="msg-web">
            This website is built by myself <span><a href="https://github.com/wangxx1412/myportfolio">Source code</a></span>
          </div>
          <div className="icons-cred is-size-7">Icons made by &nbsp;
            <a href="https://www.flaticon.com/authors/dave-gandy" title="Dave Gandy">Dave Gandy</a>,
            <a href="http://www.freepik.com" title="Freepik">Freepik</a>,
            <a href="https://www.flaticon.com/authors/alessio-atzeni" title="Alessio Atzeni">Alessio Atzeni</a>&nbsp;
            from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>&nbsp;
            is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
          </div>
          <div className="msg-web is-size-7">Design originated from <a href="https://janlosert.com/">Jan Losert</a>.</div>
          <a className="bulma-img" href="https://bulma.io">
            <img src="https://bulma.io/images/made-with-bulma--white.png" alt="Made with Bulma" width="128" height="24" />
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;

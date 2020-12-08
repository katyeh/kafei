import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__name-div">
        <h1 /* onClick={() => history.push("www.hellokat.io")} */ className="footer__name">Kathleen Yeh</h1>
      </div>
      <div className="social-links">
        <ul className="social-list">
          <li className="social-list__item">
            <a className="social-list__link" href="https://github.com/katyeh">
              <GitHubIcon style={{ fontSize: 30 }}/>
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="mailto:kathleenyeh1@gmail.com">
              <LinkedInIcon style={{ fontSize: 30 }}/>
            </a>
          </li>
          <li className="social-list__item">
            <a className="social-list__link" href="mailto:kathleenyeh1@gmail.com">
              <EmailIcon style={{ fontSize: 30 }}/>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer;

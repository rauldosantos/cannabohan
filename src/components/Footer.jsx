import React, { Fragment } from 'react';
import { Image } from 'react-bootstrap';

class Footer extends React.Component {
  render() {
    var textStyle = {
      color: '#9c753a',
      fontSize: '16px'
    };

    return (
      <Fragment>
        <div className="social-share-container">
          <div>
            <span style={textStyle}>Buscanos en las redes</span>
          </div>

          <a href="https://facebook.com" target="_blank">
            <Image src="/images/logo-facebook.svg" width={60} />
          </a>
          <a href="https://instagram.com" target="_blank">
            <Image src="/images/logo-instagram.svg" width={60} />
          </a>
        </div>
        <div className="spacer5" />
        <footer className="footer">
          <span className="footer-text">
            Todos los derechos reservados
            <br />
            Copyright © 2018
          </span>
        </footer>
      </Fragment>
    );
  }
}

export default Footer;

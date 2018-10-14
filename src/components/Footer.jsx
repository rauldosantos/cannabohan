import React, { Fragment } from 'react';
import { ParallaxBanner, Parallax } from 'react-scroll-parallax';

class Footer extends React.Component {
  render() {
    return (
      <Fragment>
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

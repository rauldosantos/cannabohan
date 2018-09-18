import React, { Fragment } from 'react';
import { ParallaxBanner, Parallax } from 'react-scroll-parallax';

class Footer extends React.Component {
  render() {
    const { image, min, max, children } = this.props;
    return (
      <Fragment>
        <footer className="footer">Pie de la pgina</footer>
      </Fragment>
    );
  }
}

export default Footer;

import React, { Component, Fragment } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import { Row, Col, Thumbnail, Fade, Image } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import { Link } from 'react-router-dom';
import { ParallaxBanner, Parallax } from 'react-scroll-parallax';

class PanelBrands extends Component {
  render() {
    return (
      <Fragment>
        <Parallax
          offsetYMax={-10}
          offsetYMin={10}
          slowerScrollRate
          className="brand-padding"
        >
          <div className="brands-row ">
            <Row>
              <Col>
                <div className="brands-border" />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="spacer1" />
              </Col>
            </Row>
            <Row>
              <Col className="brand-padding" md={2} lg={2} sm={6} xs={12}>
                <Link to="/products/crececrece">
                  <Image
                    width={320}
                    className="brand-image"
                    responsive
                    src="images/logo-crececrece.svg"
                  />
                </Link>
              </Col>
              <Col md={2} lg={2} sm={6} xs={12}>
                <Link to="/products/weeddesign">
                  <Image
                    width={320}
                    className="brand-image"
                    responsive
                    src="/images/logo-weeddesign.svg"
                  />
                </Link>
              </Col>
              <Col md={2} lg={2} sm={6} xs={12}>
                <Link to="/products/egrow">
                  <Image
                    width={320}
                    className="brand-image"
                    responsive
                    src="/images/logo-egrow.svg"
                  />
                </Link>
              </Col>
              <Col md={2} lg={2} sm={6} xs={12}>
                <Link to="/products/abonodemar">
                  <Image
                    width={320}
                    className="brand-image"
                    responsive
                    src="/images/logo-abonodemar.svg"
                  />
                </Link>
              </Col>
              <Col md={2} lg={2} sm={6} xs={12}>
                <Link to="/products/sembrandovida">
                  <Image
                    width={320}
                    className="brand-image"
                    responsive
                    src="/images/logo-sembrandovida.svg"
                  />
                </Link>
              </Col>
              <Col md={2} lg={2} sm={6} xs={12}>
                <Link to="/products/biofertil">
                  <Image
                    width={320}
                    className="brand-image"
                    responsive
                    src="/images/logo-biofertil.svg"
                  />
                </Link>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="spacer1" />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="brands-border" />
              </Col>
            </Row>
          </div>
        </Parallax>
      </Fragment>
    );
  }
}

export default PanelBrands;

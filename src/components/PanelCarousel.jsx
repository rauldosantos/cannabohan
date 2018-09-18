import React, { Component, Fragment } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import { Grid, Row, Col, Carousel, PageHeader, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

class PanelCarousel extends Component {
  render() {
    bootstrapUtils.addStyle(PageHeader, 'subtitle');

    return (
      <Fragment>
        <Carousel pauseOnHover>
          <Carousel.Item animateIn animateOut>
            <Link to="/products/crececrece">
              <Image
                className="brand-image"
                responsive
                src="images/logo-crececrece.svg"
              />
            </Link>
            <Link to="/products/crececrece">
              <Image
                className="brand-image"
                responsive
                src="images/logo-crececrece.svg"
              />
            </Link>
            <Link to="/products/crececrece">
              <Image
                className="brand-image"
                responsive
                src="images/logo-crececrece.svg"
              />
            </Link>
          </Carousel.Item>
          <Carousel.Item animateIn animateOut>
            <Image
              responsive
              width={1920}
              height={700}
              src="/images/image2.jpg"
            />
          </Carousel.Item>
          <Carousel.Item animateIn animateOut>
            <Image
              responsive
              width={1920}
              height={700}
              src="/images/image3.png"
            />
          </Carousel.Item>
        </Carousel>
      </Fragment>
    );
  }
}

export default PanelCarousel;

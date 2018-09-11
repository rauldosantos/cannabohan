import React, { Component, Fragment } from 'react';
import {
  Grid,
  Row,
  Col,
  ResponsiveEmbed,
  PageHeader,
  Image,
  Well,
  Clearfix
} from 'react-bootstrap';

import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header';
import PanelInfo from '../components/PanelInfo';
import PanelCarousel from '../components/PanelCarousel';
import PanelProductTypes from '../components/PanelProductTypes';
import { ParallaxBanner, Parallax } from 'react-scroll-parallax';
import HeroBanner from '../components/HeroBanner';

class Home extends Component {
  render() {
    const grid = (
      <Grid fluid>
        <Row className="show-grid">
          <Col md={1} lg={1} xs={1} smHidden />
          <Col md={12} lg={12} xs={12} sm={12}>
            <Header />
            <PageHeader bsStyle="custom">
              <Image
                className="img-logo-header"
                responsive
                width={760}
                src="images/logo-cannabohan.svg"
              />
              <br />
              <small>
                <span className="text-color-nav text-logo">
                  Productos uruguayos para cultivadores de cannabis
                </span>
              </small>
              <Image circle src="images/uruguay.png" width="30" height="30" />
            </PageHeader>
          </Col>
          <Col md={1} lg={1} xs={1} smHidden />
        </Row>
        <Row className="row-best-products">
          <Col>
            <HeroBanner
              min={'-20%'}
              max={'20%'}
              image="images/background-jumbotron.jpg"
            >
              <h1>Bienvenido, cultivador </h1>
              <p>
                En esta página encontrarás productos uruguayos que te ayudarán a
                convertirte en un gran cultivador de cannabis criollo, un
                verdadero Cannabohan.
              </p>
            </HeroBanner>
          </Col>
        </Row>
        <Row>
          <div className="spacer"></div>
        </Row>
        <Row >
          <Col xs={4}>
            <Parallax
              offsetYMin={0}
              offsetYMax={0}
              offsetXMax={0}
              offsetXMin={20}
              slowerScrollRate
              className="item-parallax-info">
              <Image
                width={220}
                className="item-info-panel"
                responsive
                src="images/SUSTRAATOS.svg"
              />
              <h1>SUSTRATOS</h1>
            </Parallax>
          </Col>
          <Col xs={4}>
            <Parallax 
            offsetYMin={0} 
            offsetYMax={0} 
            slowerScrollRate
            className="item-parallax-info">
              <Image
                width={220}
                className="item-info-panel"
                responsive
                src="images/FERTILIZANTES.svg"
              /><h1>FERTILIZANTES</h1>
            </Parallax>
          </Col>
          <Col xs={4}>
            <Parallax
              offsetYMin={0}
              offsetYMax={0}
              offsetXMax={20}
              offsetXMin={-20}
              slowerScrollRate
              className="item-parallax-info">
              <Image
                width={220}
                className="item-info-panel"
                responsive
                src="images/MAQUINARIA.svg"
              />
              <h1>MAQUINARIA</h1>
            </Parallax>
          </Col>
        </Row>
        <Row>
          <div className="spacer"></div>
        </Row>
        <Row>
          <Col md={1} lg={1} xs={1} smHidden />
          <Col md={10} lg={10} xs={12} sm={12}>
            <PanelCarousel />
          </Col>
          <Col md={1} lg={1} xs={1} smHidden />
        </Row>
        <Row>
          <div className="spacer"></div>
        </Row>
      </Grid>
    );
    return <Fragment>{grid}</Fragment>;
  }
}

export default Home;

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
import { Link } from 'react-router-dom'  ;

import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header';
import PanelInfo from '../components/PanelInfo';
import PanelCarousel from '../components/PanelCarousel';
import PanelProductTypes from '../components/PanelProductTypes';
import { ParallaxBanner, Parallax } from 'react-scroll-parallax';
import HeroBanner from '../components/HeroBanner';
import data from '../data/data.json';

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
                src="images/logo-cannabohan.png"
              />
              <br />
              <small>
                <span className="text-color-nav text-logo">
                  Productos uruguayos para cultivadores de cannabis {" "}
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
              image="images/background-jumbotron2.jpg"
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
                width={200}
                className="item-info-panel"
                responsive
                src="images/SUSTRAATOS.svg"
              />
              <h1 className="h1-subtitle">SUSTRATOS</h1>
              <span className="item-info-panel-descrip">Lo que empieza bien... Aboná tus plantas desde la raíz</span>
            </Parallax>
          </Col>
          <Col xs={4}>
            <Parallax 
            offsetYMin={0} 
            offsetYMax={0} 
            slowerScrollRate
            className="item-parallax-info">
              <Image
                width={200}
                className="item-info-panel"
                responsive
                src="images/FERTILIZANTES.svg"
              /><h1 className="h1-subtitle">FERTILIZANTES</h1>
              <span className="item-info-panel-descrip">Los mejores fertilizantes para hacer leudar tus cogollos</span>

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
                width={200}
                className="item-info-panel"
                responsive
                src="images/MAQUINARIA.svg"
              />
              <h1 className="h1-subtitle">TECNOLOGÍA</h1>
              <span className="item-info-panel-descrip">Tecnología aplicada a la producción y tratamiento de la marihuana</span>
            </Parallax>
          </Col>
        </Row>
        <Row>
          <div className="spacer5"></div>
        </Row>
        <Row>
          <Col >
            <PanelCarousel />
          </Col>
        </Row>
        <Row>
          <div className="spacer5"></div>
        </Row>
        <Row>
        <Col md={4} lg={4} sm={6} xs={12}>
        <Link to='/products/crececrece'>
              <Image
                width={150}
                className="brand-image"
                responsive
                src="images/logo-crececrece.svg"
              />
              </Link>
            </Col>
            <Col md={4} lg={4} sm={6} xs={12}>
            <Link to='/products/weeddesign'>
              <Image
                width={250}
                className="brand-image"
                responsive
                src="images/logo-weeddesign.svg"
              />
              </Link>
            </Col>
            <Col md={4} lg={4} sm={6} xs={12} smHidden xsHidden>
            <Link to='/products/egrow'>
              <Image
                width={250}
                className="brand-image"
                responsive
                src="images/logo-egrow.svg"
              />
            </Link>
            </Col>
        </Row>
        <Row>
        <Col md={4} lg={4} sm={6} xs={12} mdHidden lgHidden>
        <Link to='/products/egrow'>
          <Image
            width={250}
            className="brand-image"
            responsive
            src="images/logo-egrow.svg"
          />
        </Link>
        </Col>
        <Col md={4} lg={4} sm={6} xs={12}>
        <Link to='/products/abonodemar'>
              <Image
                width={200}
                className="brand-image"
                responsive
                src="images/logo-abonodemar.svg"
              />
              </Link>
            </Col>
            <Col md={4} lg={4} sm={6} xs={12} smHidden >
              <Link to='/products/sembrandovida'>
              <Image
                width={250}
                className="brand-image"
                responsive
                src="images/logo-sembrandovida.svg"
              />
              </Link>
            </Col>
            <Col md={4} lg={4} sm={6} xs={12} smHidden>
            <Link to='/products/biofertil'>
              <Image
                width={250}
                className="brand-image"
                responsive
                src="images/logo-biofertil.svg"
              />
            </Link>
            </Col>
        </Row>
        <Row>
        <Col md={4} lg={4} sm={6} xsHidden mdHidden lgHidden>
        <Link to='/products/sembrandovida'>
        <Image
          width={250}
          className="brand-image"
          responsive
          src="images/logo-sembrandovida.svg"
        />
        </Link>
      </Col>
      <Col md={4} lg={4} sm={6} xsHidden mdHidden lgHidden>
      <Link to='/products/biofertil'>
        <Image
          width={250}
          className="brand-image"
          responsive
          src="images/logo-biofertil.svg"
        />
      </Link>
      </Col>
        </Row>
      </Grid>
    );
    console.log(data["brands"]);
    return <Fragment>{grid}</Fragment>;
  }
}

export default Home;

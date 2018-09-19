import React, { Component, Fragment } from 'react';
import {
  Grid,
  Row,
  Col,
  ResponsiveEmbed,
  PageHeader,
  Image,
  Clearfix
} from 'react-bootstrap';

import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header';
import PanelInfo from '../components/PanelInfo';
import PanelCarousel from '../components/PanelCarousel';
import PanelBrands from '../components/PanelBrands';
import { ParallaxBanner, Parallax } from 'react-scroll-parallax';
import HeroBanner from '../components/HeroBanner';
import Footer from '../components/Footer';

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
                src="/images/logo-cannabohan.png"
              />
              <br />
              <small>
                <span className="text-color-nav text-logo">
                  Productos uruguayos para cultivadores de cannabis{' '}
                </span>
              </small>
              <Image circle src="/images/uruguay.png" width="30" height="30" />
            </PageHeader>
          </Col>
          <Col md={1} lg={1} xs={1} smHidden />
        </Row>
        <Row className="row-best-products">
          <Col>
            <HeroBanner min={'-15%'} max={'15%'} image="/images/back-jumbo.jpg">
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
          <div className="spacer5" />
        </Row>
        <Row className="row-info">
          <Col className="item-info-col" xsHidden smHidden lg={4} md={4}>
            <Parallax
              offsetXMax={0}
              offsetXMin={20}
              slowerScrollRate
              className="item-parallax-info"
            >
              <Image
                width={110}
                className="item-info-panel"
                responsive
                src="images/logo-sustratos.svg"
              />
              <h1 className="h1-subtitle">SUSTRATOS</h1>
              <span className="item-info-panel-descrip">
                Lo que empieza bien... Aboná tus plantas desde la raíz
              </span>
            </Parallax>
          </Col>
          <Col className="item-info-col" xsHidden smHidden lg={4} md={4}>
            <Parallax slowerScrollRate className="item-parallax-info">
              <Image
                width={110}
                className="item-info-panel"
                responsive
                src="/images/logo-fertilizantes.svg"
              />
              <h1 className="h1-subtitle">FERTILIZANTES</h1>
              <span className="item-info-panel-descrip">
                Los mejores fertilizantes para hacer leudar tus cogollos
              </span>
            </Parallax>
          </Col>
          <Col className="item-info-col" xsHidden smHidden lg={4} md={4}>
            <Parallax
              offsetXMax={0}
              offsetXMin={-20}
              slowerScrollRate
              className="item-parallax-info"
            >
              <Image
                width={125}
                className="item-info-panel"
                responsive
                src="/images/logo-maquinaria.svg"
              />
              <h1 className="h1-subtitle">TECNOLOGÍA</h1>
              <span className="item-info-panel-descrip">
                Tecnología aplicada a la producción y tratamiento de la
                marihuana
              </span>
            </Parallax>
          </Col>

          <Col className="item-info-col" lgHidden mdHidden>
            <Image
              width={110}
              className="item-info-panel"
              responsive
              src="images/logo-sustratos.svg"
            />
            <h1 className="h1-subtitle">SUSTRATOS</h1>
            <span className="item-info-panel-descrip">
              Lo que empieza bien... Aboná tus plantas desde la raíz
            </span>
          </Col>

          <Col className="item-info-col" lgHidden mdHidden>
            <Image
              width={110}
              className="item-info-panel"
              responsive
              src="/images/logo-fertilizantes.svg"
            />
            <h1 className="h1-subtitle">FERTILIZANTES</h1>
            <span className="item-info-panel-descrip">
              Los mejores fertilizantes para hacer leudar tus cogollos
            </span>
          </Col>

          <Col className="item-info-col" lgHidden mdHidden>
            <Image
              width={125}
              className="item-info-panel"
              responsive
              src="/images/logo-maquinaria.svg"
            />
            <h1 className="h1-subtitle">TECNOLOGÍA</h1>
            <span className="item-info-panel-descrip">
              Tecnología aplicada a la producción y tratamiento de la marihuana
            </span>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="spacer8" />
          </Col>
        </Row>

        <Row>{/*<Col >
            <PanelCarousel />
          </Col>*/}</Row>

        <Row>
          <Col className="row-brands-scroll" xs={12}>
            <PanelBrands />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="spacer8" />
          </Col>
        </Row>
        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>
      </Grid>
    );
    console.log(data['brands']);
    return <Fragment>{grid}</Fragment>;
  }
}

export default Home;

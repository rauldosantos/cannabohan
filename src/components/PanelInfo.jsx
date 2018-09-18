import React, { Component, Fragment } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './Header';
import {
  Grid,
  Row,
  Col,
  Jumbotron,
  Carousel,
  PageHeader,
  Image
} from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import { Parallax } from 'react-scroll-parallax';

class PanelInfo extends Component {
  render() {
    bootstrapUtils.addStyle(PageHeader, 'custom');
    bootstrapUtils.addStyle(PageHeader, 'color');

    const styles = {
      backgroundImage: 'url(/images/background-jumbotron.jpg)',
      width: '100%',
      height: '400px'
    };

    return (
      <Fragment>
        <Parallax offsetYMax={20} offsetYMin={-20} slowerScrollRate>
          <Jumbotron style={styles} bsStyle="color">
            <Parallax offsetYMax={0} offsetYMin={10} slowerScrollRate>
              <h1>Bienvenido, cultivador </h1>
              <p>
                En esta página encontrarás productos uruguayos que te ayudarán a
                convertirte en un gran cultivador de cannabis criollo, un
                verdadero Cannabohan.
              </p>
            </Parallax>
          </Jumbotron>
        </Parallax>
      </Fragment>
    );
  }
}

export default PanelInfo;

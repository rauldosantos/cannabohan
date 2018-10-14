import React, { Component, Fragment } from 'react';
import { Grid, Row, Col, Thumbnail, Image, Button } from 'react-bootstrap';

import '../App.css';
import Header from '../components/Header';
import data from '../data/data.json';
import BrandTitle from '../components/BrandTitle';
import CardProduct from '../components/CardProduct';
import Footer from '../components/Footer';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapComponent = withGoogleMap(props => (
  <GoogleMap
    defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
    defaultZoom={13}
  />
));

class WeedMap extends Component {
  render() {
    const grid = (
      <Grid fluid>
        <Row className="showGrid">
          <Col md={12} lg={12} xs={12} sm={12}>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col className="title-brand-col" md={12} lg={12} xs={12} sm={12}>
            <BrandTitle idBrand="weeddesign" />
          </Col>
        </Row>
        <Row>
          <div className="spacer8" />
        </Row>
        <Row>
          <Col>
            <div>
              <MapComponent
                isMarkerShown
                containerElement={
                  <div style={{ height: `500px`, width: '500px' }} />
                }
                mapElement={<div style={{ height: `100%` }} />}
              />
            </div>
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
    return <Fragment>{grid}</Fragment>;
  }
}

export default WeedMap;

import React, { Component, Fragment } from 'react';
import { Grid, Row, Col, Thumbnail, Image, PageHeader } from 'react-bootstrap';

import '../App.css';
import Header from '../components/Header';
import data from '../data/data.json';

class ProductsByBrand extends Component {
  render() {
    const { match } = this.props;
    const { idBrand } = match.params;
    const { brands } = data;
    let brand = brands.find(value => value.id === idBrand);
    const { products } = brand;

    const grid = (
      <Grid fluid>
        <Row>
          <Col md={12} lg={12} xs={12} sm={12}>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col className="title-brand-col" md={12} lg={12} xs={12} sm={12}>
            <div className="title-brand-containter">
              <Image
                responsive
                width={250}
                className="title-brand-image"
                src={'/images/logo-' + idBrand + '.svg'}
              />
            </div>
          </Col>
        </Row>
      </Grid>
    );
    return <Fragment>{grid}</Fragment>;
  }
}

export default ProductsByBrand;

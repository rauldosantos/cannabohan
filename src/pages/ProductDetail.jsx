import React, { Component, Fragment } from 'react';
import { Grid, Row, Col, Thumbnail, Image, Button } from 'react-bootstrap';

import '../App.css';
import Header from '../components/Header';
import data from '../data/data.json';
import BrandTitle from '../components/BrandTitle';
import Footer from '../components/Footer';

class ProductDetail extends Component {
  render() {
    const { match } = this.props;
    const { idBrand, idProduct } = match.params;
    const { brands } = data;
    let brand = brands.find(value => value.id === idBrand);
    const { products } = brand;
    let product = products.find(value => value.idProduct === idProduct);
    console.log(product);
    const grid = (
      <Grid fluid>
        <Row className="showGrid">
          <Col md={12} lg={12} xs={12} sm={12}>
            <Header />
          </Col>
        </Row>
        <Row>
          <Col className="title-brand-col" md={12} lg={12} xs={12} sm={12}>
            <BrandTitle idBrand={idBrand} />
          </Col>
        </Row>
        <Row>
          <div className="spacer8" />
        </Row>
        <Row>
          <Col lg={3}>
            <div className="product-detail-image-container">
              <Image
                src="/images/logo-fertilizantes.svg"
                className="product-detail-image"
                width={200}
              />
            </div>
            <div className="product-detail-price">
              <span>$ {product.price}</span>
            </div>
          </Col>
          <Col lg={5}>
            <div className="product-info-container">
              <h1>{product.nameProduct}</h1>
              <p>{product.description}</p>
            </div>
            <span className="contact-number">
              <Image src="/images/logo-wassap.svg" width={40} /> 092111826
              Pedílo por whatsapp!
            </span>
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

export default ProductDetail;

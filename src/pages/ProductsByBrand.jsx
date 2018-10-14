import React, { Component, Fragment } from 'react';
import { Grid, Row, Col, Thumbnail, Image, Button } from 'react-bootstrap';

import '../App.css';
import Header from '../components/Header';
import data from '../data/data.json';
import BrandTitle from '../components/BrandTitle';
import CardProduct from '../components/CardProduct';
import Footer from '../components/Footer';

class ProductsByBrand extends Component {
  render() {
    const { match } = this.props;
    const { idBrand } = match.params;
    const { brands } = data;
    let brand = brands.find(value => value.id === idBrand);
    const { products } = brand;

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
          {products.map((value, index) => {
            console.log(value.urlPhoto);
            return (
              <Col md={4} xs={12}>
                <CardProduct
                  idProduct={value.idProduct}
                  imageURL={value.urlPhoto}
                  title={value.nameProduct}
                  price={value.price}
                  description={value.description}
                  shortDescription={value.shortDescription}
                  brand={brand}
                />
              </Col>
            );
          })}
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

export default ProductsByBrand;

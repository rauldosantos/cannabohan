import React, { Component , Fragment} from 'react';
import { Grid,Row,Col,Thumbnail , Image,PageHeader} from 'react-bootstrap';

import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header'
import PanelInfo from '../components/PanelInfo'

class ProductsByBrand extends Component {

  render() {
    const grid = (
      <Grid fluid>
        <Row className="show-grid">
          <Col >
            <Header/>
           </Col>
        </Row>
        <Row className="show-grid">
        <PageHeader bsStyle="custom">
              <span className="">Productos Cannabohanes</span>
            </PageHeader>
        </Row>
      </Grid>
    );
    return (
      <Fragment>
       { grid }
       </Fragment>
    );
  }
}

export default ProductsByBrand;
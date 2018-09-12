import React, { Component , Fragment} from 'react';
import { Grid,Row,Col,Thumbnail , Image,PageHeader} from 'react-bootstrap';

import '../App.css';
import Header from '../components/Header'

class ProductsByBrand extends Component {

  render() {
    const {match} = this.props;
    const {idBrand} = match.params; 
    console.log(idBrand)
    const grid = (
      <Grid fluid>
        <Row className="show-grid">
          <Col md={12} lg={12} xs={12} sm={12}>
            <Header/>
           </Col>
        </Row>
        <Row>
        <Col xs={12}>
          <Image width={500} src={"/images/logo-"+idBrand+".svg"}/>
        </Col>
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
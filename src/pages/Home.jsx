import React, { Component , Fragment} from 'react';
import { Grid,Row,Col,Thumbnail ,PageHeader,Image,Media} from 'react-bootstrap';

import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header'
import PanelInfo from '../components/PanelInfo'
import PanelCarousel from '../components/PanelCarousel';

class Home extends Component {

  render() {
    const grid = (
      <Grid fluid>
        <Row className="show-grid">
          <Col >
            <Header/>
            <PageHeader bsStyle="custom">
              <Image className="img-logo-header" responsive width={665} height={116} src="images/cannabohan-logo.png"  /> <br></br><small ><span className="text-color-nav text-logo">Productos uruguayos para cultivadores de cannabis </span></small><Image circle src="images/uruguay.png" width="30" height="30"/>
            </PageHeader>
          </Col>
        </Row>
        <Row className="row-best-products">
          <Col >
            
            <PanelInfo/>
          </Col>
        </Row>
        <Row className="row-best-products" >
          <Col md={12} lg={12} xs={12} sm={12}>
            <span className="text-best-products">Lo mejor de la vuelta...  <Image  width={80} height={80} src="images/jipi.png"  /></span>  
          </Col>
        </Row>
        <Row >
          <Col md={1} lg={1} xs={1} smHidden>
          </Col>
          <Col md={10} lg={10} xs={12} sm={12}>
            <PanelCarousel/>
          </Col>
          <Col md={1} lg={1} xs={1} smHidden>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col md={3} lg={3} sm={3} mdOffset={1}  smOffset={1}>
            <Thumbnail src="/images/sustratos.jpg" alt="320x240" href="/products/substratum">
              <h3>Sustratos</h3>
              <p>Los mejores sustratos de fabricación nacional</p>
            </Thumbnail>
          </Col>
          <Col md={3} lg={3} sm={3} lgOffset={1}>
            <Thumbnail src="/images/fertilizantes.jpg" alt="320x240" href="/products/fertilizers">
              <h3>Fertilizantes</h3>
              <p>Fertilizantes de fabricación uruguaya</p>
            </Thumbnail>
          </Col>
          <Col md={3} lg={3} sm={3} lgOffset={1}>
            <Thumbnail src="/images/equipos.jpg" alt="320x240" href="/products/tech">
              <h3>Maquinaria y Tecnología</h3>
              <p>Equipos y maquinaria que te ayudarán con tu cultivo</p>
            </Thumbnail>
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

export default Home;
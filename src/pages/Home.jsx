import React, { Component , Fragment} from 'react';
import { Grid,Row,Col,Thumbnail ,PageHeader,Image,Well,Clearfix} from 'react-bootstrap';

import logo from '../logo.svg';
import '../App.css';
import Header from '../components/Header'
import PanelInfo from '../components/PanelInfo'
import PanelCarousel from '../components/PanelCarousel';
import PanelProductTypes from '../components/PanelProductTypes';
import { ParallaxBanner , Parallax} from 'react-scroll-parallax';


class Home extends Component {

  render() {
    const grid = (
      <Grid fluid>
        <Row className="show-grid">
          <Col md={1} lg={1} xs={1} smHidden>
          </Col>
          <Col md={12} lg={12} xs={12} sm={12}>
            <Header/>
            <PageHeader bsStyle="custom">
              <Image className="img-logo-header" responsive width={598} height={104} src="images/cannabohan-logo.png"  /> <br></br><small ><span className="text-color-nav text-logo">Productos uruguayos para cultivadores de cannabis</span></small><Image circle src="images/uruguay.png" width="30" height="30"/>
            </PageHeader>
          </Col>
          <Col md={1} lg={1} xs={1} smHidden>
          </Col>
        </Row>
        <Row className="row-best-products">
          <Col >
            <PanelInfo/>
          </Col>
        </Row>
        <Row className="row-best-products" >
          <Col >
        
              <div className="products-panel"></div>
    
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
        <Row>
          <Well bsSize="large"></Well>
        </Row>
        <Row>
          <Col md={1} lg={1} xs={1} smHidden>
          </Col>
          <PanelProductTypes/>
          <Col md={1} lg={1} xs={1} smHidden>
          </Col>
          <Clearfix visibleSmBlock>

      </Clearfix>
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
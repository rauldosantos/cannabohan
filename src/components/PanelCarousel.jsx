import React, { Component , Fragment} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './Header'
import { Grid,Row,Col ,Jumbotron,Carousel,PageHeader, Image } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

class PanelCarousel extends Component {

  render() {
    bootstrapUtils.addStyle(PageHeader, 'subtitle');

    return (
      <Fragment>
        <Carousel>
          <Carousel.Item>
            <img width={900} height={500}  src="/images/promo-egrow.png" />
            
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500}  src="/images/promo-weeddesign.png" />
            
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} src="/images/promo-biofertil.png" />
            
          </Carousel.Item>
        </Carousel>
       </Fragment>
    );
  }
}

export default PanelCarousel;
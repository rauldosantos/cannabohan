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
            <img width={1024} height={300}  src="/images/image1.png" />
            <Carousel.Caption>
              <h3>E-Grow</h3>
              <p>Cultivos automatizados.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={1024} height={300}  src="/images/image3.png" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={1024} height={300} src="/images/image2.jpg" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
       </Fragment>
    );
  }
}

export default PanelCarousel;
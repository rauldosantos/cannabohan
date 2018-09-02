import React, { Component , Fragment} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './Header'
import { Grid,Row,Col ,Jumbotron,Carousel,PageHeader, Thumbnail } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

class PanelProductTypes extends Component {

  render() {
    bootstrapUtils.addStyle(PageHeader, 'custom');
    return (
      <Fragment>
        <Thumbnail src="/images/image1.jpg" alt="242x200" href="/products">
        <h3>Sustratos y Fertilizantes</h3>
        <p>Los mejores sustratos y fertilizantes de fabricación nacional</p>
      </Thumbnail>
       </Fragment>
    );
  }
}

export default PanelProductTypes;
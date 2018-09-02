import React, { Component , Fragment} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './Header'
import { Grid,Row,Col ,Jumbotron,Carousel,PageHeader, Image } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';


class PanelInfo extends Component {

  render() {
    bootstrapUtils.addStyle(PageHeader, 'custom');
    bootstrapUtils.addStyle(PageHeader, 'color');
    

    

    return (
      <Fragment>
       
        
        <Jumbotron bsStyle="color">
          <h1>Bienvenido, cultivador <Image className="img-icon-weed" width={80} height={80} src="images/weed.png"  /></h1>
          <p>
            En esta página encontrarás productos uruguayos que te ayudarán a convertirte en un gran cultivador de cannabis criollo, un verdadero Cannabohan.
          </p>
        </Jumbotron>
       </Fragment>
    );
  }
}

export default PanelInfo;
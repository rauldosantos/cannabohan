import React, { Component , Fragment} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './Header'
import { Grid,Row,Col ,Jumbotron,Carousel,PageHeader, Image } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';
import { Parallax } from 'react-scroll-parallax';


class PanelInfo extends Component {

  render() {
    bootstrapUtils.addStyle(PageHeader, 'custom');
    bootstrapUtils.addStyle(PageHeader, 'color');
    
    const styles ={
      backgroundImage:"url(/images/background-jumbotron.jpg)",
      width: "100%",
      height: "400px"
    }

    

    return (
      <Fragment>
          <Parallax
              className="custom-class"
              offsetYMax={25}
              offsetYMin={-25}
              slowerScrollRate
              tag="figure"
          >
          <Jumbotron style={styles} bsStyle="color">
          <Parallax
              className="custom-class"
              offsetYMax={10}
              offsetYMin={-20}
              slowerScrollRate
              tag="figure"
          >
            <h1>Bienvenido, cultivador </h1>
            <p>
              En esta página encontrarás productos uruguayos que te ayudarán a convertirte en un gran cultivador de cannabis criollo, un verdadero Cannabohan.
            </p>
          </Parallax>
          </Jumbotron>
          </Parallax>
        
       </Fragment>
    );
  }
}

export default PanelInfo;
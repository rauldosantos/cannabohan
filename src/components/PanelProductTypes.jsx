import React, { Component , Fragment} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from './Header'
import { Row,Col , Thumbnail,Fade, Image } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';

class PanelProductTypes extends Component {

  render() {
    
    return (
      <Fragment>
          
            <Col md={3} lg={3} xs={12} sm={12}>
            <Fade in  timeout={8000}>
              <div>
                <Image src="/images/sustratos.jpg" responsive />
              </div>
            </Fade>
              
            </Col>
            <Col md={3} lg={3} xs={12} sm={12}>           
              <Thumbnail src="/images/fertilizantes.jpg" alt="320x240" href="/products/fertilizers">
                <h3>Fertilizantes</h3>
                <p>Fertilizantes de fabricación uruguaya</p>
              </Thumbnail>
            </Col>
            <Col md={3} lg={3} xs={12} sm={12}> 
              <Thumbnail src="/images/equipos.jpg" alt="320x240" href="/products/tech">
                <h3>Maquinaria y Tecnología</h3>
                <p>Equipos y maquinaria que te ayudarán con tu cultivo</p>
              </Thumbnail>
            </Col>
          
       </Fragment>
    );
  }
}

export default PanelProductTypes;
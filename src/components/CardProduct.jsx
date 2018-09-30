import React, { Fragment } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CardProduct extends React.Component {
  render() {
    const {
      imageURL,
      title,
      price,
      description,
      shortDescription,
      brand
    } = this.props;

    let urlWhatsapp =
      'https://api.whatsapp.com/send?phone=+59892111826&text=Me%20gustaría%20comprar%20el%20producto%20' +
      title +
      '%20de%20' +
      brand.name;
    return (
      <Fragment>
        <div className="card">
          <Image width={150} src={imageURL} />
          <h1>{title}</h1>
          <span className="price">${price}</span>
          <p>{shortDescription}</p>
          <a href={urlWhatsapp}>
            <div className="card-button">
              Pedílo ahora <Image width={40} src="/images/logo-wassap.svg" />
            </div>
          </a>
        </div>
      </Fragment>
    );
  }
}

export default CardProduct;

import React, { Fragment } from 'react';
import { Image } from 'react-bootstrap';

class CardProduct extends React.Component {
  render() {
    const {
      imageURL,
      title,
      price,
      description,
      shortDescription
    } = this.props;
    return (
      <Fragment>
        <div className="card">
          <Image width={150} src={imageURL} />
          <h1>{title}</h1>
          <span className="price">${price}</span>
          <p>{shortDescription}</p>
          <div className="card-button">
            Pedílo ahora <Image width={40} src="/images/logo-wassap.svg" />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CardProduct;

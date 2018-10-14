import React, { Fragment } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CardProduct extends React.Component {
  render() {
    const {
      idProduct,
      imageURL,
      title,
      price,
      description,
      shortDescription,
      brand
    } = this.props;

    let urlProduct = '/products/' + brand.id + '/' + idProduct;
    return (
      <Fragment>
        <Link to={urlProduct}>
          <div className="card">
            <Image width={100} src={imageURL} />
            <h1>{title}</h1>
            <span className="price">${price}</span>
            <p>{shortDescription}</p>
            <div className="card-button">
              <Image width={150} src="/images/logo-cannabohan.png" />
            </div>
          </div>
        </Link>
      </Fragment>
    );
  }
}

export default CardProduct;

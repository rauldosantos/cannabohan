import React, { Fragment } from 'react';
import { Image } from 'react-bootstrap';

class BrandTitle extends React.Component {
  render() {
    const { idBrand } = this.props;

    return (
      <Fragment>
        <div className="title-brand-parent">
          <div className="brands-border-top" />
          <div className="title-brand-containter">
            <Image
              responsive
              width={250}
              className="title-brand-image"
              src={'/images/logo-' + idBrand + '.svg'}
            />
          </div>
          <div className="brands-border" />
        </div>
      </Fragment>
    );
  }
}

export default BrandTitle;

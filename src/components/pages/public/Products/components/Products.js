import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPublicAllAction } from '@containers/Product/PublicGetAll';
import { OverlayCard, Loader } from '@components/common';
import { Container, Row, Col } from 'react-bootstrap';
// import LazyLoad from 'react-lazyload';
// import ProductLoader from './ProductLoader';

// import { Loader } from '@components/common';

// const OverlayCard = React.lazy(() => import('@components/common/OverlayCard'));

class Products extends Component {
  componentDidMount() {
    const { fetch } = this.props;
    fetch({ page: 1, limit: 50 });
  }

  static getMainImage(images) {
    return images.find(image => {
      return image.main === true;
    });
  }

  render() {
    const { products, isFetching } = this.props;

    if (isFetching)
      return (
        <Container>
          <Row>
            <Col>
              <Loader />
            </Col>
          </Row>
        </Container>
      );

    return (
      <React.Fragment>
        {products.length > 0 &&
          products.map(product => (
            <OverlayCard
              key={product.slug}
              image={Products.getMainImage(product.images)}
              to={`/products/${product.slug}`}
              name={product.name}
            />
          ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { getPublicAll } = state.product;
  const { products, isFetching } = getPublicAll;

  return {
    products,
    isFetching,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: values => dispatch(getPublicAllAction(values)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Products);

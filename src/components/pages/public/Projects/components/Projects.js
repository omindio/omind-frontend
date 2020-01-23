import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPublicAllAction } from '@containers/Project/PublicGetAll';
import { OverlayCard, Loader } from '@components/common';
import { Container, Row, Col } from 'react-bootstrap';
// import LazyLoad from 'react-lazyload';
// import ProjectLoader from './ProjectLoader';

// import { Loader } from '@components/common';

// const OverlayCard = React.lazy(() => import('@components/common/OverlayCard'));

class Projects extends Component {
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
    const { projects, isFetching } = this.props;

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
        {projects.length > 0 &&
          projects.map(project => (
            <OverlayCard
              key={project.slug}
              image={Projects.getMainImage(project.images)}
              to={`/our-work/${project.slug}`}
              name={project.name}
            />
          ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { getPublicAll } = state.project;
  const { projects, isFetching } = getPublicAll;

  return {
    projects,
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
)(Projects);

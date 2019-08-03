import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { MediaQueries } from '@utils/Styles';

import { actions } from '@containers/Project/PublicGetOne';

import { ImageLightboxCard, YoutubeVideoCard, Loader } from '@components/common';

const HeaderSection = styled.section`
  overflow: hidden;
  height: 100vh;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    content: '';
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: 0;
    background: rgba(255, 250, 148, 0.79);
    left: 0;
    top: 0;
    display: block;
  }

  h1 {
    margin-bottom: 3rem;
    &:first-letter {
      text-transform: capitalize;
    }
  }
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -0.5rem;
  span {
    background: #000;
    color: #fff;
    padding: 15px 23px;
    border-radius: 10px;
    margin-left: 0.5rem;
    margin-top: 0.5rem;
  }
`;

const Section = styled.section`

  ${MediaQueries.xs`padding-top: 90px;`}
  ${MediaQueries.sm`padding-top: 110px;`}
  ${MediaQueries.md`padding-top: 150px;`}
  ${MediaQueries.lg`padding-top: 180px;`}
  h1,
  h2 {
    font-weight: 700;
    ${MediaQueries.xs`margin-bottom: 30px;`}
    ${MediaQueries.sm`margin-bottom: 40px;`}
    ${MediaQueries.md`margin-bottom: 50px;`}
    ${MediaQueries.lg`margin-bottom: 60px;`}
    &:first-letter {
      text-transform: capitalize;
    }
  }
  .container {
    > .row {
        ${MediaQueries.xs`margin-bottom: 60px;`}
        ${MediaQueries.sm`margin-bottom: 70px;`}
        ${MediaQueries.md`margin-bottom: 80px;`}
        ${MediaQueries.lg`margin-bottom: 90px;`}
      p {
        ${MediaQueries.xs`font-size: 16px;`}
        ${MediaQueries.sm`font-size: 18px;`}
        ${MediaQueries.md`font-size: 20px;`}
        ${MediaQueries.lg`font-size: 25px;`}
        &:first-letter {
          text-transform: capitalize;
        }
      }
    }
  }
`;

const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;

  @media (min-width: 1920px) {
    max-width: 1920px;
    margin: auto;
  }
`;

class Project extends Component {
  componentDidMount() {
    const { fetch, slug } = this.props;
    fetch({ slug });
  }

  componentWillUnmount() {
    const { clear, success } = this.props;
    if (success) clear();
  }

  static getCoverPageImage(images) {
    return images.find(image => {
      return image.coverPage === true;
    });
  }

  render() {
    const { project, isFetching } = this.props;

    if (isFetching || !project.slug)
      return (
        <Container>
          <Row>
            <Col className="m-0 vh-100 d-flex flex-column justify-content-center">
              <Loader />
            </Col>
          </Row>
        </Container>
      );

    const { images, tags, name, description, client, videos } = project;
    const coverPageImage = Project.getCoverPageImage(images);

    return (
      <React.Fragment>
        <Helmet>
          <title>{project.name}</title>
        </Helmet>
        <HeaderSection
          style={{
            backgroundImage: `url(${process.env.API_URL_IMAGE}/${coverPageImage.path})`,
          }}
        >
          <Container>
            <Row>
              <Col className="m-0 vh-100 d-flex flex-column justify-content-center">
                <h1>{name}</h1>
                <TagsContainer>
                  {tags.length > 0 && tags.map(tag => <span key={tag}>{tag}</span>)}
                </TagsContainer>
              </Col>
            </Row>
          </Container>
        </HeaderSection>

        <Section>
          <Container>
            <Row>
              <Col>
                <h2>{client.companyName}</h2>
                <p>
                  <strong>{client.description}</strong>
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>Project Description</h2>
                <p>{description}</p>
              </Col>
            </Row>
          </Container>
        </Section>

        <section>
          <GalleryContainer>
            {images.length > 0 &&
              images.map(
                image =>
                  image.published &&
                  !image.coverPage && (
                    <ImageLightboxCard
                      image={`${process.env.API_URL_IMAGE}/${image.path}`}
                      key={image.id}
                    />
                  ),
              )}
            {videos.length > 0 &&
              videos.map(
                video =>
                  video.published && (
                    <YoutubeVideoCard url={video.url} key={video.id} title={video.title} />
                  ),
              )}
          </GalleryContainer>
        </section>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { getPublicOne } = state.project;
  const { project, isFetching, success } = getPublicOne;

  return {
    project,
    isFetching,
    success,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetch: values => dispatch(actions.getPublicOneAction(values)),
    clear: () => dispatch(actions.clearAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Project);

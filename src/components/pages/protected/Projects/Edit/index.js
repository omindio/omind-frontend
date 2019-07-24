import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Nav, Tab, Alert } from 'react-bootstrap';
import styled from 'styled-components';

import { actions, validationSchema } from '@containers/Project/Update';
import { getOneAction } from '@containers/Project/GetOne';

import { Header, ProjectForm, SectionNav } from '@components/common';

import { ErrorBoundary, StateErrorHandler } from '@utils/ErrorHandler';

const Section = styled.section`
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
`;

const NavLink = styled(Nav.Link)`
  font-weight: 400;
  border-radius: 8px;
  color: #708498;
  &.active {
    background-color: #0f1111 !important;
    border: 0;
  }
  &:hover {
    border: 0;
    color: #0f1111;
  }
`;

class ProjectsEdit extends React.Component {
  componentDidMount() {
    const { fetch, match } = this.props;
    const { id } = match.params;

    fetch({ id });
  }

  render() {
    const {
      projectFetched,
      isFetchingData,
      isUpdated,
      isFetchingUpdate,
      updateError,
      clearInformation,
      updateInformation,
      fetchDataError,
      match,
      projectUpdated,
    } = this.props;
    const { id } = match.params;
    return (
      <React.Fragment>
        <Helmet>
          <title>Edit. Projects</title>
        </Helmet>

        <Header.Protected />
        <Container fluid="yes">
          <SectionNav
            values={[{ url: '/projects', name: 'Todo' }, { url: '/projects/add', name: 'Add New' }]}
          />
          <Section className="shadow">
            <Row>
              <Col>
                <Tab.Container id="left-tabs-example" defaultActiveKey="information">
                  <Row>
                    <Col sm={3}>
                      <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                          <NavLink eventKey="information">Information</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                          <NavLink eventKey="images">Images</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                          <NavLink eventKey="videos">Videos</NavLink>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={9}>
                      <Tab.Content>
                        <Tab.Pane eventKey="information">
                          <StateErrorHandler error={fetchDataError} />
                          <Alert show={isUpdated} key={0} variant="success">
                            Project updated successfully.
                          </Alert>
                          <ErrorBoundary>
                            <ProjectForm.Information
                              clear={clearInformation}
                              validationSchema={validationSchema}
                              initialValues={projectFetched}
                              isFetching={isFetchingData || isFetchingUpdate}
                              error={updateError}
                              onSubmit={updateInformation}
                              id={id}
                              isUpdated={isUpdated}
                              projectUpdated={projectUpdated}
                            />
                          </ErrorBoundary>
                        </Tab.Pane>
                        <Tab.Pane eventKey="images">
                          <p>Ok</p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="videos">
                          <p>Ok</p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </Col>
            </Row>
          </Section>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { getOne, update } = state.project;
  const { isFetching, success, error } = update;

  return {
    projectFetched: getOne.project,
    isFetchingData: getOne.isFetching,
    fetchDataError: getOne.error,
    isSuccessFetch: getOne.success,
    isUpdated: success,
    projectUpdated: update.project,
    isFetchingUpdate: isFetching,
    updateError: error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearInformation: () => dispatch(actions.clearAction()),
    fetch: values => dispatch(getOneAction(values)),
    updateInformation: values => dispatch(actions.updateAction(values)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProjectsEdit);

import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { Header, Loader } from '@components/common';
import { connect } from 'react-redux';
import { getAllAction } from '@containers/User/GetAll';

import { SettingsNav } from '../components';

const Section = styled.section`
  border-top-left-radius: 0 !important;
  border-top-right-radius: 0 !important;
`;

class UsersList extends Component {
  componentDidMount() {
    const { fetch, token } = this.props;

    const page = 1;
    const limit = 10;
    fetch({ page, limit, token });
  }

  render() {
    const { pages, current, isFetchingData, users } = this.props;
    if (isFetchingData || !users) return <Loader />;

    console.log(users);
    /*
    const items = [];

    for (const [index, user] of users) {
      items.push(<li key={index}>{user.name}</li>);
    }
    */

    return (
      <React.Fragment>
        <Helmet>
          <title>Users</title>
        </Helmet>

        <Header.Protected />
        <Container fluid="yes">
          <SettingsNav />
          <Section className="bordered">
            <Row>
              <Col sm={5}>
                {pages}
                {current}
              </Col>
            </Row>
          </Section>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { login } = state.auth;
  const { getAll } = state.user;

  return {
    token: login.token,
    users: getAll.users,
    pages: getAll.pages,
    current: getAll.current,
    isFetchingData: getAll.isFetching,
    fetchDataError: getAll.error,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    fetch: values => dispatch(getAllAction(values)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersList);

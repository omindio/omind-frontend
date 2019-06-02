import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Row, Col, Table, Pagination } from 'react-bootstrap';
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

    // eslint-disable-next-line func-names
    const items = users.map(function(user, index) {
      console.log(index);
      return [
        // eslint-disable-next-line react/no-array-index-key
        <tr key={index}>
          <td>{user.name}</td>
          <td>{user.lastName}</td>
          <td>{user.email}</td>
        </tr>,
      ];
    });

    const paginationItems = [];
    // eslint-disable-next-line no-plusplus
    for (let number = 1; number <= pages; number++) {
      paginationItems.push(
        <Pagination.Item key={number} active={number === current}>
          {number}
        </Pagination.Item>,
      );
    }

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
                <Table>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                    </tr>
                  </thead>
                  <tbody>{items}</tbody>
                </Table>
                <Pagination>{paginationItems}</Pagination>
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

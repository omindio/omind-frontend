import React from 'react';
import { Pagination } from 'react-bootstrap';
import { connect } from 'react-redux';

import { getAllAction } from '@containers/User/GetAll';

const PaginationComponent = props => {
  const { pages, currentPage } = props;
  const paginationItems = [];

  const handleClick = page => {
    const { fetch, limit } = props;
    fetch({ page, limit });
  };

  // eslint-disable-next-line no-plusplus
  for (let page = 1; page <= pages; page++) {
    paginationItems.push(
      <Pagination.Item
        onClick={() => (currentPage === page ? '' : handleClick(page))}
        key={page}
        active={page === currentPage}
      >
        {page}
      </Pagination.Item>,
    );
  }

  return (
    <React.Fragment>
      <Pagination>{paginationItems}</Pagination>
    </React.Fragment>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    fetch: values => dispatch(getAllAction(values)),
  };
};
export default connect(
  null,
  mapDispatchToProps,
)(PaginationComponent);

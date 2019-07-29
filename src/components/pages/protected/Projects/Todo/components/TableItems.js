/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { MdEdit, MdDelete, MdDone, MdWarning } from 'react-icons/md';
import { connect } from 'react-redux';
import { Button, Modal, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { actions } from '@containers/Project/Delete';
import { getAllAction } from '@containers/Project/GetAll';
import { Loader, IdTooltip } from '@components/common';

class TableItems extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.state = {
      showModal: false,
      projectName: null,
      projectID: null,
    };
  }

  componentDidMount() {
    const { fetch, limit } = this.props;
    const page = 1;
    fetch({ page, limit });
  }

  componentDidUpdate() {
    const { isDeleted, fetch, limit, currentPage, clear } = this.props;

    if (isDeleted) {
      fetch({ page: currentPage, limit });
      clear();
    }
  }

  handleDelete() {
    const { deleteProject } = this.props;
    const { projectID } = this.state;
    deleteProject(projectID);
    this.handleCloseModal();
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  handleShowModal(name, id) {
    this.setState({ showModal: true, projectName: name, projectID: id });
  }

  render() {
    const { projects, isFetching, isFetchingData } = this.props;
    const { showModal, projectName } = this.state;

    if (isFetchingData) {
      return (
        <tr>
          <td colSpan="5">
            <Loader />
          </td>
        </tr>
      );
    }

    return (
      <React.Fragment>
        {projects.length > 0 ? (
          projects.map(project => (
            <tr key={project.id}>
              <td>
                <IdTooltip id={project.id} />
              </td>
              <td>{project.name}</td>
              <td className="d-none d-sm-table-cell">
                <LinkContainer to={`/clients/edit/${project.client.id}`}>
                  <Button disabled={isFetching} variant="primary" size="sm">
                    <MdEdit />
                  </Button>
                </LinkContainer>{' '}
                &nbsp;
                {project.client.companyName}
              </td>
              <td className="d-none d-sm-table-cell">
                {project.published === true ? (
                  <Badge variant="success">
                    <MdDone />
                  </Badge>
                ) : (
                  <Badge variant="warning">
                    <MdWarning />
                  </Badge>
                )}
              </td>
              <td className="text-right">
                <LinkContainer to={`/projects/edit/${project.id}`}>
                  <Button disabled={isFetching} variant="primary" size="sm">
                    <MdEdit />
                  </Button>
                </LinkContainer>
                <Button
                  disabled={isFetching}
                  onClick={() => {
                    this.handleShowModal(project.name, project.id);
                  }}
                  className="ml-1"
                  variant="danger"
                  size="sm"
                >
                  <MdDelete />
                </Button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">No results found.</td>
          </tr>
        )}

        <Modal show={showModal} onHide={this.handleCloseModal}>
          <Modal.Header>
            <Modal.Title>Delete Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure to delete &nbsp;
            <strong>{projectName}</strong>?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="link" onClick={this.handleCloseModal}>
              No
            </Button>
            <Button variant="danger" onClick={this.handleDelete}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { getAll, delete: remove } = state.project;
  const { isFetching, success } = remove;
  const { isFetching: isFetchingData, projects, current } = getAll;
  return {
    isFetching,
    projects,
    isDeleted: success,
    isFetchingData,
    currentPage: current,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    deleteProject: id => dispatch(actions.deleteAction(id)),
    clear: () => dispatch(actions.clearAction()),
    fetch: values => dispatch(getAllAction(values)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableItems);

import React from 'react';
import { connect } from 'react-redux';
import { Button, Alert } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { actions, validationSchema } from '@containers/Project/Create';
import { ProjectForm } from '@components/common';
// import { StateErrorHandler } from '@utils/ErrorHandler';

const AddForm = ({ create, error, isFetching, isCreated, project, clear }) => {
  return (
    <React.Fragment>
      <Alert show={isCreated} key={0} variant="success">
        Project added successfully. &nbsp;&nbsp;
        <LinkContainer to={`/projects/edit/${project.id}`}>
          <Button variant="primary" size="sm">
            Edit
          </Button>
        </LinkContainer>
      </Alert>
      <ProjectForm.Information
        addForm
        clear={clear}
        validationSchema={validationSchema}
        initialValues={project}
        isFetching={isFetching}
        error={error}
        onSubmit={create}
      />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  const { create } = state.project;
  const { isFetching, success, error } = create;

  return {
    isFetching,
    isCreated: success,
    error,
    project: create.project,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    create: values => dispatch(actions.createAction(values)),
    clear: () => dispatch(actions.clearAction()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddForm);

import React from 'react';

import { Form, Row, Col } from 'react-bootstrap';
import TagsInput from 'react-tagsinput';

// import 'react-tagsinput/react-tagsinput.css';
/*
class TagsField extends React.Component {
  constructor(props) {
    super(props);
    const { value } = props;
    this.state = {
      tags: [value],
      // suggestions: suggestions,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddition = this.handleAddition.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
  }

  handleDelete(i) {
    const { tags } = this.state;
    this.setState({
      tags: tags.filter((tag, index) => index !== i),
    });
  }

  handleAddition(tag) {
    this.setState(state => ({ tags: [...state.tags, tag] }));
  }

  handleDrag(tag, currPos, newPos) {
    // eslint-disable-next-line react/destructuring-assignment
    const tags = [...this.state.tags];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: newTags });
  }

  render() {
    const { placeholder, name, label, disabled, isInvalid } = this.props;
    const controlId = `${name}`;
    const { tags } = this.state;
    return (
      <Form.Group as={Row} controlId={controlId}>
        <Form.Label column sm="5">
          {label}
        </Form.Label>
        <Col sm="7">
          <ReactTags
            placeholder={placeholder}
            readOnly={disabled}
            tags={tags}
            // suggestions={suggestions}
            handleDelete={this.handleDelete}
            handleAddition={this.handleAddition}
            handleDrag={this.handleDrag}
            delimiters={delimiters}
          />
          {isInvalid && (
            <div style={{ display: 'block' }} className="invalid-feedback">
              <span>{isInvalid}</span>
            </div>
          )}
        </Col>
      </Form.Group>
    );
  }
}
*/

const TagsField = ({ name, label, value, placeholder, disabled, onChange }) => {
  const controlId = `${name}`;
  return (
    <Form.Group as={Row} controlId={controlId}>
      <Form.Label column sm="5">
        {label}
      </Form.Label>
      <Col sm="7">
        <TagsInput
          onlyUnique
          name={name}
          // placeholder={placeholder}
          disabled={disabled}
          value={value}
          inputProps={{
            placeholder,
            name,
          }}
          onChange={tags => {
            onChange(name, tags);
          }}
        />
      </Col>
    </Form.Group>
  );
};

export default TagsField;

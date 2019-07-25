import React, { useState, useRef } from 'react';
import { Button, Overlay, Tooltip } from 'react-bootstrap';
import { MdRemoveRedEye } from 'react-icons/md';

const IdTooltip = ({ id }) => {
  const [show, setShow] = useState(false);
  const target = useRef(null);

  return (
    <>
      <Button variant="primary" size="sm" ref={target} onClick={() => setShow(!show)}>
        <MdRemoveRedEye />
      </Button>
      <Overlay target={target.current} show={show} placement="bottom">
        {props => (
          <Tooltip id="overlay-id" {...props}>
            {id}
          </Tooltip>
        )}
      </Overlay>
    </>
  );
};

export default IdTooltip;

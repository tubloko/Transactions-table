import React from "react";
import {Modal, Button} from 'react-bootstrap';

const TableEditModal = (props) => {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.children}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cancel</Button>
        <Button onClick={() => {
          props.editTransaction({id: props.id, status: props.status});
          props.onHide();
        }}>{props.action}</Button>
      </Modal.Footer>
    </Modal>
  )
};

export default TableEditModal;
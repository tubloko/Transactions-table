import React from "react";
import {Modal, Button} from 'react-bootstrap';

const TableModalDelete = (props) => (
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
        props.deleteTransaction(props.id);
        props.onHide();
      }}>{props.action}</Button>
    </Modal.Footer>
  </Modal>
);

export default TableModalDelete;
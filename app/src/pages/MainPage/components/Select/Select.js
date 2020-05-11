import React from "react";
import {Form} from "react-bootstrap";

const Select = ({value, onChange, options, title, className}) => {
  return (
    <Form>
      <Form.Group controlId="exampleForm.SelectCustomSizeSm">
        <Form.Label>{title}</Form.Label>
        <Form.Control
          className={className}
          as="select"
          size="sm"
          value={value}
          onChange={onChange}
          custom>
          {
            options.map((opt, i) => <option key={i}>{opt}</option>)
          }
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default Select;
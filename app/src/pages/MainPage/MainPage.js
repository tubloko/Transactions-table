import React from "react";
import {Col, Row} from "react-bootstrap";
import TransactionsList from "./components/TransactionsList/TransactionsList";
import TransactionTable from "./components/TransactionTable";

const MainPage = () => {
  return (
    <Row className='mt-3'>
      <Col className='col-sm-12 col-md-3 col-lg-3'>
        <TransactionsList />
      </Col>
      <Col className='col-sm-12 col-md-9 col-lg-9'>
        <TransactionTable />
      </Col>
    </Row>
  );
};

export default MainPage;
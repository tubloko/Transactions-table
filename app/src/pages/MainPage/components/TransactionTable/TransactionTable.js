import React from "react";
import {connect} from 'react-redux';
import {Button, Row, Table, Spinner, Col} from "react-bootstrap";
import ReactFileReader from "react-file-reader";
import {CSVLink} from "react-csv";

import TransactionTableItem from "../TransactionTableItem";
import TransactionTableHeader from "../TransactionTableHeader";
import PageTable from "../PageTable/PageTable";

import {
  writeFileLoading,
  deleteTransaction,
  editTransaction,
  filterStatus,
  filterType,
} from "../../../../actionCreators/actionCreators";
import {selectBy, selectForFile} from "../../../../selectors/tableSelectors";
import convert from '../../../../utils/convert';
import Select from "../Select";

const TransactionTable = ({
                            transactions,
                            isLoading,
                            writeFileLoading,
                            deleteTransaction,
                            editTransaction,
                            transactionsToFile,
                            filterStatus,
                            filterType,
                            statusFilter,
                            typeFilter,
                          }) => {

  const handleFiles = files => {
    const reader = new FileReader();

    reader.onload = () => {
      const data = reader.result.split(/\n/).map(a => a.split(/[;,\\/]/));
      const collection = convert(data); // convert to array of objects
      writeFileLoading({data: collection, filename: files[0].name});
    };

    reader.readAsText(files[0]);
  };

  if (isLoading) return (
    <Spinner className='mt-5 ml-5' animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
  return (
    <>
      <Row className='mb-3'>
        <Row className='col-6'>
          <Col>
            <Select
              value={statusFilter}
              onChange={(e) => filterStatus(e.target.value)}
              options={["Pending", "Completed", "Cancelled", "Status"]}
            />
          </Col>
          <Col>
            <Select
              value={typeFilter}
              onChange={(e) => filterType(e.target.value)}
              options={["Refill", "Withdrawal", "Type"]}
            />
          </Col>
        </Row>
        <Row className='col-6 ml-4 d-flex'>
          <Col className='col-6'/>
          <Col className='col-3'>
            <ReactFileReader handleFiles={handleFiles} fileTypes={'.csv'}>
              <Button className='mr-1' variant='outline-secondary'>Import</Button>
            </ReactFileReader>
          </Col>
          <Col className='col-3'>
            {transactionsToFile.length ? (
              <div>
                <CSVLink
                  className='btn btn-outline-secondary'
                  filename={"new.csv"}
                  data={transactionsToFile || 'string'}
                >
                  Export
                </CSVLink>
              </div>
            ) : null}
          </Col>
        </Row>
      </Row>
      <Table striped bordered hover size="sm" className='mt-3'>
        <thead>
        <TransactionTableHeader transactionHeader={transactions[0] || []}/>
        </thead>
        <tbody>
        <TransactionTableItem
          transactions={transactions || []}
          deleteTransaction={deleteTransaction}
          editTransaction={editTransaction}
        />
        </tbody>
      </Table>
      <PageTable/>
    </>
  );
};

const mapDispatchToProps = (dispatch => ({
  writeFileLoading: ({data, filename}) => dispatch(writeFileLoading({data, filename})),
  deleteTransaction: (id) => dispatch(deleteTransaction(id)),
  editTransaction: ({id, status}) => dispatch(editTransaction({id, status})),
  filterStatus: (status) => dispatch(filterStatus(status)),
  filterType: (type) => dispatch(filterType(type)),
}));

const mapStateToProps = (state) => {
  return {
    transactionsToFile: selectForFile(state),
    transactions: selectBy(state),
    isLoading: state.tableReducer.isLoading,
    statusFilter: state.filterReducerStatus.status,
    typeFilter: state.filterReducerType.type,
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TransactionTable);
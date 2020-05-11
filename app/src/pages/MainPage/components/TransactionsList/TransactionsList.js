import React from "react";
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem, Spinner } from "react-bootstrap";

import { selectByName } from "../../../../selectors/tableSelectors";

const TransactionsList = ({list, isLoading}) => {
  if (isLoading) return (
    <Spinner animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
  return (
    <>
      <ListGroup>
        <ListGroupItem className='pl-4 p-0' style={{backgroundColor: '#82f2fa'}}>Transactions</ListGroupItem>
        {
          list.length ? list.map(({item, id}) => (
            <ListGroupItem
              key={id}
              className='pl-4 p-0'
            >
              {item}
            </ListGroupItem>)) : null
        }
      </ListGroup>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    list: selectByName(state),
    isLoading: state.tableReducer.isLoading,
  }
};

export default connect(mapStateToProps)(TransactionsList);
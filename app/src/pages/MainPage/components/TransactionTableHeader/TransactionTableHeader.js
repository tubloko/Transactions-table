import React from "react";
import {Spinner} from "react-bootstrap";

const TransactionTableHeader = ({transactionHeader}) => {

  if (transactionHeader[0]) return (
    <Spinner className='mt-5 ml-5' animation="border" role="status">
      <span className="sr-only">Loading...</span>
    </Spinner>
  );

  const head = Object.keys(transactionHeader);
  return (
    <tr className='p-0 text-center'>
      {
        head.map((item, idx) => (
          <th key={idx} style={{backgroundColor: 'darkgray'}}>{item}</th>
        ))
      }
      <th style={{backgroundColor: 'darkgray'}}>Action</th>
    </tr>
  );
};

export default TransactionTableHeader;
import React, { useState } from "react";
import {Button, ButtonGroup, Row, Spinner} from "react-bootstrap";
import TableModalDelete from "../TableModalDelete";
import TableEditModal from "../TableEditModal";
import Select from "../Select";

const TransactionTableItem = ({transactions, deleteTransaction, editTransaction}) => {
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [isModalEdit, setIsModalEdit] = useState(false);
  const [status, setStatus] = useState('Pending');
  const [id, setId] = useState(false);

  if (!transactions.length) return (
    <Row>
      <h3 className='ml-5' style={{color: 'white'}}>Data not found !</h3>
    </Row>
  );
  return (
    <>
      {
        transactions.map(({TransactionId, Status, Type, ClientName, Amount}, i) => {
          return (
            <tr key={TransactionId} className='p-0 text-center'>
              <td style={{width: '5%'}}>{TransactionId}</td>
              <td>{Status}</td>
              <td>{Type}</td>
              <td>{ClientName}</td>
              <td>{Amount}</td>
              <td className='text-center' style={{width: '17%'}}>
                <ButtonGroup>
                  <Button variant='outline-secondary'
                          onClick={() => {
                            setIsModalEdit(true);
                            setId(TransactionId)
                          }}>Edit</Button>
                  <Button variant='outline-danger'
                          onClick={() => {
                            setIsModalDelete(true);
                            setId(TransactionId)
                          }}
                  >Delete
                  </Button>
                </ButtonGroup>
              </td>
            </tr>
          );
        })
      }
      <TableModalDelete
        show={isModalDelete}
        onHide={() => setIsModalDelete(false)}
        deleteTransaction={deleteTransaction}
        title='Delete'
        action='Yes'
        id={id}
      >
        <p>Are you sure ?</p>
      </TableModalDelete>
      <TableEditModal
        show={isModalEdit}
        onHide={() => setIsModalEdit(false)}
        editTransaction={editTransaction}
        title='Edit'
        action='Save'
        status={status}
        id={id}
      >
        <Select
          title='Status:'
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          options={[ "Pending", "Completed", "Cancelled" ]}
        />
      </TableEditModal>
    </>
  );
};

export default TransactionTableItem;
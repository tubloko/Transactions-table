import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import {Pagination} from "react-bootstrap";

import {countItems} from "../../../../selectors/tableSelectors";
import {changeActivePage} from "../../../../actionCreators/actionCreators";

const PageTable = ({count, activePage, changeActivePage}) => {
  const [pageItems, setPageItems] = useState([]);

  useEffect(() => {
    let items = [];

    for (let number = 1; number <= Math.ceil(count / 10); number++) {
      items.push(
        <div key={number} onClick={() => changeActivePage(number)}>
          <Pagination.Item active={number === activePage}>
            {number}
          </Pagination.Item>
        </div>
      );
    }
    setPageItems(items);
  }, [activePage, count]);

  return (
    <>
      <Pagination size="sm">{pageItems}</Pagination>
    </>
  );
};

const mapDispatchToProps = (dispatch => ({
  changeActivePage: (page) => dispatch(changeActivePage(page)),
}));

const mapStateToProps = (state) => {
  return {
    count: countItems(state),
    activePage: state.tableReducer.currentPage
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PageTable);
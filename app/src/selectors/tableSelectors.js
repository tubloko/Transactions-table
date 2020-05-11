export const select = (state) => state.tableReducer;
export const selectFilterStatus = (state) => state.filterReducerStatus.status;
export const selectFilterType = (state) => state.filterReducerType.type;

// returns all items after filter
export const selectAllItems = (state) => {
  const transactions = select(state);
  const data = transactions.data.map(a => Object.entries(a).map(a => a[1]).slice(0, 1).flat());
  const statusFilter = selectFilterStatus(state);
  const typeFilter = selectFilterType(state);

  if (data.length) {
    return data.reduce((a, b) => a.concat(b)).filter(({Status, Type}) => {
      if (statusFilter === 'Status' && typeFilter !== 'Type') {
        return Status !== statusFilter && Type === typeFilter
      } else if (statusFilter !== 'Status' && typeFilter === 'Type') {
        return Status === statusFilter && Type !== typeFilter
      } else if (statusFilter !== 'Status' && typeFilter !== 'Type') {
        return Status === statusFilter && Type === typeFilter
      }

      return Status !== statusFilter && Type !== typeFilter
    });
  }

  return transactions;
};
// returns current items (current page)
export const selectBy = (state) => {
  const transactions = select(state);
  const data = transactions.data.map(a => Object.entries(a).map(a => a[1]).slice(0, 1).flat());

  if (data.length) {
    const currentPage = selectCurrentItems(state);
    const currentData = selectAllItems(state);

    return currentData.slice(currentPage * 10, currentPage * 10 + 10);
  }

  return transactions;
};
// select current page
export const selectCurrentItems = (state) => {
  return state.tableReducer.currentPage - 1;
};
// the function counts items for pagination
export const countItems = (state) => {
  return selectAllItems(state).length;
};
// select items for table header
export const selectByName = (state) => {
  const transactions = select(state);
  return transactions.data.map((a, i) => ({ item: Object.keys(a)[0], id: transactions.data[i].id })); // only for list of filenames
};
// prepare state to download
export const selectForFile = (state) => {
  const data = selectAllItems(state);
  let result = [];

  if (data.length) {
    result = [
      Object.keys(data[0]).map(a => a),
      ...data.map(a => Object.values(a).flat())
    ];
  }
  
  return result.map(a => a.join(',')).join('\n');
};
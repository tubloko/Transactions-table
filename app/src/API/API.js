import axios from 'axios';

export default class API {
  getAllTransactions() {
    return axios
      .get('http://localhost:3001/transactions')
      .then((res) => res.data)
      .catch(() => console.log('something went wrong'));
  }
  addTransactions(data) {
    const id = Date.now();
    return axios
      .post('http://localhost:3001/transactions', {
        [data.filename]: data.data,
        id
      })
      .then(() => 'data was sent')
      .catch(() => console.log('something went wrong'));
  }
}
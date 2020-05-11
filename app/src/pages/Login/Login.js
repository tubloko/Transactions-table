import React, {useState} from "react";
import { connect } from 'react-redux';
import {Col, Row, Button, FormControl} from "react-bootstrap";

import { userLoginLoading } from "../../actionCreators/actionCreators";
import { getToken } from "../../utils/common";

const Login = ({ isLoading, error, userLoginLoading, history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    userLoginLoading(username, password);
    if (getToken()) {
      history.push('/');
    }
  };

  return (
    <Row className='mt-5'>
      <Col className='col-4 mt-5'>
        <p>Username</p>
        <FormControl
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
        <p className='mt-4'>Password</p>
        <FormControl
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
        {error ? <p style={{color: 'red'}}>username or password are wrong !</p> : null}
        <Col className='mt-4 text-center'>
          <Button onClick={handleClick} variant='outline-secondary'>
            {isLoading ? 'Loading...' : 'Login'}
          </Button>
        </Col>
      </Col>
      <Col className='col-4 mt-5'>
        <h4>Username: user</h4>
        <h4>Password: password</h4>
      </Col>
    </Row>
  );
};

const mapDispatchToProps = (dispatch => ({
  userLoginLoading: (name, password) => dispatch(userLoginLoading(name, password)),
}));

const mapStateToProps = (state) => ({
  error: state.loginReducer.error,
  isLoading: state.loginReducer.isLoading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
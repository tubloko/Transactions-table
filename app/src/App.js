import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { Container } from "react-bootstrap";

import Layout from "./pages/MainPage/components/Layout";
import Router from './routers/Router';

import {readFileLoading} from "./actionCreators/actionCreators";

const App = ({dispatch}) => {

  useEffect(() => {
    dispatch(readFileLoading());
  }, [dispatch]);

  return (
    <Container>
      <Layout />
      <Router />
    </Container>
  );
};

export default connect()(App);
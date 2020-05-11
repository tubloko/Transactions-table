import React from "react";
import { Route, Redirect } from 'react-router-dom';

import { getToken } from "../utils/common";

const PublicRouter = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => !getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />}
    />
  )
};

export default PublicRouter;
import React from "react";
import {Route, Redirect} from "react-router-dom";

import {getToken} from "../utils/common";

const PrivateRouter = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => getToken() ? <Component {...props} /> :
        <Redirect to={{pathname: '/login', place: {from: props.location}}}/>}
    />
  );
};

export default PrivateRouter;
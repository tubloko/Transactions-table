import React from "react";

import {PrivateRouter, PublicRouter} from "./index";
import Login from "../pages/Login";
import MainPage from "../pages/MainPage";

const Router = () => (
  <>
    <PublicRouter path='/login' component={Login} />
    <PrivateRouter path='/' component={MainPage} />
  </>
);

export default Router;
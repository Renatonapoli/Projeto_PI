import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../Pages/Home/home";
import Login from "../Pages/Login/login";
import Cadastro from "../Pages/Cadastro/cadastro";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;

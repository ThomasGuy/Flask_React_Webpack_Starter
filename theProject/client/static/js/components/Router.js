import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FrontPage from "./FrontPage";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={FrontPage} />
      <Route path="/api" component={FrontPage} />
      <Route path="/api/home" component={FrontPage} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;

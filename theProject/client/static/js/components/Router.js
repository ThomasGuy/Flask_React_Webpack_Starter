import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FrontPage from "./FrontPage";
import NotFound from "./NotFound";
import App from "./App";
import Test from "./Test";


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={FrontPage} />
      <Route exact path="/api" component={FrontPage} />
      <Route path="/api/test" component={Test} />
      <Route path="/api/ticker" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;

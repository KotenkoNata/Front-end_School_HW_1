// noinspection JSCheckFunctionSignatures

import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import NotFound from "./views/NotFound";
import AppBar from "./components/AppBar";
import Loading from "./components/Loading";

import routes from "./routes";

const HomeView = lazy(() => import("./views/HomePage/HomeView"));
const UserView = lazy(() => import("./views/UserView/UserView"));

const App = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route component={HomeView} exact path={routes.home} />
          <Route component={UserView} path={routes.userProfile} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Container>
  );
};

export default App;

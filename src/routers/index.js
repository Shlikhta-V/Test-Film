import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Films from "../components/page/Films";
import MovieDetail from "../components/MoviesDetail";
import Favorite from "../components/page/Favorite";

function Routers() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Films />
          </Route>
          <Route path="/moviedetail/:imdbID">
            <MovieDetail />
          </Route>
          <Route path="/favorite">
            <Favorite />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Routers;

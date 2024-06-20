import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, Switch } from "react-router-dom";
import NotFound from "./pages/NotFound";
import SearchDetails from "./components/SearchDetails";
const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route path="/search">
          <Search />
        </Route> */}
        <Route path="/:searchId">
          <SearchDetails />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Results from "./Results";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Adopt me!</h1>
        <Switch>
          <Route path="/" component={SearchParams} />
          <Route path="/results" component={Results} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));

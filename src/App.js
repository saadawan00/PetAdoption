import React, { useState } from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Results from "./Results";
import ThemeContext from "./ThemeContext";

const App = () => {
  const themeHook = useState("darkblue");
  return (
    <ThemeContext.Provider value={themeHook}>
      <BrowserRouter>
        <div>
          <h1>Adopt me!</h1>
          <Switch>
            <Route path="/" component={SearchParams} />
            <Route path="/results" component={Results} />
          </Switch>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
};

render(<App />, document.getElementById("root"));

import React from "react";
import { render } from "react-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1>Adopt me!</h1>
      <p>Search</p>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
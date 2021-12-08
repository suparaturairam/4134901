import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Car from "./components/Car";
import List from "./components/List";
import Brand from "./components/UI";
import DataTable from "./components/Table";

ReactDOM.render(
  <>
    <Car age="22" eye="black" />
    <List />
    <Brand />
    <DataTable />
  </>,
  document.getElementById("root")
);

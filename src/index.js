import React from "react";
import 'react-router-dom';
import { render } from "@testing-library/react";
import App from "./App";



const rootElement = document.getElementById("root");
render(

  <App />,
  rootElement
);
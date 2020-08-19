import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import {MyContextProvider} from './store/context/myContext';


const app = (
  
  <MyContextProvider>
    <App/>
  </MyContextProvider>

);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();

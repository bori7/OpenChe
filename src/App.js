import React, { useContext,useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import "antd/dist/antd.css";
import * as actions from "./store/actions/auth";
import CustomLayout from "./containers/Layout";
import {MyContext} from './store/context/myContext';

const App = () => {
  
  const {dispatch} = useContext(MyContext)

  useEffect(() => {
    actions.authCheckState(dispatch)
  }, [])
  
    return (
        <Router>
         <CustomLayout >
          <BaseRouter />
         </CustomLayout>
        </Router>
    );
}


export default App;

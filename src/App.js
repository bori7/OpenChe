import React, { useContext,useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import "antd/dist/antd.css";
import * as actions from "./store/actions/auth";
import CustomLayout from "./containers/Layout";
import {MyContext} from './store/context/myContext';

const App = (props) => {
  
  const {dispatch} = useContext(MyContext)

  
  
  useEffect(() => {
    dispatch(actions.authCheckState())
  }, [])
  
    return (
        <Router>
         <CustomLayout { ...props}>
          <BaseRouter />
         </CustomLayout>
        </Router>
    );
}


export default App;

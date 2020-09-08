import React, { useContext,useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";
import 'semantic-ui-css/semantic.min.css';
import "antd/dist/antd.css";
import * as actions from "./store/actions/auth";
import HomepageLayout from "./containers/Home";
import {MyContext} from './store/context/myContext';

const App = () => {
  
  const {state,dispatch} = useContext(MyContext)

  useEffect(() => {
    actions.authCheckState(dispatch)
  }, [state.token])
  
    return (
        <Router>
         <HomepageLayout>
          <BaseRouter />
         </HomepageLayout>
        </Router>
    );
}


export default App;

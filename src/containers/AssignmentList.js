import React, { useContext,useEffect } from "react";
import {MyContext} from '../store/context/myContext';
import { Link } from "react-router-dom";
import { List, Skeleton, message } from "antd";
import * as actions from "../store/actions/assignments";
import Hoc from "../hoc/hoc";

const AssignmentList = () => {

    const {state, dispatch} = useContext(MyContext)
    const {token, loading, assignments} = state

    var errorMessage = null;

    useEffect(() => {
      if (token !== undefined && token !== null) {
        actions.getASNTS(token,dispatch);
      }
      if (state.error) { errorMessage = message.error(state.error)};
    
      if (state.message) { errorMessage = message.success(state.message)};
  
      }, [token, state.error, state.message]) 
      
    return (
      <Hoc>
      {errorMessage}
        {loading ? (
          <Skeleton active />
        ) : (
          <div>
            <h3 style={{margin: "5px 0" }}>Assignment List</h3>
            <List style={{minHeight: 500, }}
              size="large"
              bordered
              dataSource={assignments}
              renderItem={item => <Link to={`/assignments/${item.id}`}>
                                  <List.Item>{item.title}</List.Item>
                                   </Link>}
            />
          </div>
        )}
      </Hoc>
    );
  };


export default AssignmentList;

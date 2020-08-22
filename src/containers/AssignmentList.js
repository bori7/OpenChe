import React, { useContext,useEffect } from "react";
import {MyContext} from '../store/context/myContext';
import { Link } from "react-router-dom";
import { List, Skeleton } from "antd";
import * as actions from "../store/actions/assignments";
import Hoc from "../hoc/hoc";

const AssignmentList = () => {

    const {state, dispatch} = useContext(MyContext)
    const {token, loading, assignments} = state
    
    useEffect(() => {
      if (token !== undefined && token !== null) {
        actions.getASNTS(token,dispatch);
      }
      }, [token]) 
      
    return (
      <Hoc>
        {loading ? (
          <Skeleton active />
        ) : (
          <div>
            <h3 style={{ margin: "16px 0" }}>Assignment List</h3>
            <List
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

import React,  { useContext, useEffect } from "react";
import { List, Skeleton } from "antd";
import Result from "../components/Result";
import { getGradedASNTS } from "../store/actions/gradedAssignments";
import Hoc from "../hoc/hoc";
import {MyContext} from '../store/context/myContext';



const  Profile = () => {

  const {state, dispatch} = useContext(MyContext);
  const {token,username,assignments, loading} = state;

  useEffect(() => {
   if (token !== undefined && token !== null) {
     dispatch(getGradedASNTS(username, token));
   }
    }, [token])


    return (
      <Hoc>
        {loading ? (
          <Skeleton active />
        ) : (
          <Hoc>
            <h1>Hi {username}</h1>
            <List
              size="large"
              dataSource={assignments}
              renderItem={a => <Result key={a.id} grade={a.grade} />}
            />
          </Hoc>
        )}
        
      </Hoc>
    );
}

// const mapStateToProps = state => {
//   return {
//     token: state.auth.token,
//     username: state.auth.username,
    
//   };
// };


export default Profile;

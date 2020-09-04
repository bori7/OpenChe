import axios from "axios";
import * as actionTypes from "./actionTypes";

const getGradedASNTListStart = () => {
  return {
    type: actionTypes.GET_GRADED_ASSIGNMENT_LIST_START
  };
};

const getGradedASNTListSuccess = assignments => {
  return {
    type: actionTypes.GET_GRADED_ASSIGNMENTS_LIST_SUCCESS,
    assignments
  };
};

const getGradedASNTListFail = error => {
  return {
    type: actionTypes.GET_GRADED_ASSIGNMENTS_LIST_FAIL,
    error: error
  };
};

export const getGradedASNTS = (username, token,dispatch) => {
 
    dispatch(getGradedASNTListStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .get(`/graded-assignments/?username=${username}`)
      .then(res => {
        const assignments = res.data;
        dispatch(getGradedASNTListSuccess(assignments));
        console.log(assignments)
      })
      .catch(err => {
        dispatch(getGradedASNTListFail(err.response.data.message));
      });
  };


export const createGradedASNT = (token, asnt, dispatch) => {
  
    //   dispatch(createASNTStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
   axios
      .post(`/graded-assignments/create/`, asnt)
      .then(res => {
        console.log("success",asnt);
        //   dispatch(createASNTSuccess());
      })
      .catch(err => {
        //   dispatch(createASNTFail());
      });
};

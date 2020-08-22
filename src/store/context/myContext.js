import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";
import React, { useReducer, createContext } from "react";


export const MyContext = createContext();

const initialState = {
  assignments: [],
  error: null,
  loading: false,
  currentAssignment: {},
  token: null,
  username: null,
  is_student: null,
  is_teacher: null,
  userId: null,
};

const getGradedASNTListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getGradedASNTListSuccess = (state, action) => {
  return updateObject(state, {
    assignments: action.assignments,
    error: null,
    loading: false
  });
};

const getGradedASNTListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};



const getASNTListStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getASNTListSuccess = (state, action) => {
  return updateObject(state, {
    assignments: action.assignments,
    error: null,
    loading: false
  });
};

const getASNTListFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const getASNTDetailStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const getASNTDetailSuccess = (state, action) => {
  return updateObject(state, {
    currentAssignment: action.assignment,
    error: null,
    loading: false
  });
};

const getASNTDetailFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const createASNTStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const createASNTSuccess = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: false
  });
};

const createASNTFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};




const authStart = (state, action) => {
  console.log('started')
  return updateObject(state, {
    error: null,
    loading: true
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.user.token,
    username: action.user.username,
    is_student: action.user.is_student,
    is_teacher: action.user.is_teacher,
    userId: action.user.userId,
    error: null,
    loading: false
  });
};

const authFail = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

const authLogout = (state, action) => {
  return updateObject(state, initialState);
};




const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.GET_ASSIGNMENT_LIST_START:
      return getASNTListStart(state, action);
    case actionTypes.GET_ASSIGNMENTS_LIST_SUCCESS:
      return getASNTListSuccess(state, action);
    case actionTypes.GET_ASSIGNMENTS_LIST_FAIL:
      return getASNTListFail(state, action);
    case actionTypes.GET_ASSIGNMENT_DETAIL_START:
      return getASNTDetailStart(state, action);
    case actionTypes.GET_ASSIGNMENT_DETAIL_SUCCESS:
      return getASNTDetailSuccess(state, action);
    case actionTypes.GET_ASSIGNMENT_DETAIL_FAIL:
      return getASNTDetailFail(state, action);
    case actionTypes.CREATE_ASSIGNMENT_START:
      return createASNTStart(state, action);
    case actionTypes.CREATE_ASSIGNMENT_SUCCESS:
      return createASNTSuccess(state, action);
    case actionTypes.CREATE_ASSIGNMENT_FAIL:
      return createASNTFail(state, action);
    case actionTypes.GET_GRADED_ASSIGNMENT_LIST_START:
      return getGradedASNTListStart(state, action);
    case actionTypes.GET_GRADED_ASSIGNMENTS_LIST_SUCCESS:
      return getGradedASNTListSuccess(state, action);
    case actionTypes.GET_GRADED_ASSIGNMENTS_LIST_FAIL:
      return getGradedASNTListFail(state, action);  
    default:
      return state;
  }
};


// const useAsyncReducer = (reducer, initialState) => {
//   const [state, setState] = useState(initialState);

//   const dispatch = async action => {
//     const result = reducer(state, action);
//     if (typeof result.then === "function") {
//       try {
//         const newState = await result;
//         setState(newState);
//       } catch (err) {
//         setState({ ...state, error: err });
//       }
//     } else {
//       setState(result);
//     }
//   };

//   return [state, dispatch];
// };

// //export default useAsyncReducer;

export const MyContextProvider = props => {
   const [state, dispatch] = useReducer(reducer, initialState);
   //const [state, dispatch] = useAsyncReducer(reducer, initialState);
  return (
    <MyContext.Provider value={{state, dispatch}}>
      {props.children}
    </MyContext.Provider>
  );
};



import axios from "axios";
import * as actionTypes from "./actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = user => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    user:user
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = (dispatch) => {
  localStorage.removeItem("user");
  dispatch( {
    type: actionTypes.AUTH_LOGOUT
  });
};

export const checkAuthTimeout = (expirationTime,dispatch) => {
  return (
    setTimeout(() => {
      logout(dispatch);
    }, expirationTime * 1000)
  )
  };
  

export const authLogin = (username, password, dispatch) => {
  
    dispatch(authStart());
  
    axios
      .post("/rest-auth/login/", {
        username: username,
        password: password
      })
      .then(res => {
        const user = {
          token: res.data.key,
          username:username,
          userId: res.data.user,
          is_student: res.data.user_type.is_student,
          is_teacher: res.data.user_type.is_teacher,
          expirationDate: new Date(new Date().getTime() + 3600 * 1000)
        };
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(authSuccess(user));
        checkAuthTimeout(3600,dispatch);
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };


export const authSignup = (
  username,
  email,
  password1,
  password2,
  is_student,
  is_teacher,dispatch
) => {
  
    dispatch(authStart());
    const user = {
      username,
      email,
      password1,
      password2,
      is_student:is_student,
      is_teacher: is_teacher
    };
    axios
      .post("/rest-auth/registration/", user)
      .then(res => {
        const user = {
          token: res.data.key,
          username:username,
          userId: res.data.user,
          is_student,
          is_teacher,
          expirationDate: new Date(new Date().getTime() + 3600 * 1000)
        };
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(authSuccess(user));
        checkAuthTimeout(3600,dispatch);
      })
      .catch(err => {
        dispatch(authFail(err));
      });
  };

export const authCheckState = (dispatch) => {
  
    const user = JSON.parse(localStorage.getItem("user"));
    if (user === undefined || user === null) {
      logout(dispatch);
    } else {
      const expirationDate = new Date(user.expirationDate);
      if (expirationDate <= new Date()) {
        logout(dispatch);
      } else {
        dispatch(authSuccess(user));
        
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          ,dispatch);
      }
    }
  };


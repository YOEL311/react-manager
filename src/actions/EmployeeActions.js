import {
  EMPLOYEE_CREATE,
  EMPLOYEE_UPDATE,
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEES_SAVE_SUCCESS
} from "./types";
import firebase from "firebase";
import { Actions } from "react-native-router-flux";
export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  console.log(currentUser);
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.pop();
      });
  };
};

export const employeesFetch = () => {
  return dispatch => {
    const { currentUser } = firebase.auth();

    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees`)
      .on("value", snapshot => {
        dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
export const employeeSave = ({ name, phone, shift, uid }) => {
  console.log("employeeSave uid");

  console.log(name, uid);

  const { currentUser } = firebase.auth();
  return dispatch => {
    firebase
      .database()
      .ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEES_SAVE_SUCCESS });
        Actions.employeeList({ type: "reset" });
      })
      .catch(() => console.log("catch"));
  };
};

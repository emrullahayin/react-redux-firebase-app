import firebase from "./../../config/fbConfig";

export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const logOut = () => {
  return dispatch => {
    firebase
      .logout()
      .then(() => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "LOGOUT_ERROR", err });
      });
  };
};

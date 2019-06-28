import firebase from "./../../config/fbConfig";

export const signIn = credentials => {
  console.log("credentials", credentials);
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

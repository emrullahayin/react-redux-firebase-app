const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "Login failed"
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        authError: null
      };
    case "LOGOUT_ERROR":
      console.log("logout error");
      return {
        authError: "logout failed"
      };
    case "LOGOUT_SUCCESS":
      console.log("logout success");
      return {
        authError: null
      };
    default:
      return state;
  }
};

export default authReducer;

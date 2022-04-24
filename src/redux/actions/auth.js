import { AUTH, ERROR, LOADING, LOGOUT } from "../reducer/actionTypes";
import { auth } from "../../config";

const signin = (authData, history) => async (dispatch) => {
  const { email, password } = authData;
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      dispatch({
        type: AUTH,
        payload: userCredential.user,
      });
      dispatch({
        type: LOADING,
        payload: false,
      });
      history.push("/");
    })
    .catch((error) => {
      dispatch({
        type: LOADING,
        payload: false,
      });
      dispatch({ type: ERROR, payload: error.message });
    });
};

const signup = (authData, history) => async (dispatch) => {
  const { email, password, fullName } = authData;
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
      user.updateProfile({
        displayName: fullName,
      });
      dispatch({
        type: LOADING,
        payload: false,
      });
      dispatch({
        type: AUTH,
        payload: user,
      });
      history.push("/");
    })
    .catch((error) => {
      dispatch({
        type: LOADING,
        payload: false,
      });
      dispatch({ type: ERROR, payload: error.message });
    });
};

const logout = (history) => async (dispatch) => {
  auth.signOut().then(() => {
    dispatch({ type: LOGOUT });
    history.push("/signin");
  });
};

const forgetEmail = (email) => async (dispatch) => {
  auth
    .sendPasswordResetEmail(email, {
      url: "https://synergybrandworks.netlify.app/signin",
    })
    .then((res) => {
      dispatch({
        type: LOADING,
        payload: false,
      });
      alert("Email sent, Please check your email.");
    })
    .catch((err) => {
      dispatch({
        type: LOADING,
        payload: false,
      });
      dispatch({ type: ERROR, payload: err.message });
      setTimeout(() => {
        if (err) {
          dispatch({ type: ERROR, payload: "" });
        }
      }, 4000);
    });
};

const resetPassword = (oobCode, newPassword, history) => async (dispatch) => {
  auth
    .confirmPasswordReset(oobCode, newPassword)
    .then((res) => {
      dispatch({
        type: LOADING,
        payload: false,
      });
      history.push("/");
    })
    .catch((err) => {
      dispatch({
        type: LOADING,
        payload: false,
      });
    });
};
export { signup, signin, logout, forgetEmail, resetPassword };

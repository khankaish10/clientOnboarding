import React, { useState } from "react";
import "./Auth.css";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import { useHistory, Link } from "react-router-dom";
import { useStyles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { forgetEmail } from "../../redux/actions/auth";
import { LOADING } from "../../redux/reducer/actionTypes";
import ClipLoader from "react-spinners/ClipLoader";

const ForgetPassword = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [forgotEmail, setForgotEmail] = useState("");
  const error = useSelector((state) => state.authReducer.error);
  const classes = useStyles();
  const isloading = useSelector((state) => state.authReducer.isLoading);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type: LOADING, payload: true});
    dispatch(
      forgetEmail(forgotEmail));
    setForgotEmail("");
  };

  return (
    <div className="authContainer">
      <div className="hero">
        <div className="welcomeContainer">
          <h3>Client Onboarding</h3>
          {/* <p>Nice to see you</p> */}
          {/* <h1>WELCOME</h1> */}
        </div>
      </div>

      <div className="loginContainer">
        <div className="login forgetEmailContainer">
          <h2 style={{ margin: "1rem" }}>Forgot Password</h2>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  className={classes.textField}
                  InputProps={{
                    classes: {
                      root: classes.root,
                      focused: classes.focused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                />
              </Grid>

              <Grid item>
                <p style={{ color: "red", fontSize: "14px" }}>{error}</p>
              </Grid>
              {/* <Grid container justify="flex-end"> */}
              {/* <Grid item>
                  <Typography  className={classes.forgetPassword}>
                    <Link to="/forget-password">Forget Password?</Link>
                  </Typography>
                </Grid> */}
              {/* </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              {
                isloading ? (
                <ClipLoader color={"#fff"} loading={isloading}  size={24} />
                ) : (
                  "Submit"
                )
              }
            </Button>
            <Grid container justify="center">
              <Grid item>
                <Typography className={classes.typography}>
                  <Link to="/signin">SignIn</Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

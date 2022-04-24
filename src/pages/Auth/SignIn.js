import React, { useState } from "react";
import "./Auth.css";
import { Grid, TextField, Button, Typography } from "@material-ui/core";
import { ERROR, LOADING } from "../../redux/reducer/actionTypes";
import { useHistory, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useStyles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../redux/actions/auth";
import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";

import ClipLoader from "react-spinners/ClipLoader";

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const error = useSelector((state) => state.authReducer.error);
  const classes = useStyles();
  const [authDetail, setAuthDetail] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const isloading = useSelector((state) => state.authReducer.isLoading);
  const currentUser = useSelector((state) => state.authReducer.currentUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: LOADING, payload: true});
    dispatch(signin(authDetail, history,));
    setAuthDetail({ fullName: "", email: "", password: "" });
  };
  const handleChange = (e) => {
    setAuthDetail({ ...authDetail, [e.target.name]: e.target.value });
  };

 

  setTimeout(() => {
    if (error) {
      dispatch({ type: ERROR, payload: "" });
    }
  }, 4000);

  if (currentUser) {
    return <Redirect to="/" />;
  }

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
        <div className="login">
          <h2 style={{ margin: "1rem" }}>Login Account</h2>
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
                  value={authDetail.email}
                  onChange={handleChange}
                />
              </Grid>
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
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={authDetail.password}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item>
                <p style={{ color: "red", fontSize: "14px" }}>{error}</p>
              </Grid>
              <Grid container justify="flex-end">
                <Grid item>
                  <Typography className={classes.forgetPassword}>
                    <Link to="/forget-password">Forget Password?</Link>
                  </Typography>
                </Grid>
              </Grid>
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
                  "Sign In"
                )
              }
            </Button>

            {/* <Box sx={{ "& > button": { m: 1 } }}>
              <LoadingButton
                size="small"
                color="primary"
                onClick={handleSubmit}
                loading={true}
                variant="contained"
                type="submit"
                fullWidth
                className={classes.submit}
              >
                Sign In
              </LoadingButton>
            </Box> */}

            <Grid container justify="flex-end">
              <Grid item>
                <Typography className={classes.typography}>
                  <Link to="/signup"> Don't have an account? Sign Up</Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

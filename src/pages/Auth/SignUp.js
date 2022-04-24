import React, { useState } from "react";
import "./Auth.css";
import {
  Grid,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";
import { useHistory, Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./styles";
import { signup } from "../../redux/actions/auth";
import { LOADING } from "../../redux/reducer/actionTypes";
import ClipLoader from "react-spinners/ClipLoader";

const SignUp = () => {
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type: LOADING, payload: true});
    dispatch(signup(authDetail, history));
    setAuthDetail({ fullName: "", email: "", password: "" });
  };
  const handleChange = (e) => {
    setAuthDetail({ ...authDetail, [e.target.name]: e.target.value });
  };

  return (
    <div className="authContainer">
      <div className="hero">
        <div className="welcomeContainer">
          {/* <p>Nice to see you</p> */}
      <h3>Client Onboarding</h3>
          {/* <h1>WELCOME</h1> */}
        </div>
      </div>

      <div className="loginContainer ">
        <div className="login">
          <h2 style={{ margin: "1rem" }}>Signup Account</h2>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  InputProps={{
                    classes: {
                      root: classes.root,
                      focused: classes.focused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                  autoComplete="fullName"
                  name="fullName"
                  variant="outlined"
                  required
                  fullWidth
                  id="fullName"
                  label="FullName"
                  autoFocus
                  value={authDetail.fullName}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
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
                <p style={{ color: "red", fontSize: "12px" }}>{error}</p>
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
                  "Sign Up"
                )
              }
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Typography className={classes.typography}>
                  <Link to="/signin"> Already have an account? Sign in</Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

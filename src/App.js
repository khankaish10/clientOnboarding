import React, { useEffect, useState } from "react";
import "./App.css";
import Intake from "./pages/Intake/Intake";
import DesignPage from "./pages/DesignPage/DesignPage";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import ForgetPassword from "./pages/Auth/ForgetPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import PrivateRoute from "./PrivateRoute";
import { auth, db } from "./config";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import ContentPage from "./pages/contentPage/ContentPage";
import { AUTH, } from "./redux/reducer/actionTypes";
import Page404 from './pages/Page404'
import {SETCARD} from './redux/reducer/actionTypes'

const Home = () => {
  return <Redirect to="/intake" />
}

function App() {
  const uid = useSelector((state) => state?.authReducer?.currentUser?.uid);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    try {
      auth.onAuthStateChanged((user) => {
        dispatch({ type: AUTH, payload: user });
        setLoading(false)
      });
    } catch (error) {
      alert(error.message)
    }
  }, []);

  useEffect(() => {
    const docRef = db.collection("card").doc(uid);
    docRef.onSnapshot((docSnap) => {
      if (docSnap?.exists) {
       dispatch({ type: SETCARD, payload: docSnap?.data()?.data })
      } else {
        console.log("no docs");
      }
    });
  }, [uid]);

  if(loading) {
    return null
  }

  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <PrivateRoute path="/intake" exact component={Intake}  />
        <PrivateRoute path="/content" exact component={ContentPage} />
        <PrivateRoute exact path="/design"  component={DesignPage} />  

        {/* authentication */}
        <Route path="/signin" exact component={SignIn} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/forget-password" exact component={ForgetPassword} />
        <Route path="/reset-password" exact component={ResetPassword} />

        {/* page not found */}
        <Route  path="*" component={Page404} />

      </Switch>
    </BrowserRouter>
  );
}

export default App;

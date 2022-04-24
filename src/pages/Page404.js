import React from "react";
import { NavLink } from "react-router-dom";

const Page404 = () => {
  return (
    <div>
      <h1>404 Page Not Found.</h1>
      <NavLink to="/">Go to our page here.</NavLink>
    </div>
  );
};

export default Page404;

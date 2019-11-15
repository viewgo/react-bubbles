//DEPENDENCIES
import React from "react";
import { Route, Redirect } from "react-router-dom";

//Check is user is authenticated
const isAuthenticated = () => {
  console.log(
    "isAuthenticated: ",
    sessionStorage.getItem("token") ? true : false
  );
  return sessionStorage.getItem("token") ? true : false;
};

/***** PRIVATE ROUTE *****/
export default function PrivateRoute({ children, ...rest }) {
  console.log("...rest", rest);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

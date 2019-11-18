import React, { useState, useEffect } from "react";
import axios from "axios";

const Login = props => {
  const [credentials, setCredentials] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fakeCred = { username: "Lambda School", password: "i<3Lambd4" };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  //Login on form submit
  const login = e => {
    e.preventDefault();

    axios
      //CHANGE TO ACTUAL LOGIN
      .post("http://localhost:5000/api/login", fakeCred)
      .then(response => {
        console.log("response", response);
        const { data } = response;

        sessionStorage.setItem("token", data.payload);
        setIsLoggedIn(true);

        //Redirect on login
        props.history.push("/protected");
      });
  };

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <form onSubmit={login}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
        />
        <button>Log in</button>
      </form>
    </>
  );
};

export default Login;

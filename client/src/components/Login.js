import React, {useState} from "react";
import Axios from "axios";

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, setUser] = useState({
    username: "Lambda School",
    password: "i<3Lambd4"
  });

  const handleChange = e => {
    setUser({...user, [e.target.name]: e.target.value});
  }

  const handleSubmit = e => {
    e.preventDefault();
    Axios
    .post("http://localhost:5000/api/login", user)
    .then(response => {
      console.log("Your In", response.data.payload);
      localStorage.setItem("token", response.data.payload);
      props.history.push("/bubbles");
    })
    .catch(error => {
      console.log("Your Not In", error);
    })
  }
  return (
    <>
    <form>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" value={user.username} onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={user.password} onChange={handleChange} />
        <button onClick={handleSubmit}>Log In</button>        
      </div>
    </form>
    </>
  );
};

export default Login;

import React, { useState } from "react";
import Navigation from "./Navigation";

const SignIn = () => {
  const [userInput, setUserInput] = useState({});

  const handleInput = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  return (
    <div className="sign-in-section">
      <Navigation />
      <h1>Sign In</h1>
      <form className="sign-in-form">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userInput.username || ""}
          onChange={handleInput}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userInput.password || ""}
          onChange={handleInput}
        />
      </form>
    </div>
  );
};

export default SignIn;

import React from "react";
import UseInput from "../hooks/UseInput";
import PropTypes from "prop-types";

function InputLogin({ valueData }) {
  const [email, setEmail] = UseInput();
  const [password, setPassword] = UseInput();

  const onLoginHandler = () => {
    valueData({ email, password });
  };

  return (
    <div className="input-login">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" onChange={setEmail} />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" onChange={setPassword} />
      <button type="button" onClick={onLoginHandler}>
        Login
      </button>
    </div>
  );
}

InputLogin.propTypes = {
  valueData: PropTypes.func.isRequired,
};

export default InputLogin;

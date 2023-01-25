import React from "react";
import UseInput from "../hooks/UseInput";
import PropType from "prop-types";

function RegisterInput({ register }) {
  const [name, setName] = UseInput();
  const [email, setEmail] = UseInput();
  const [password, setPassword] = UseInput();
  const [setConfirmPassword] = UseInput();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    register({ name, email, password });
  };

  return (
    <div className="input-register">
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Silahkan Masukkan Nama"
          onChange={setName}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Silahkan Masukkan Email"
          onChange={setEmail}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Silahkan Masukkan Password"
          onChange={setPassword}
        />
        <label htmlFor="confirm password">Confirm Password</label>
        <input
          type="password"
          id="confirm password"
          placeholder="Silahkan Masukkan Ulang Password"
          onChange={setConfirmPassword}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

RegisterInput.propType = {
  register: PropType.func.isRequired,
};

export default RegisterInput;

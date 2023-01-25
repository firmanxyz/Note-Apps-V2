import React from "react";
import { Link } from "react-router-dom";
import InputLogin from "../components/InputLogin";
import { login } from "../utils/network-data";
import PropTypes from "prop-types";

function LoginPage({ loginSuccses }) {
  async function loginData({ email, password }) {
    const { error, data } = await login({ email, password });
    if (!error) {
      loginSuccses(data);
    }
  }
  return (
    <section className="login-page">
      <h2>
        Silahkan Login Terlebih Dahulu Sebelum Menggunakan Layanan Aplikasi
      </h2>
      <InputLogin valueData={loginData} />
      <p>
        Belum Mempunyai Akun...?
        <Link to="/register">Silahkan Daftar Disini</Link>
      </p>
    </section>
  );
}

LoginPage.propTypes = {
  loginSuccses: PropTypes.func.isRequired,
};

export default LoginPage;

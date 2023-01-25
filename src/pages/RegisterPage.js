import React from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterInput from "../components/RegisterInput";
import { register } from "../utils/network-data";

function RegisterPage() {
  const navigator = useNavigate();
  const registerInput = async ({ name, email, password }) => {
    const result = await register({ name, email, password });
    if (!result.error) {
      navigator("/");
    }
  };
  return (
    <div className="app-container" data-theme="light">
      <main>
        <section className="register-pagi">
          <h2>Isi form untuk mendaftar akun.</h2>
          <RegisterInput register={registerInput} />
          <p>
            Anda sudah punya akun..? <Link to="/">Silahkan login di sini</Link>
          </p>
        </section>
      </main>
    </div>
  );
}

export default RegisterPage;

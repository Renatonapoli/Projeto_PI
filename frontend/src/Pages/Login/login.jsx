import React, { useState } from "react";
import Axios from "axios";
import "./login.css";

import Logo from "../../Assets/logo.jpg";

const Logar = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].email);
      }
    });
  };
  return (
    <div className="container-login">
      <div className="login-logo">
        <img src={Logo} alt="logo da página" />

        <div className="input-email">
          <label>Email</label>
          <input
            type="text"
            placeholder="Digite seu e-mail"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <div className="input-senha">
            <label>Senha</label>
            <input
              type="text"
              placeholder="Digite sua senha"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div className="botao">
              <button onClick={login}>Entrar</button>
            </div>
          </div>
          <h1>{loginStatus}</h1>
        </div>
      </div>
    </div>
  );
};

export default Logar;

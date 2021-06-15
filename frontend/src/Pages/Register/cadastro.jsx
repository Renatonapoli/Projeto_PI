import React, { useState } from "react";
import Axios from "axios";
import "./cadastro.css";

import ImagemLogo from "../../Assets/logo.jpg";

const Cadastrar = () => {
  const [usernameReg, setUserNameReg] = useState("");
  const [userReg, setUserReg] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [confpasswordReg, setConfPasswordReg] = useState("");

  const cadastro = () => {
    Axios.post("http://localhost:3001/cadastro", {
      username: usernameReg,
      user: userReg,
      email: emailReg,
      password: passwordReg,
      confpassword: confpasswordReg,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="container-formulario">
      <img src={ImagemLogo} alt="imagem de fundo" />

      <div className="formulario">
        <h2>Preencha o cadastro!</h2>

        <label>Nome completo</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          onChange={(e) => {
            setUserNameReg(e.target.value);
          }}
        />
        <label>Nome de usuário</label>
        <input
          type="text"
          placeholder="Digite um nome para usuário"
          onChange={(e) => {
            setUserReg(e.target.value);
          }}
        />
        <label>Digite um Email</label>
        <input
          type="text"
          placeholder="Digite o seu email"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        />
        <label>Digite uma Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          required
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <label>Confirmar senha</label>
        <input
          type="password"
          placeholder="Confirme sua senha"
          onChange={(e) => {
            setConfPasswordReg(e.target.value);
          }}
        />
        <div className="cadastrar">
          <button type="submit" onClick={cadastro}>
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cadastrar;

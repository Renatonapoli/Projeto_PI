import React from "react";
import "./nav.css";

function nav() {
  return (
    <div className="header-home">
      <div className="titulo">
        <a href="./">
          <h1>Sourch Stories</h1>
        </a>
        <div className="menu">
          <h2>Sobre</h2>
          <h2>Contatos</h2>
        </div>
      </div>
      <div className="botao-home">
        <button>
          <a href="/login">Login</a>
        </button>

        <button>
          <a href="/cadastro">Cadastra-se</a>
        </button>
      </div>
    </div>
  );
}

export default nav;

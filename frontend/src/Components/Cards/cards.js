import React from "react";
import "./cards.css";

function cards({ title, content, image }) {
  return (
    <div className="card-container">
      <div className="container-content">
        <img src={image} alt="Foto do usuário" />
        <div className="card-title">
          <h3>{title}</h3>
          <div className="card-content">
            <p>{content}</p>
            <div className="botao-card">
              <button>Mais informações</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cards;

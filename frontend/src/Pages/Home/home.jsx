import React from "react";
import "./home.css";

import Card from "../../Components/Cards/cards";
import Fortnite from "../../Assets/fortnite.jpg";
import CounterStrike from "../../Assets/counter-strike.jpg";
import Financeiro from "../../Assets/financeiro.jpg";
import Loja from "../../Assets/loja.jpg";
import Carnaval from "../../Assets/carnaval.jpg";
import Academia from "../../Assets/academia.jpg";

function home() {
  return (
    <div className="container-home">
      <h2>
        Aqui estão as redes sociais mais procuradas do mercado!
        <br /> Escolha a sua com apenas um click!!
      </h2>
      <div className="cards-prop">
        <Card
          image={Fortnite}
          title="Fortnite"
          content="Lorem Ipsum é simplesmente um texto fictício 
          da indústria de impressão e composição. Lorem Ipsum
          tem sido o texto fictício padrão da indústria desde
          os anos 1500, quando um impressor desconhecido pegou
          uma galé do tipo e embaralhou para fazer um livro de
          amostra de tipos."
        />
        <Card
          image={CounterStrike}
          title="Counter Strike"
          content="Lorem Ipsum é simplesmente um texto fictício 
          da indústria de impressão e composição. Lorem Ipsum
          tem sido o texto fictício padrão da indústria desde
          os anos 1500, quando um impressor desconhecido pegou
          uma galé do tipo e embaralhou para fazer um livro de
          amostra de tipos."
        />
        <Card
          image={Loja}
          title="Loja de Roupas"
          content="Lorem Ipsum é simplesmente um texto fictício 
          da indústria de impressão e composição. Lorem Ipsum
          tem sido o texto fictício padrão da indústria desde
          os anos 1500, quando um impressor desconhecido pegou
          uma galé do tipo e embaralhou para fazer um livro de
          amostra de tipos."
        />
        <Card
          image={Financeiro}
          title="Financeiro"
          content="Lorem Ipsum é simplesmente um texto fictício 
          da indústria de impressão e composição. Lorem Ipsum
          tem sido o texto fictício padrão da indústria desde
          os anos 1500, quando um impressor desconhecido pegou
          uma galé do tipo e embaralhou para fazer um livro de
          amostra de tipos."
        />
        <Card
          image={Carnaval}
          title="Blocos de carnaval"
          content="Lorem Ipsum é simplesmente um texto fictício 
          da indústria de impressão e composição. Lorem Ipsum
          tem sido o texto fictício padrão da indústria desde
          os anos 1500, quando um impressor desconhecido pegou
          uma galé do tipo e embaralhou para fazer um livro de
          amostra de tipos."
        />
        <Card
          image={Academia}
          title="Academia"
          content="Lorem Ipsum é simplesmente um texto fictício 
          da indústria de impressão e composição. Lorem Ipsum
          tem sido o texto fictício padrão da indústria desde
          os anos 1500, quando um impressor desconhecido pegou
          uma galé do tipo e embaralhou para fazer um livro de
          amostra de tipos."
        />
        <Card
          image={Fortnite}
          title="Conta Fortnite"
          content="Lorem Ipsum é simplesmente um texto fictício 
          da indústria de impressão e composição. Lorem Ipsum
          tem sido o texto fictício padrão da indústria desde
          os anos 1500, quando um impressor desconhecido pegou
          uma galé do tipo e embaralhou para fazer um livro de
          amostra de tipos."
        />
      </div>
    </div>
  );
}

export default home;

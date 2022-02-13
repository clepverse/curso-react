import { useState } from "react";

export default function App() {
  //ESTILOS
  const tabu = {
    display: "flex",
    flexDirection: "column",
  };

  const tabuLinha = {
    display: "flex",
    flexDirection: "row",
  };

  const casa = {
    width: 100,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    cursor: "pointer",
    fontSize: 60,
    border: "1px solid #000",
  };

  const jogoInicial = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const [jogo, setJogo] = useState(jogoInicial);
  const [simboloAtual, setSimboloAtual] = useState("X");
  const [jogando, setJogando] = useState(true);

  const tabuleiro = (j) => {
    return (
      <div style={tabu}>
        <div style={tabuLinha}>
          <div style={casa} data-pos="00" onClick={(e) => jogar(e)}>
            {j[0][0]}
          </div>
          <div style={casa} data-pos="01" onClick={(e) => jogar(e)}>
            {j[0][1]}
          </div>
          <div style={casa} data-pos="02" onClick={(e) => jogar(e)}>
            {j[0][2]}
          </div>
        </div>
        <div style={tabuLinha}>
          <div style={casa} data-pos="10" onClick={(e) => jogar(e)}>
            {j[1][0]}
          </div>
          <div style={casa} data-pos="11" onClick={(e) => jogar(e)}>
            {j[1][1]}
          </div>
          <div style={casa} data-pos="12" onClick={(e) => jogar(e)}>
            {j[1][2]}
          </div>
        </div>
        <div style={tabuLinha}>
          <div style={casa} data-pos="20" onClick={(e) => jogar(e)}>
            {j[2][0]}
          </div>
          <div style={casa} data-pos="21" onClick={(e) => jogar(e)}>
            {j[2][1]}
          </div>
          <div style={casa} data-pos="22" onClick={(e) => jogar(e)}>
            {j[2][2]}
          </div>
        </div>
      </div>
    );
  };

  const BtnJogarNovamente = () => {
    if (!jogando) {
      return (
        <button className="" onClick={() => reiniciar()}>
          Jogar Novamente
        </button>
      );
    }
  };

  const verificaVitoria = () => {
    //linhas
    let pontos = 0;
    let vitoria = false;
    for (let i = 0; i < 3; i++) {
      pontos = 0;
      for (let j = 0; j < 3; j++) {
        if (jogo[i][j] === simboloAtual) {
          pontos++;
        }
      }
      if (pontos === 3) {
        vitoria = true;
        break;
        return;
      }
    }

    for (let j = 0; j < 3; j++) {
      pontos = 0;
      for (let i = 0; i < 3; i++) {
        if (jogo[i][j] === simboloAtual) {
          pontos++;
        }
      }
      if (pontos === 3) {
        vitoria = true;
        break;
        return;
      }
    }

    //Diagonais
    pontos = 0;
    for (let d = 0; d < 3; d++) {
      if (jogo[i][j] === simboloAtual) {
        pontos++;
      }
    }
    if (pontos === 3) {
      vitoria = true;
      return;
    }

    pontos = 0;
    let i = 0;
    for (let j = 2; j >= 0; j--) {
      if (jogo[i][j] === simboloAtual) {
        pontos++;
      }
      i++;
    }
    if (pontos === 3) {
      vitoria = true;
      return vitoria;
    }
  };

  const trocaJogador = () => {
    simboloAtual === "X" ? (simboloAtual = "O") : (simboloAtual = "X");
  };

  const retPos = (e) => {
    const p = e.target.getAttribute("data-pos");
    const pos = [paseInt(p.substring(0, 1)), paseInt(p.substring(1, 2))];
    return pos;
  };

  const verificaEspacoVazio = (e) => {
    if (jogo[retPos(e)[0]][retPos(e)[1]] === "") {
      return true;
    } else {
      return false;
    }
  };

  const jogar = (e) => {
    if (jogando) {
      if (verificaEspacoVazio(e)) {
        jogo[retPos(e)[0]][retPos(e)[1]] = simboloAtual;
        trocaJogador();
        if (verificaVitoria()) {
          trocaJogador();
          alert("O vencedor é " + simboloAtual);
          setJogando(false);
        }
      } else {
        alert("Este espaço não está disponível");
      }
    }
  };

  const reiniciar = () => {
    setJogando(true);
    setJogo(jogoInicial);
    setSimboloAtual("X");
  };

  return (
    <>
      <div className="">
        <p>{`Quem joga: ${simboloAtual}`}</p>
      </div>
      <div className="">{tabuleiro(jogo)}</div>
      <div className="">{BtnJogarNovamente()}</div>
    </>
  );
}

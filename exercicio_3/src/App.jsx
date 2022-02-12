import React, { useState } from "react";

export default function App() {
  const [valorTela, setValorTela] = useState("");
  const [resultado, setResultado] = useState(0);
  const [acumulador, setAcumulador] = useState(0);
  const [operado, setOperado] = useState(false);

  //COMPONENTES
  const Tela = (valor, res) => {
    return (
      <div className="flex w-full flex-col items-start justify-center rounded-sm bg-slate-500 px-6">
        <span className="h-14 text-2xl text-white">{valor}</span>
        <span className="text-7xl text-white">{res}</span>
      </div>
    );
  };

  const Btn = (label, onClick) => {
    return (
      <div className="">
        <button
          className="text-md h-16 w-24 border-black bg-black text-center text-white hover:bg-slate-300 hover:text-black sm:w-40 md:w-60"
          onClick={onClick}
        >
          {label}
        </button>
      </div>
    );
  };

  //FUNCOES
  const addDigitoTela = (d) => {
    if ((d == "+" || d == "-" || d == "*" || d == "/") && operado) {
      setOperado(false);
      setValorTela(resultado + d);
      return;
    }
    if (operado) {
      setValorTela(d);
      setOperado(false);
      return;
    }
    const valorDigitadoTela = valorTela + d;
    setValorTela(valorDigitadoTela);
  };

  const limpadorMemoria = () => {
    setOperado(false);
    setValorTela("");
    setResultado(0);
    setAcumulador(0);
    return;
  };

  const Operacao = (oper) => {
    if (oper == "bs") {
      let vtela = valorTela;
      vtela = vtela.substring(0, vtela.length - 1);
      setValorTela(vtela);
      setOperado(false);
      return;
    }
    try {
      const r = eval(valorTela); //Cálculo
      setAcumulador(r);
      setResultado(r);
      setOperado(true);
    } catch {
      setResultado("Erro");
    }
  };

  return (
    <div className="mx-auto max-w-screen-lg px-4">
      <div className="mx-auto flex w-full flex-col items-center justify-center rounded-lg border border-black bg-slate-600 p-5">
        <h3 className="pb-3 text-xl font-semibold">Calculadora Simples</h3>
        {Tela(valorTela, resultado)}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {Btn("AC", limpadorMemoria)}
          {Btn("(", () => addDigitoTela("("))}
          {Btn(")", () => addDigitoTela(")"))}
          {Btn("/", () => addDigitoTela("/"))}
          {/* {Btn("%", () => addDigitoTela("%"))} */}
          {Btn("7", () => addDigitoTela("7"))}
          {Btn("8", () => addDigitoTela("8"))}
          {Btn("9", () => addDigitoTela("9"))}
          {Btn("*", () => addDigitoTela("*"))}
          {Btn("4", () => addDigitoTela("4"))}
          {Btn("5", () => addDigitoTela("5"))}
          {Btn("6", () => addDigitoTela("6"))}
          {Btn("-", () => addDigitoTela("-"))}
          {Btn("1", () => addDigitoTela("1"))}
          {Btn("2", () => addDigitoTela("2"))}
          {Btn("3", () => addDigitoTela("3"))}
          {Btn("+", () => addDigitoTela("+"))}
          {Btn("0", () => addDigitoTela("0"))}
          {Btn(".", () => addDigitoTela("."))}
          {Btn("<-", () => Operacao("bs"))}
          {Btn("=", () => Operacao("="))}
        </div>
      </div>
    </div>
  );
}

// import axios from "axios";
import { useState, useEffect } from "react";
import ListaCarros from "./componentes/ListaCarros";

function App() {
  const [carros, setCarros] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("https://cfbcursosapireactexemplo1.clep1dev.repl.co/")
  //     .then((response) => {
  //       const dadosCarros = response.data;
  //       setCarros(dadosCarros);
  //       console.log(dadosCarros);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);

  useEffect(() => {
    fetch("https://cfbcursosapireactexemplo1.clep1dev.repl.co/")
      .then((response) => response.json())
      .then((dadosCarros) => {
        setCarros(dadosCarros);
        console.log(dadosCarros);
      })
      .catch((err) => {
        console.log(err + "Erro ao carregar os dados");
      });
  }, []);

  return (
    <>
      <ListaCarros carros={carros} />
    </>
  );
}

export default App;

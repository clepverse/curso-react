import { useState } from "react";
import Altura from "./componentes/Altura";
import Calcular from "./componentes/Calcular";
import Peso from "./componentes/Peso";
import Resultado from "./componentes/Resultado";
import Tabela from "./componentes/Tabela";

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState(0);

  return (
    <>
      <Peso p={peso} sp={setPeso} />
      <Altura a={altura} sa={setAltura} />
      <Calcular p={peso} a={altura} sr={setResultado} />
      <Resultado r={resultado} />
      <Tabela />
    </>
  );
}

export default App;

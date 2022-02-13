import {} from "react";
import { Routes, Route, Link } from "react-router-dom";
import Pagina1 from "./componentes/Pagina1";
import Pagina2 from "./componentes/Pagina2";
import Pagina3 from "./componentes/Pagina3";

function ListaNumeros(props) {
  const num = props.numeros;
  const lista_numeros = num.map((n) => <li key={n.toString()}>{n}</li>);
  return <ul>{lista_numeros}</ul>;
}

const array_numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  return (
    <div className="mx-auto max-w-screen-lg px-40">
      <header>
        <nav className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/pag1">Página1</Link>
          <Link to="/pag2">Página2</Link>
          <Link to="/pag3">Página3</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route exact path="/pag1" element={<Pagina1 />} />
          <Route exact path="/pag2" element={<Pagina2 />} />
          <Route exact path="/pag3" element={<Pagina3 />} />
        </Routes>
        <div className="">
          <ListaNumeros numeros={array_numeros} />
        </div>
      </main>
    </div>
  );
}

export default App;

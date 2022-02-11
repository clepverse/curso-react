import { useState } from "react";

const carros = [
  { categoria: "Esporte", modelo: "Golf GTI", preco: "R$ 110.000,00" },
  { categoria: "Esporte", modelo: "Ferrari", preco: "R$ 200.000,00" },
  { categoria: "Esporte", modelo: "Camaro", preco: "R$ 90.000,00" },
  { categoria: "Esporte", modelo: "Corvette", preco: "R$ 150.000,00" },
  { categoria: "Ultilitario", modelo: "Fusca", preco: "R$ 20.000,00" },
  { categoria: "Ultilitario", modelo: "Cobalt", preco: "R$ 80.000,00" },
  { categoria: "SUV", modelo: "HRV", preco: "R$ 85.000,00" },
];

const linhas = (cat) => {
  const li = [];
  carros.forEach((carro, index) => {
    if (
      carro.categoria.toLowerCase().includes(cat.toLowerCase()) ||
      carro.modelo.toLowerCase().includes(cat.toLowerCase()) ||
      carro.preco.toLowerCase().includes(cat.toLowerCase()) ||
      cat === ""
    ) {
      li.push(
        <tr key={index}>
          <td className="border px-4">{carro.categoria}</td>
          <td className="border px-4">{carro.modelo}</td>
          <td className="border px-4">{carro.preco}</td>
        </tr>
      );
    }
  });
  return li;
};

const tabelaCarros = (cat) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th className="px-4 py-2">Categoria</th>
          <th className="px-4 py-2">Modelo</th>
          <th className="px-4 py-2">Preço</th>
        </tr>
      </thead>
      <tbody>{linhas(cat)}</tbody>
    </table>
  );
};

const pesquisarCategoria = (cat, scat) => {
  return (
    <div>
      <input
        className="focus:shadow-outline block w-full appearance-none rounded-lg border border-gray-300 bg-white py-2 px-4 leading-normal focus:outline-none"
        type="text"
        placeholder="Pesquisar"
        value={cat}
        onChange={(e) => scat(e.target.value)}
      />
    </div>
  );
};

function App() {
  const [categoria, setCategoria] = useState("");

  return (
    <>
      {pesquisarCategoria(categoria, setCategoria)}
      {tabelaCarros(categoria)}
    </>
  );
}

export default App;

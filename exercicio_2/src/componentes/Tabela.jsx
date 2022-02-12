import React from "react";

export default function Tabela() {
  return (
    <div className="">
      <table className="my-4 mx-2 table-auto rounded-lg bg-white">
        <thead>
          <tr className="">
            <th className="px-8 py-2">Classificação</th>
            <th className="px-8 py-2">IMC</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-2">Abaixo do peso</td>
            <td className="px-2">Menor que 18,5</td>
          </tr>
          <tr>
            <td className="px-2">Peso normal</td>
            <td className="px-2">Entre 18,5 e 24,9</td>
          </tr>
          <tr>
            <td className="px-2">Sobrepeso</td>
            <td className="px-2">Entre 25 e 29,9</td>
          </tr>
          <tr>
            <td className="px-2">Obesidade Grau I</td>
            <td>Entre 30 e 34,9</td>
          </tr>
          <tr>
            <td className="px-2">Obesidade Grau II</td>
            <td className="px-2">Entre 35 e 39,9</td>
          </tr>
          <tr>
            <td className="px-2">Obesidade grau III</td>
            <td className="px-2">Maior que 40</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

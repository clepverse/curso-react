import React from "react";

export default function Altura(props) {
  return (
    <div className="mx-2">
      <label className="mr-2">Altura</label>
      <input
        className="focus:shadow-outline w-60 appearance-none rounded-lg border border-gray-300 bg-white py-2 px-4 leading-normal focus:outline-none"
        placeholder="Digite sua altura em metros"
        type="text"
        value={props.a}
        onChange={(e) => {
          props.sa(e.target.value);
        }}
      />
    </div>
  );
}

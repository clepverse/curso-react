import React from "react";

export default function Peso(props) {
  return (
    <div className="mx-2">
      <label className="mr-4">Peso</label>
      <input
        className="focus:shadow-outline w-60 appearance-none rounded-lg border border-gray-300 bg-white py-2 px-4 leading-normal focus:outline-none"
        placeholder="Digite seu peso em kg"
        type="text"
        value={props.p}
        onChange={(e) => {
          props.sp(e.target.value);
        }}
      />
    </div>
  );
}

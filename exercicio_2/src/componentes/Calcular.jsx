import React from "react";

export default function Calcular(props) {
  const calc = () => {
    props.sr(props.p / (props.a * props.a));
  };

  return (
    <div>
      <button
        className="m-2 w-72 rounded-md bg-white p-2 font-semibold hover:bg-slate-100"
        onClick={calc}
      >
        Calcular
      </button>
    </div>
  );
}

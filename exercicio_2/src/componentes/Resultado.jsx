import React from "react";

export default function Resultado(props) {
  return (
    <div className="mx-2 w-72 rounded-lg bg-white py-1 px-2">
      <p className="font-semibold">{`Resultado: ${props.r.toFixed(1)}`}</p>
    </div>
  );
}

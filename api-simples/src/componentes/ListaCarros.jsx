import React from "react";

export default function ListaCarros(props) {
  return (
    <>
      <div>
        {props.carros.map((car) => {
          return (
            <div key={car.id}>
              {car.id} - {car.marca} - {car.modelo}
            </div>
          );
        })}
      </div>
    </>
  );
}

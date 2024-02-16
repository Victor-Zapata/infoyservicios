import React, { useEffect } from "react";
import { useDolaresStore } from "../store";

const Dolares = () => {
  const getDolares = useDolaresStore((state) => state.getDolares);

  useEffect(() => {
    getDolares();
  }, []);

  const dolares = useDolaresStore((state) => state.dolares);
  console.log(dolares);

  return (
    <ul>
      {dolares.map((item) => {
        return (
          <li key={item.venta} style={{display: 'flex',gap: '1rem'}}>
            <span>Dólar {item.nombre}</span>
            <span>Compra: {item.compra} pesos</span>
            <span>Venta: {item.venta} pesos</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Dolares;

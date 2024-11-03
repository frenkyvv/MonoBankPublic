// components/Boton.js
import React from "react"
import styled from "styled-components";

const Boton = ({ onClick, mostrarPropiedades }) => {
  return (
    <BotonEstilizado onClick={onClick}>
      {mostrarPropiedades ? "Transferencias" : "Propiedades"}
    </BotonEstilizado>
  );
};

const BotonEstilizado = styled.button`
  background-color: rgba(0, 76, 153);
  color: #fff;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  font-size: 26px;
  margin: 20px;
`;

export default Boton;
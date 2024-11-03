import React from "react"
import styled from "styled-components"

const Imagen = styled.img`
  width: 80%;
  height: auto;
  margin: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`

const MostrarFoto = ({ foto }) => {
  return <Imagen src={foto} alt={foto} />
}

export default MostrarFoto

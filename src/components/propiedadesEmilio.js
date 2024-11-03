import React, { useState, useEffect } from "react"
import app from "../pages/firebase"
import { doc, getDoc } from "firebase/firestore"
import styled from "styled-components"
import "bootstrap/dist/css/bootstrap.css"
import ModalFoto from "./ModalFoto"

const obtenerPropiedades = async () => {
  try {
    const bancoRef = doc(app, "jugadores", "Jugador1")
    const bancoDoc = await getDoc(bancoRef)
    const propiedades = bancoDoc.data().propiedades
    console.log(propiedades)
    return propiedades
  } catch (error) {
    console.error(error)
    return []
  }
}

function VisorPropsEmilio() {
  const [propiedades, setPropiedades] = useState([])

  useEffect(() => {
    obtenerPropiedades().then(propiedades => {
      setPropiedades(propiedades || [])
    })
  }, [])

  return (
    <Container>
      <Titulo>Mis Propiedades</Titulo>
      <Ligas>
        <table>
          <thead>
            <tr>
              <th style={{ width: "120px" }}>Número</th>
              <th>Nombre de la Propiedad</th>
            </tr>
          </thead>
          <tbody>
            {propiedades.map((propiedad, index) => (
              <tr key={index}>
                <td style={{ textAlign: "center" }}>{index + 1}</td>
                <td style={{ textAlign: "left" }}>{propiedad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Ligas>
    </Container>
  )
}

export default VisorPropsEmilio

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`
const Titulo = styled.h1`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
`
const Ligas = styled.div`
  display: grid;
  flex-direction: row dense;
  grid-column-gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  table th {
    text-align: center;
    font-weight: bold;
  }
  table td {
    text-align: center;
  }
`

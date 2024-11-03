import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import styled from "styled-components"
import Jugadores from "../components/subirDatos"
import Propiedades from "../components/propiedadesBanco"
import TraspasarPropiedades from "../components/transferProps"
import ModalFoto from "../components/ModalFoto"

function IndexPage() {
  const [mostrarPropiedades, setMostrarPropiedades] = useState(false)

  const handleBoton = () => {
    setMostrarPropiedades(!mostrarPropiedades)
  }

  return (
    <Layout>
      <Seo title="Home" />
      <Container>
        <img src="/images/logos/logo.svg" alt="logo" />
        <h1>Monopoly</h1>
        <p>Welcome to your new Monopoly Bank.</p>
        <Boton onClick={handleBoton}>
          {mostrarPropiedades ? "Transferencias" : "Propiedades"}
        </Boton>

        {mostrarPropiedades ? (
          <>
            <TraspasarPropiedades />
            <Propiedades />
            <ModalFoto />
          </>
        ) : (
          <Jugadores />
        )}
      </Container>
      <Ligas>
        <Link to="/page-2/"> Emilio</Link> <br />
        <Link to="/page-3/"> Nicole</Link> <br />
        <Link to="/page-4/"> Frenky</Link> <br />
        <Link to="/page-5/"> Perla</Link> <br />
      </Ligas>
    </Layout>
  )
}

export default IndexPage

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`
const Ligas = styled.div`
  display: grid;
  flex-direction: row dense;
  grid-column-gap: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const Boton = styled.button`
  background-color: rgba(0, 76, 153);
  color: #fff;
  padding: 10px 20px;
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
  font-size: 26px;
  margin: 20px;
`

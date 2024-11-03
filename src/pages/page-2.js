import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import styled from "styled-components"
import { collection, query, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import app from "../pages/firebase"
import TransEmilio from "../components/transferEmilio"
import VisorPropsEmilio from "../components/propiedadesEmilio"
import ModalFoto from "../components/ModalFoto"
import TraspasarPropsEmilio from "../components/transPropsEmilio"

function JugadorUno() {
  const [mostrarPropiedades, setMostrarPropiedades] = useState(false)

  const handleBoton = () => {
    setMostrarPropiedades(!mostrarPropiedades)
  }

  const jugadoresRef = collection(app, "jugadores")
  const q = query(jugadoresRef)

  const [data, setData] = useState([])
  const [loading, setloader] = useState(true)

  function getData() {
    onSnapshot(q, querySnapshot => {
      const items = []
      querySnapshot.forEach(doc => {
        items.push(doc.data())
      })
      setData(items)
      setloader(false)
    })
  }

  useEffect(() => {
    getData()
  }, [getData])

  const primerJugador = data.length > 0 ? data[1] : null

  return (
    <Layout>
      <Seo title="Emilio" />
      <Container>
        {primerJugador && (
          <>
            <Nombre>{primerJugador.nombre}</Nombre>
            <Saldo>{primerJugador.saldo}</Saldo>
            <Boton onClick={handleBoton}>
              {mostrarPropiedades ? "Transferencias" : "Propiedades"}
            </Boton>

            {mostrarPropiedades ? (
              <>
                <TraspasarPropsEmilio />
                <VisorPropsEmilio />
                <ModalFoto />
              </>
            ) : (
              <TransEmilio />
            )}

            <Link to="/">Go back to the homepage</Link>
          </>
        )}
      </Container>
    </Layout>
  )
}

export default JugadorUno

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`
const Nombre = styled.div`
  font-size: 34px;
  font-weight: bold;
`
const Saldo = styled.div`
  font-size: 24px;
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

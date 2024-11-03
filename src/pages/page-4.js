import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import styled from "styled-components"
import { collection, query, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import app from "../pages/firebase"
import TransferFrenky from "../components/transferFrenky"
import VisorPropsFrenky from "../components/propiedadesFrenky"
import TraspasarPropsFrenky from "../components/transPropsFrenky"
import Boton from "../components/Boton";

function JugadorTres() {
  const [mostrarPropiedades, setMostrarPropiedades] = useState(false)
  const [data, setData] = useState([])
  const [loader, setloader] = useState(true)

  const jugadoresRef = collection(app, "jugadores")
  const q = query(jugadoresRef)

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
  }, [])

  const tercerJugador = data.length > 0 ? data[3] : null

  const handleBoton = () => {
    setMostrarPropiedades(!mostrarPropiedades)
  }

  return (
    <Layout>
      <Seo title="Frenky" />
      <Container>
        {tercerJugador && (
          <>
            <Nombre>{tercerJugador.nombre}</Nombre>
            <Saldo>{tercerJugador.saldo}</Saldo>
            <Boton onClick={handleBoton} mostrarPropiedades={mostrarPropiedades} />
  
            {mostrarPropiedades ? (
              <>
                <TraspasarPropsFrenky />
                <VisorPropsFrenky />
              </>
            ) : (
              <TransferFrenky />
            )}
  
            <Link to="/">Go back to the homepage</Link>
          </>
        )}
      </Container>
    </Layout>
  );
}

export default JugadorTres

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
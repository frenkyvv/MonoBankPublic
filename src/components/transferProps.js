import React, { useState, useEffect } from "react"
import app from "../pages/firebase"
import {
  collection,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore"
import styled from "styled-components"
import Dropdown from "react-bootstrap/Dropdown"
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.css"
import Alert from "react-bootstrap/Alert"

const obtenerJugadores = async () => {
  try {
    const jugadoresRef = collection(app, "jugadores")
    const jugadoresDocs = await getDocs(jugadoresRef)
    const jugadores = jugadoresDocs.docs.map(doc => ({
      id: doc.id,
      nombre: doc.data().nombre,
    }))
    return jugadores
  } catch (error) {
    console.error(error)
  }
}

const obtenerPropiedades = async () => {
  try {
    const bancoRef = doc(app, "jugadores", "Banco")
    const bancoDoc = await getDoc(bancoRef)
    const propiedades = bancoDoc.data().propiedades
    return propiedades
  } catch (error) {
    console.error(error)
  }
}

const transferirPropiedad = async (
  jugadorSeleccionado,
  propiedadSeleccionada,
  jugadores,
  setShowAlert,
  setAlertMessage
) => {
  try {
    const jugadorRef = doc(app, "jugadores", jugadorSeleccionado)
    const bancoRef = doc(app, "jugadores", "Banco")

    // Obtenemos la referencia a la propiedad seleccionada en el array de propiedades del banco
    const bancoDoc = await getDoc(bancoRef)
    const propiedadesBanco = bancoDoc.data().propiedades
    const indexPropiedad = propiedadesBanco.indexOf(propiedadSeleccionada)

    // Si la propiedad existe en el array de propiedades del banco
    if (indexPropiedad !== -1) {
      // Eliminamos la propiedad del array de propiedades del banco
      await updateDoc(bancoRef, {
        propiedades: arrayRemove(propiedadSeleccionada),
      })

      // Obtenemos el documento del jugador seleccionado
      const jugadorDoc = await getDoc(jugadorRef)
      const jugadorData = jugadorDoc.data()

      // Si el campo propiedades no existe en el documento del jugador, lo creamos como un array vacío
      if (!jugadorData.propiedades) {
        await updateDoc(jugadorRef, {
          propiedades: [],
        })
      }

      // Agregamos la propiedad al array de propiedades del jugador seleccionado
      await updateDoc(jugadorRef, {
        propiedades: arrayUnion(propiedadSeleccionada),
      })

      // Muestra una alerta de éxito
      setShowAlert(true)
      setAlertMessage(
        `Transferencia de ${propiedadSeleccionada} a ${
          jugadores.find(jugador => jugador.id === jugadorSeleccionado)?.nombre
        } correcta`
      )

      console.log(
        `Propiedad ${propiedadSeleccionada} transferida a ${jugadorSeleccionado}`
      )
    } else {
      // Muestra una alerta de error
      setShowAlert(true)
      setAlertMessage("La propiedad seleccionada no existe en el banco")

      console.error("La propiedad seleccionada no existe en el banco")
    }
  } catch (error) {
    // Muestra una alerta de error
    setShowAlert(true)
    setAlertMessage("Ocurrió un error durante la transferencia")

    console.error(error)
  }
}

function TraspasarPropiedades() {
  const [jugadores, setJugadores] = useState([])
  const [propiedades, setPropiedades] = useState([])
  const [jugadorSeleccionado, setJugadorSeleccionado] = useState("Jugador")
  const [propiedadSeleccionada, setPropiedadSeleccionada] =
    useState("Propiedades")
  const [showAlert, setShowAlert] = useState(false) // Agrega este estado
  const [alertMessage, setAlertMessage] = useState("")

  useEffect(() => {
    obtenerJugadores().then(jugadores => setJugadores(jugadores))
    obtenerPropiedades().then(propiedades => setPropiedades(propiedades))
  }, [])

  const handleJugadorSeleccionado = jugador => {
    setJugadorSeleccionado(jugador.id)
  }
  const handlePropiedadSeleccionada = propiedad => {
    setPropiedadSeleccionada(propiedad)
  }

  return (
    <Container className="text-center">
      <h1>Traspasar propiedades</h1>
      <h4>A que jugador quieres transferir la propiedad:</h4>
      <DropdownContainer>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {jugadores.find(jugador => jugador.id === jugadorSeleccionado)
              ?.nombre || "Jugador"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {jugadores.map((jugador, index) => (
              <Dropdown.Item
                key={index}
                onClick={() => handleJugadorSeleccionado(jugador)}
              >
                {jugador.nombre}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            {propiedadSeleccionada}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {propiedades.map((propiedad, index) => (
              <Dropdown.Item
                key={index}
                onClick={() => handlePropiedadSeleccionada(propiedad)}
              >
                {propiedad}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </DropdownContainer>
      <Button
        onClick={() => {
          transferirPropiedad(
            jugadorSeleccionado,
            propiedadSeleccionada,
            jugadores,
            setShowAlert,
            setAlertMessage
          )
        }}
      >
        Transferir
      </Button>
      {showAlert && (
        <>
          <Overlay />
          <AlertContainer>
            <Alert
              variant="success"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              <Alert.Heading>Transferencia exitosa</Alert.Heading>
              <p>{alertMessage}</p>
            </Alert>
          </AlertContainer>
        </>
      )}
    </Container>
  )
}

export default TraspasarPropiedades

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px; /* ajusta el ancho según tus necesidades */
  margin: 15px;
`
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`

const AlertContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`

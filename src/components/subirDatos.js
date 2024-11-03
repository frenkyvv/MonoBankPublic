import app from "../pages/firebase"
import {
  collection,
  query,
  onSnapshot,
  increment,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore"
import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Button from "react-bootstrap/Button"
import "bootstrap/dist/css/bootstrap.css"
import Form from "react-bootstrap/Form"
import InputGroup from "react-bootstrap/InputGroup"

const obtenerJugadores = async () => {
  try {
    const jugadoresRef = collection(app, "jugadores")
    const jugadoresDocs = await getDocs(jugadoresRef)
    const jugadoresData = jugadoresDocs.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))
    return jugadoresData
  } catch (error) {}
}

const actualizarSaldoJugador = async (jugadorId, cantidad) => {
  try {
    const jugadorRef = doc(app, "jugadores", jugadorId)
    await updateDoc(jugadorRef, {
      saldo: increment(cantidad),
    })
    console.log(`Saldo del jugador ${jugadorId} actualizado con éxito`)
  } catch (error) {
    console.error(`Error al actualizar saldo del jugador ${jugadorId}:`, error)
  }
}

const obtenerTransacciones = async () => {
  try {
    const historialRef = doc(app, "jugadores", "historial")
    const historialDoc = await getDoc(historialRef)
    const transacciones = historialDoc.data().transacciones
      ? historialDoc
          .data()
          .transacciones.filter(transaccion => transaccion.cantidad !== 0)
      : []
    return transacciones
  } catch (error) {
    console.error("Error al obtener transacciones:", error)
  }
}

const Jugadores = () => {
  const [jugadores, setJugadores] = useState([])
  const [cantidad, setCantidad] = useState(0)
  const [historial, setHistorial] = useState([])
  const [saldoJugador1, setSaldoJugador1] = useState(0)
  const [saldoJugador2, setSaldoJugador2] = useState(0)
  const [saldoJugador3, setSaldoJugador3] = useState(0)
  const [saldoJugador4, setSaldoJugador4] = useState(0)
  const [concepto, setConcepto] = useState("")

  const resetInputs = () => {
    setCantidad(0)
    setConcepto("")
  }

  useEffect(() => {
    obtenerJugadores().then(data => {
      setJugadores(data)
      data.forEach(jugador => {
        if (jugador.id === "Jugador1") {
          setSaldoJugador1(jugador.saldo)
        } else if (jugador.id === "Jugador2") {
          setSaldoJugador2(jugador.saldo)
        } else if (jugador.id === "Jugador3") {
          setSaldoJugador3(jugador.saldo)
        } else if (jugador.id === "Jugador4") {
          setSaldoJugador4(jugador.saldo)
        }
      })
      obtenerTransacciones().then(transacciones => {
        setHistorial(transacciones)
      })
    }, [])

    const jugador1Ref = doc(app, "jugadores", "Jugador1")
    onSnapshot(jugador1Ref, doc => {
      if (doc.data() && doc.data().saldo) {
        setSaldoJugador1(doc.data().saldo)
      }
    })

    const jugador2Ref = doc(app, "jugadores", "Jugador2")
    onSnapshot(jugador2Ref, doc => {
      if (doc.data() && doc.data().saldo) {
        setSaldoJugador2(doc.data().saldo)
      }
    })

    const jugador3Ref = doc(app, "jugadores", "Jugador3")
    onSnapshot(jugador3Ref, doc => {
      if (doc.data() && doc.data().saldo) {
        setSaldoJugador3(doc.data().saldo)
      }
    })

    const jugador4Ref = doc(app, "jugadores", "Jugador4")
    onSnapshot(jugador4Ref, doc => {
      if (doc.data() && doc.data().saldo) {
        setSaldoJugador4(doc.data().saldo)
      }
    })
  }, [])

  const agregarTransaccion = async (jugador, cantidad, concepto) => {
    try {
      const historialRef = doc(app, "jugadores", "historial")
      const nuevaTransaccion = {
        jugador,
        cantidad,
        concepto,
        timestamp: new Date().toISOString(),
      }
      await updateDoc(historialRef, {
        transacciones: arrayUnion(nuevaTransaccion),
      })
    } catch (error) {
      console.error("Error al agregar transacción:", error)
    }
  }

  const handleActualizarSaldo = (jugadorId, nombreJugador) => {
    console.log("handleActualizarSaldo: inicio")
    actualizarSaldoJugador(jugadorId, cantidad).then(() => {
      agregarTransaccion(nombreJugador, cantidad, concepto).then(() => {
        setHistorial([
          ...historial,
          {
            jugador: "Banco",
            destinatario: nombreJugador,
            cantidad: cantidad,
            concepto: concepto,
            timestamp: new Date().toISOString(),
          },
        ])
        resetInputs()
      })
    })
  }

  const handleActualizarVuelta = (jugadorId, nombreJugador, cantidad) => {
    console.log("handleActualizarVuelta: inicio")
    actualizarSaldoJugador(jugadorId, cantidad).then(() => {
      console.log("handleActualizarVuelta: saldo actualizado")
      agregarTransaccion(nombreJugador, cantidad).then(() => {
        console.log("handleActualizarVuelta: transacción agregada")
        setHistorial([
          ...historial,
          {
            jugador: "Banco",
            destinatario: nombreJugador,
            cantidad: cantidad,
            concepto: "Paso por GO",
            timestamp: new Date().toLocaleString(),
          },
        ])
        resetInputs()
      })
    })
  }
  const handleConceptoChange = e => {
    setConcepto(e.target.value)
  }

  const handleCantidadChange = event => {
    setCantidad(parseInt(event.target.value))
  }

  return (
    <Container>
      <Titulo>Transferir Fondos</Titulo>
      <InputGroup className="mb-3">
        <InputGroup.Text>$</InputGroup.Text>
        <Form.Control
          type="number"
          value={cantidad.toString()}
          onChange={handleCantidadChange}
        />
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>Concepto:</InputGroup.Text>
        <Form.Control
          type="text"
          value={concepto}
          onChange={handleConceptoChange}
        />
      </InputGroup>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Boton
          variant="success"
          onClick={() => handleActualizarSaldo("Jugador1", "Emilio")}
        >
          Emilio
          <br />
          <p>{saldoJugador1}</p>
        </Boton>
        <Boton
          variant="success"
          onClick={() => handleActualizarSaldo("Jugador2", "Nicole")}
        >
          Nicole
          <br />
          <p>{saldoJugador2}</p>
        </Boton>
        <Boton
          variant="success"
          onClick={() => handleActualizarSaldo("Jugador3", "Frenky")}
        >
          Frenky
          <br />
          <p>{saldoJugador3}</p>
        </Boton>
        <Boton
          variant="success"
          onClick={() => handleActualizarSaldo("Jugador4", "Perla")}
        >
          Perla<p>{saldoJugador4}</p>
        </Boton>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <BotonSumar
          variant="dark"
          onClick={() => handleActualizarVuelta("Jugador1", "Emilio", 2000)}
        >
          Emilio
          <br />
          +2000
        </BotonSumar>
        <BotonSumar
          variant="dark"
          onClick={() => handleActualizarVuelta("Jugador2", "Nicole", 2000)}
        >
          Nicole
          <br />
          +2000
        </BotonSumar>
        <BotonSumar
          variant="dark"
          onClick={() => handleActualizarVuelta("Jugador3", "Frenky", 2000)}
        >
          Frenky
          <br />
          +2000
        </BotonSumar>
        <BotonSumar
          variant="dark"
          onClick={() => handleActualizarVuelta("Jugador4", "Perla", 2000)}
        >
          Perla
          <br />
          +2000
        </BotonSumar>
      </div>
      <h2>Historial de transacciones</h2>
      <ul>
  {historial &&
    historial
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .slice(0, 5)
      .map((transaccion, index) => (
        <li key={index}>
          {new Date(transaccion.timestamp).toLocaleTimeString('es-ES', {
            hour: '2-digit',
            minute: '2-digit',
          })} - {transaccion.jugador}: {transaccion.cantidad} -{" "}
          {transaccion.destinatario} - {transaccion.concepto}
        </li>
      ))}
</ul>
    </Container>
  )
}

export default Jugadores

const Boton = styled(Button)`
  margin: 10px;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  width: 105px;
  cursor: pointer;
  &:hover {
    background-color: #3e8e41;
  }
`
const BotonSumar = styled(Boton)`
  background-color: #008cba; /* Blue */
  &:hover {
    background-color: #007b9a;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Titulo = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`

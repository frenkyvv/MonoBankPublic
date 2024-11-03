import React, { useState } from "react"
import styled from "styled-components"
import MostrarFoto from "./mostrarFoto"
import Dropdown from "react-bootstrap/Dropdown"
import Button from "react-bootstrap/Button"
import baltic from "../../public/propiedades/Baltica.png"
import mediterraneo from "../../public/propiedades/Mediterraneo.png"
import agua from "../../public/propiedades/Agua.png"
import atlantico from "../../public/propiedades/Atlantico.png"
import byo from "../../public/propiedades/B&ORR.png"
import carolinaNorte from "../../public/propiedades/CarolinaNorte.png"
import connecticut from "../../public/propiedades/Connecticut.png"
import electrica from "../../public/propiedades/Electrica.png"
import muelle from "../../public/propiedades/ElMuelle.png"
import estados from "../../public/propiedades/Estados.png"
import illinois from "../../public/propiedades/Illinois.png"
import indiana from "../../public/propiedades/Indiana.png"
import kentucky from "../../public/propiedades/Kentucky.png"
import marvin from "../../public/propiedades/Marvin.png"
import oriental from "../../public/propiedades/Oriental.png"
import pacifico from "../../public/propiedades/Pacifico.png"
import pensil from "../../public/propiedades/Pennsylvania.png"
import plaza from "../../public/propiedades/PlazaPark.png"
import reading from "../../public/propiedades/ReadingRR.png"
import carlos from "../../public/propiedades/SanCarlos.png"
import james from "../../public/propiedades/StJames.png"
import tenese from "../../public/propiedades/Tennessee.png"
import ventnor from "../../public/propiedades/Ventnor.png"
import vermont from "../../public/propiedades/Vermont.png"
import viarapida from "../../public/propiedades/ViaRapidaRR.png"
import virginia from "../../public/propiedades/Virginia.png"

const ModalFoto = () => {
  const [mostrarFoto, setMostrarFoto] = useState(false)
  const [propiedadSeleccionada, setPropiedadSeleccionada] = useState("")
  const [propiedades, setPropiedades] = useState([
    { nombre: "Baltic", ruta: baltic },
    { nombre: "Mediterraneo", ruta: mediterraneo },
    { nombre: "Compañia de Agua", ruta: agua },
    { nombre: "Atlantico", ruta: atlantico },
    { nombre: "B & O RR", ruta: byo },
    { nombre: "Carolina del Norte", ruta: carolinaNorte },
    { nombre: "Connecticut", ruta: connecticut },
    { nombre: "Compañia Electrica", ruta: electrica },
    { nombre: "El Muelle", ruta: muelle },
    { nombre: "Los Estados", ruta: estados },
    { nombre: "Illinois", ruta: illinois },
    { nombre: "Indiana", ruta: indiana },
    { nombre: "Kentucky", ruta: kentucky },
    { nombre: "Marvin", ruta: marvin },
    { nombre: "Oriental", ruta: oriental },
    { nombre: "Pacifico", ruta: pacifico },
    { nombre: "Pennsylvania", ruta: pensil },
    { nombre: "La Plaza", ruta: plaza },
    { nombre: "Reading RR", ruta: reading },
    { nombre: "San Carlos", ruta: carlos },
    { nombre: "St. James", ruta: james },
    { nombre: "Tennessee", ruta: tenese },
    { nombre: "Ventnor", ruta: ventnor },
    { nombre: "Vermont", ruta: vermont },
    { nombre: "Via Rapida RR", ruta: viarapida },
    { nombre: "Virginia", ruta: virginia },
  ])

  const handleMostrarFoto = () => {
    setMostrarFoto(!mostrarFoto)
  }

  const handlePropiedadSeleccionada = propiedad => {
    setPropiedadSeleccionada(propiedad)
  }

  return (
    <div>
      <Container>
        <DropdownContainer>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {propiedadSeleccionada.nombre || "Seleccione una foto"}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {propiedades.map((propiedad, index) => (
                <Dropdown.Item
                  key={index}
                  onClick={() => handlePropiedadSeleccionada(propiedad)}
                >
                  {propiedad.nombre}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Button onClick={handleMostrarFoto}>
            {mostrarFoto ? "Ocultar Foto" : "Mostrar Foto"}
          </Button>
          {mostrarFoto && (
            <Modal>
              <ModalDialog>
                <ModalContent>
                  <ModalHeader>
                    <ModalTitle>Foto</ModalTitle>
                    <BotonCerrar onClick={handleMostrarFoto}>
                      <span aria-hidden="true">&times;</span>
                    </BotonCerrar>
                  </ModalHeader>
                  <ModalBody>
                    <MostrarFoto foto={propiedadSeleccionada.ruta} />
                  </ModalBody>
                  <ModalFooter>
                    <BotonCancelar onClick={handleMostrarFoto}>
                      Cancelar
                    </BotonCancelar>
                  </ModalFooter>
                </ModalContent>
              </ModalDialog>
            </Modal>
          )}
        </DropdownContainer>
      </Container>
    </div>
  )
}

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

const Boton = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
`

const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`

const ModalDialog = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 600px;
`

const ModalContent = styled.div`
  padding: 20px;
`

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
`

const ModalTitle = styled.h5`
  margin-bottom: 0;
`

const BotonCerrar = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`

const ModalBody = styled.div`
  padding-top: 20px;
`

const ModalFooter = styled.div`
  padding-top: 20px;
  text-align: right;
`

const BotonCancelar = styled.button`
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
`

export default ModalFoto

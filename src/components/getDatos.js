import React from "react"
import { collection, query, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"
import app from "../pages/firebase"

function App() {
  const jugadoresRef = collection(app, "jugadores")
  const q = query(jugadoresRef)
  const [data, setData] = useState([])
  const [loader, setloader] = useState(true)

  function getData() {
    onSnapshot(q, querySnapshot => {
      const items = []
      querySnapshot.forEach(doc => {
        items.push(doc.data())
      })
      setData(items)
      console.log("Datos descargados", items)
      if (items.length > 0) {
        console.log(
          "Saldo del primer documento",
          items[0].nombre,
          items[0].saldo
        )
      }
      setloader(false)
    })
  }
  useEffect(() => {
    getData()
    console.log("hola")
  }, [])

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  )
}

export default App

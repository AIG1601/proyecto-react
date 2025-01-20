import { useEffect, useState } from "react"
import axios from "axios"

function App() {

  const [criptos, setCriptos] = useState()

  //el archivo env debe encontrarse en la raiz del proyecto
  const API_URL = import.meta.env.VITE_API_URL

  //recordar: la funcion que corre cada que se crea un componente es la que esta en el useEffect

  useEffect (() => {

    //fetch una interfaz de js para acceder y manipular partes del canal http tales como peticiones y respuestas
    //fetch(`${API_URL}assets`) //fetch quiero que traigas informacion de una url

    axios.get(`${API_URL}assets`)// se coloca el nombre de la libreria. el tipo de peticion que se quiere hacer, la mas comun es la get

      //.then((resp)=> resp.json()) //el fetch es una promesa y si la promesa se cumple corre el .then ejecutando una respuesta, respuesta que estoy diciendo que sea de tipo json, rspuesta que genera otra respuesta, por ende, se necesita otro .then

      //ya la libreria axios convierte la informacion o datos obtenidos en un archivo json por lo tanto no es necesario realizar la peticion anterior.

      .then((data)=>{
        console.log(data)
        setCriptos(data.data.data)
      })
      .catch(()=>{
        console.error("la peticion fallo")
      })

  }, [])

  if (!criptos) return <span>Cargando...</span>

  return (
    <>
    <h1>Lista de Criptomonedas</h1>
    <ol>
      {
        criptos.map(({id,name,priceUsd}) => (
          <li key={id}> Nombre: {name}  Precio: {priceUsd}</li> //cada hijo de una lista debe tenr un key, es decir un identificador unico
        ))
      }
    </ol>
    </>
    

  )
}

export default App

import {createContext, useEffect, useState } from "react";

const UserContext = createContext()

const UserContextProvider = ({children}) => {

    const [usuario, setUsuario] = useState({})
    useEffect(() => {
        setUsuario ({
            name:"Aimara Imaru Guerra",
            registered: "25/Febrero/2025"
        })
    },[])

    return(
        <UserContext.Provider value={usuario}> {/**en value colocamos el valor que vamos a proveer o de la que se dara contexto */}
            {children}
        </UserContext.Provider>
    )
}

export {UserContext,UserContextProvider}

{
    /**los contextos son componentes que permiten centralizar la informacion, es decir que otros contextos tengan acceso a cierta informacion de otros componentes */

    /**para crear un contexto debemos crear un componente que envuelva a todos los componentes que queremos que reciban dicho contexto */

    /**cuando se crea un contexto automaticamente se guarda el componente PROVIDER */

    /**todos los componentes reciben un props que se llama children, y cuando se accede a esa componente decimos que vamos acceder a todos los hijos que tienen ese componente */
}
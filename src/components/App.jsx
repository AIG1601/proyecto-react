import { Navigate, Outlet } from "react-router-dom"
import Menu from "./menu/Menu"

const App = () => {

    if (!localStorage.getItem("tokenEdmarket")) return <Navigate to="/login"/>


    return(
        <>
            <Menu/>
            <Outlet/>{/**el componente outlet es lo que va a permitir que las rutas dentro de esta ruta madre hereden su estructura, en este caso todas las rutas hijas tendran un menu y luego se expresara la ruta hija que corresponde, es decir el componente hijo correspondiente tomara el lugar del componente outlet */}

            {/**el componente hijo va a tomar el lugar del outlet */}
        
        </>
    )
}

export default App;

{/**esta es la plantilla de la aplicacion, la ruta principal, la ruta madre */}
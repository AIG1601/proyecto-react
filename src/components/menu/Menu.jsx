import { NavLink, useNavigate } from "react-router-dom";
import "./menu.css"
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";

const Menu = () => {

    const navigation = useNavigate()

    const usuario = useContext(UserContext)

    return(
        <nav className="main-menu">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li> 
                {/** el componente link en react sustituye a la etiqueta <a></a>, para que la aplicacion corra en una sola pagina, sea una single page application, y evitar que tenga que refrescarse cada pagina, optmiza la pagina y mejora la experiencia del usuario*/}
                <li><NavLink to={"/criptomonedas"}>Criptomonedas</NavLink></li>
                <li><NavLink to={"/perfil"}>Perfil {usuario.name}</NavLink></li>
                <li><a onClick ={() => {
                    localStorage.removeItem("tokenEdmarket")
                    navigation("/login")}} >Cerrar sesion</a>
                </li>
            </ul>
        </nav>
    )
}

{/** el browser Router es quien combierte tu aplicacion en una single page application por lo que los componentes link debe estar dentro de ella */}

{/**normalmente para menu se usan los navlink, ese componente esta especializado en menu principales */}
export default Menu;

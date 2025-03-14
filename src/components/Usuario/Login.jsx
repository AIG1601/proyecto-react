import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import "./Login.css"

const Login = () =>{

    const navigation = useNavigate()
    {/**este use te permite redirigirte a la pagina que desees */}

    const [user, setUser] = useState({
        email:"",
        password:""
    })


    /**estado para mejorar el tiemo de espera */
    const [cargando, setCargando] = useState(false)

    const [error, setError] = useState()

    const submit = (e) =>{
        e.preventDefault()
        setCargando(true)
        setError(null)
        axios.post(`https://reqres.in/api/login`, user)
        .then(data => {
            setCargando(false)
            localStorage.setItem("tokenEdmarket", data.data.token)
            navigation("/")
        })
        .catch (e => {
            setCargando(false)
            console.error(e)
            setError(e.response.data.error)
        })
    }

    if (localStorage.getItem("tokenEdmarket")) return <Navigate to="/"/>

    {/**basicamente estos diciendo si el usuario ya existe en el token entonces que retorne a pagina de inicio */}
    
    {/**de la url se va a enviar la informacion que esta en user */}

    {/**localStorage.setItem se utiliza para guardar o actualizar datos en el navegador web */}

    return(
        <div className="login-container">
            <h1>Iniciar sesion</h1>
            <form onSubmit={submit}>
                <div className="field">
                    <label htmlFor="email">Correo electronico</label>
                    <input required onChange={(e) => {
                        setUser({
                            ...user,
                            email:e.target.value
                        })
                    }}
                     type="email" name="email" />
                </div>

                <div className="field">
                    <label htmlFor="password">Clave</label>
                    <input required onChange={(e) => {
                        setUser({
                            ...user,
                            password:e.target.value
                        })
                    }}
                    
                    type="password" name="password" />
                </div>
                <div className="submit">
                    <input type="submit" value= {cargando ? "cargando..." : "Ingresar"} className="link"/>
                </div>
            </form>
            {
                error && <span className="error">Error:{error}</span>
            } 
        </div>
    )
}

export default Login;

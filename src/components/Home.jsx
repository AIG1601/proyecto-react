import { Link } from "react-router-dom";


const Home = () => {
    return(
        <>
        <h1>Hola, bienvenido a Edmarket</h1>
        <p>Conoce las 100 cripto mas usadas</p>
        <Link to= "/criptomonedas">Ver Critomonedas</Link>
        </>
    )
}

export default Home;
import { Link } from "react-router-dom";
import "./Cripto.css"

const Cripto = ({id,name, priceUSD, symbol, percent}) => {
    return(
        <div className="cripto">
            <h2>{name}</h2>
            <div className="info">
                <p><span className= "label">Precio: </span> {parseFloat(priceUSD).toFixed(4)}</p>
                <p><span className= "label">Codigo: </span>{symbol}</p>
                <p>
                    <span className="label">Porcentaje de cambio en 24h:</span>
                    <span className={parseFloat(percent) > 0 ? "positivo" : "negativo"}>{parseFloat(percent).toFixed(4)}%</span> {/**estoy condicionando como un if o else */}
                </p>
                <Link to ={`/criptomonedas/${id}`}>Ver detalles</Link>
            </div>
        </div>
    )
}

export default Cripto;

//parseFloat analiza un argumento de cadena y la devuelve como un numero de punto flotante y toFixed formatea un numero usando notacion de un punto fijo, en este caso formatea el numero mostrando solo 4 decimales
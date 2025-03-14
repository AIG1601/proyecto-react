import { useParams } from "react-router-dom";
import "./CriptoPage.css"
import usePeticion from "../../hooks/usePeticion";
import CriptoInfo from "./criptoinfo/CriptoInfo";
import CriptoHistory from "./criptoinfo/CriptoHistory";

const Criptopage = () => {

    const params = useParams()

    const [cripto, cargandoCripto] = usePeticion(`assets/${params.id}`)
    const [history, cargandoHistory] = usePeticion (`assets/${params.id}/history?interval=d1`)

    if (cargandoCripto || cargandoHistory) return <span>Cargando...</span>

    {/**el hook params leera o devolvera los parametros que le pasemos a la ruta u url*/}

    /**params en un objeto que leera el atributo qure le pasamos a la ruta */

    /**const [cripto, setCripto] = useState({})
    const [history, setHistory] = useState([])

    useEffect(() => {
        axios.get(`${API_URL}assets/${params.id}`)
        .then(data => {
            setCripto(data.data.data)
        })
        .catch(e => console.error(e))

        axios.get(`${API_URL}assets/${params.id}/history?interval=d1`)
        .then(data => {
            setHistory(data.data.data)
        })
        .catch(e => console.error(e))
    }, [])*/

    /**se coloca mas de un useEffect si hay mas de un valor, o valores diferentes para el valor segundo parametro, digase el array, que es el que establece de que modo se va a ejecutar el useEffect*/

    

    return(
        <>
        <div className="cripto-page-container">
            {cripto && <CriptoInfo cripto = {cripto}/>}
{/**al componente CriptoInfo le estoy pasando una props para llamada cripto en la que pasamos la informacion de la cripto */}

            {history && <CriptoHistory history ={history}/>}
        </div>

        



        {/* <h1>soy la criptomoneda {params.id}</h1>
        <div className="info">
            <ul>
                <li><span className="label">Nombre:</span> {cripto.name}</li>
                <li><span className="label">Simbolo:</span> {cripto.symbol}</li>
            </ul>
        </div>
        <h2>HISTORIAL</h2>
        <table>
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {
                    history.map(({date, priceUsd, time}) => (
                        <tr key={time}>
                            <td className="label">{new Date (date).toDateString()}</td>
                            <td className="price">{parseFloat(priceUsd).toFixed(4)}</td>
                        </tr>

                    ))
                }
            </tbody>
        </table> */}
        </>
        
    )
}

export default Criptopage;
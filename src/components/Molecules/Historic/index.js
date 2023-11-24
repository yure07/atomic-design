import './style.css'
import NumberHistoric from "../../Atoms/NumberHistoric"

const Historic = ({children}) => {
    return(
        <div className="container-historic">
            <h2>Histórico de resultados:</h2>
            <div className='historic'>
                {children.map((result) => (
                    <NumberHistoric key={result}>{result}</NumberHistoric>
                ))}
            </div>
        </div>
    )
}

export default Historic
import Botao from "../../Atoms/Botao"
import './style.css'

const Operations = ({onOperation}) => {
    return(
        <section className="buttons-container">
            <Botao label="+" onClick={() => onOperation('+')}/>
            <Botao label="-" onClick={() => onOperation('-')}/>
            <Botao label="*" onClick={() => onOperation('*')}/>
            <Botao label="/" onClick={() => onOperation('/')}/>
        </section>
    )
}

export default Operations
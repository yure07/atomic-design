import './botao.css'

const Botao = ({label, onClick}) => {
    return(
        <button className='button-operation' onClick={onClick}>{label}</button>
    )
}

export default Botao
import './style.css'
import InputAtom from '../../Atoms/Input'
const Inputs = ({valueInput1, valueInput2, onChangeInput1, onChangeInput2}) => {

    return(
        <section className="inputs-container">
            <InputAtom 
              placeholder="Digite o numero 1" 
              value={valueInput1 || ''} 
              onChange={onChangeInput1}
            />
            <InputAtom 
              placeholder="Digite o numero 2"
              value={valueInput2 || ''}
              onChange={onChangeInput2}  
            />
        </section>
    )
}

export default Inputs
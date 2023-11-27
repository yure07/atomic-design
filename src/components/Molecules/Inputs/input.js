import './style.css'
import InputAtom from '../../Atoms/Input'
import Span from '../../Atoms/Span'
import withRadius from '../../../hoc/withFocus'
import { useRef } from 'react'

const InputWithRadius = withRadius(InputAtom, Span)

const Inputs = ({valueInput1, valueInput2, onChangeInput1, onChangeInput2}) => {
    const refInput = useRef(null)
    return(
        <section className="inputs-container">
            <InputWithRadius 
              placeholder="Digite o numero 1" 
              value={valueInput1 || ''} 
              onChange={onChangeInput1}
              ref={refInput}
            />
            <InputWithRadius
              placeholder="Digite o numero 2"
              value={valueInput2 || ''}
              onChange={onChangeInput2}  
              ref={refInput}
            />
        </section>
    )
}

export default Inputs
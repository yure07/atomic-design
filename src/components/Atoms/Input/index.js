import './style.css'

const InputAtom = ({value, onChange, placeholder}) => {
    return(
        <input 
          type="text" 
          value={value}
          onChange={onChange}
          placeholder={placeholder} 
          className='input-number'
        /> 
    )
}

export default InputAtom
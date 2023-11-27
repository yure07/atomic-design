import './style.css'

const InputAtom = (props) => {
    return(
        <input 
          type="text" 
          className='input-number'
          placeholder={props.placeholder} 
          value={props.value}
          onChange={props.onChange}
          onFocus={props.onFocus}
          onBlur={(e) => {
            e.target.style.borderRadius = '0'
            e.target.style.borderColor = 'orange'
          }}
        />
    )
}

export default InputAtom
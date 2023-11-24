import { useState } from "react";
import Inputs from "../Molecules/Inputs/input";
import Operations from "../Molecules/Operations/operations";
import Historic from "../Molecules/Historic";
import './style.css'

const CalculatorOrganism = () => {
    const [numberOne, setNumberOne] = useState()
    const [numberTwo, setNumberTwo] = useState()
    const [result, setResult] = useState(0)
    const [allResults, setAllResults] = useState([])

    const onCalculate = (operation) => {
        console.log(operation)
        switch (operation){
            case '+':
                const sumResult = Number(numberOne) + Number(numberTwo);
                setResult(sumResult);
                setAllResults(prevResults => [...prevResults, sumResult]);
                break;
            case '-':
                const minusResult = Number(numberOne) - Number(numberTwo);
                setResult(minusResult);
                setAllResults(prevResults => [...prevResults, minusResult]);
                break;
            case '*':
                const multiplyResult = Number(numberOne) * Number(numberTwo);
                setResult(multiplyResult);
                setAllResults(prevResults => [...prevResults, multiplyResult]);
                break;
            case '/':
                const divideResult = Number(numberOne) / Number(numberTwo);
                setResult(divideResult);
                setAllResults(prevResults => [...prevResults, divideResult]);
                break;
            default:
        }
    }

    return(
        <main className="main-container">
            <Inputs 
              valueInput1={numberOne}
              valueInput2={numberTwo}
              onChangeInput1={(e) => setNumberOne(e.target.value)}
              onChangeInput2={(e) => setNumberTwo(e.target.value)}
            />

            <Operations onOperation={onCalculate}/>

            <span className='result'>{result}</span>

            <Historic>{allResults}</Historic>
        </main>
    )
}

export default CalculatorOrganism
import { useState } from "react";

function Calculator () {
    const [num1, setNum1] = useState(0)
    const [num2,setNum2] = useState(0)
    const [resultado, setResultado] = useState(null)

    const suma = () => setResultado(parseFloat(num1) + parseFloat(num2))
    setNum1(0)
    setNum2(0)
    const resta = () => setResultado(parseFloat(num1) - parseFloat(num2))
    setNum1(0)
    setNum2(0)
    const mult = () => setResultado(parseFloat(num1) * parseFloat(num2))
    setNum1(0)
    setNum2(0)
    const dividir = () => setResultado(parseFloat(num1) / parseFloat(num2))
    setNum1(0)
    setNum2(0)

   


    return (
        <>
         <h1>Calculadora</h1>
         <div className="inputs">
          <input
          type="number"
          placeholder="introduce un nº"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          />
          <input
          type="number"
          placeholder="introduce un nº"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          />
         </div>
         <div className="buttons">
          <button onClick={suma}>+</button>
          <button onClick={resta}>-</button>
          <button onClick={mult}>*</button>
          <button onClick={dividir}>/</button>
         </div>
         <div>
         {resultado !== null ? <p>Resultado: {resultado}</p> : null}
         </div>
        
        </>
    )
}

export default Calculator
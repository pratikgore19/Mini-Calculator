import './App.css';

import { useState } from 'react'
const Calculator = () => {
  const [calc, setCalc] = useState({
    current: '0',
    total: '0',
    isInitial: true,
    operation: ''
  })

  const handleOperator = (value) => {
    let total = doOperation();
    setCalc({total:total.toString(),operation:value,isInitial:true,current:total.toString()});
  }

  const handleNumber = (value) => {
    let newValue = value;
    if (!calc.isInitial) {
      newValue = calc.current + value;
    }
    setCalc({ current: newValue, total: calc.total, isInitial: false, operation:calc.operation });
  }

  const renderDisplay = () => calc.current;
  const clearDisplay = () => setCalc({
    current: '0',
    total: '0',
    isInitial: true,
    operation: ''
  })

  const doOperation = () => {
    let current = parseInt(calc.current);
    let total = parseInt(calc.total);
    switch (calc.operation) {
      case '+':
        total += current;
        break;
      case '-':
        total -= current;
        break;
      case '*':
        total *= current;
        break;
      case '/':
        total /= current;
        break;
      default:
        total = current;
        break;
    }
    return total;
  }

  return (
    <div className='calc-container'>
      <div className='calc-screen'>{renderDisplay()}</div>
      <div className='calc-pad'>
        <CalcBtn value='7' onClick={handleNumber} />
        <CalcBtn value='8' onClick={handleNumber} />
        <CalcBtn value='9' onClick={handleNumber} />
        <CalcBtn value='/' className='operator' onClick={handleOperator} />
        <CalcBtn value='4' onClick={handleNumber} />
        <CalcBtn value='5' onClick={handleNumber} />
        <CalcBtn value='6' onClick={handleNumber} />
        <CalcBtn value='*' className='operator' onClick={handleOperator} />
        <CalcBtn value='3' onClick={handleNumber} />
        <CalcBtn value='2' onClick={handleNumber} />
        <CalcBtn value='1' onClick={handleNumber} />
        <CalcBtn value='-' className='operator' onClick={handleOperator} />
        <CalcBtn value='C' className='clear-button' onClick={clearDisplay} />
        <CalcBtn value='0' onClick={handleNumber} />
        <CalcBtn value='=' className='equal-button' onClick={handleOperator} />
        <CalcBtn value='+' className='operator' onClick={handleOperator} />
      </div>
    </div>
  )
}

const CalcBtn = (props) => {
  return (
    <button className={props.className} onClick={() => props.onClick(props.value)}>{props.value}</button>
  )
}

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;

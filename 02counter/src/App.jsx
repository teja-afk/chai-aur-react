import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {  
  const [counter, setCounter] = useState(15) // hamesha 2 cheeze dega [count, function]

  const addValue = () => {
    if(counter==20){
      return
    }
    setCounter(counter + 1);
    console.log("Clicked", counter);
  }
  const removeValue = () => {
    if(counter == 0){
      return
    }
    setCounter(counter - 1);
    console.log("remove count", counter);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <footer>footer : {counter}</footer>
    </>
  )
}

export default App

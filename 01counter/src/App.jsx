import { useState } from 'react' // this usestate is a hook library
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // useState is a hook
   let [counter, setCounter] = useState(15) //counter is a variable and setCounter is a method
   //useState is initialised in the form of array only


// let counter = 15

const addValue = () => {
  // console.log("value added", Math.random());
  // console.log("clicked", counter);
  // counter = counter + 1
  // setCounter(counter + 1)
  if(counter >= 20){
  console.log("It cannot increase boyond 20");
  return
  }
  // setCounter(counter + 1)
  // setCounter(counter + 1)//this second counter will not increase the value of counter by two
  // to increase the value of counter by two we use below code
  setCounter(prevCounter => prevCounter +1)
  setCounter(prevCounter => prevCounter +1)
  

}

const removeValue = () => {
  // setCounter(counter - 1)
  if(counter <= 0 ){
  console.log("It cannot decrease beyond 0");
  return 
  }
  setCounter(counter - 1)

}

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}>Add Value: {counter}</button>
      <br />
      <button
      onClick={removeValue}>remove value: {counter}</button>
      <p>Footer: {counter}</p>
    </>
  )
  //all these counters are managed in the form of hooks
}

export default App

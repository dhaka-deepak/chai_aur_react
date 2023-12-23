import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// we are importing the card.jsx below to use the component
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
// the card tag in below return statement is used to call the card.jsx in components folder
// we are creating diffrent obj to reflect in card
// let myObj = {// we can also pass array
//   username: "Deepak",
//   age: 25
// }
// let newArr = [1,2,3,]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS</h1>
      <Card username="chaiaurcode" btnText="click me" /> 
      <Card username="Deepak" btnText="visit me" /> 

    </>
  )
}

export default App

import Chai from "./chai" //we need to import every new funtion from that jsx file 

function App() {
  //div here is called fragement
//by using this div tag we can hold more than one tag in same return statement, without div it is not possible
  return (
    <> 
    <h1>This is a heading</h1> 
    <Chai />
    <p>This is para</p>
    </>
  )
}

export default App

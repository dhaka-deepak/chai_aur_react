import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }
// the above reactElement will not run here because the syntax of main react element is diffrent from this self made element

const anathoreElement = (
      <a href='https.//goole.com' target='_blank'>Visit Google</a>
) 
// this will work by directly calling it as a variable

// in react we call the element funtion by sinf react synatx -->
const reactElement = React.createElement(
    'a',
    {href: 'https.//google.com', target: '_blank'},
    'click here to visit google'
)


ReactDOM.createRoot(document.getElementById('root')).render(
 
    // <App />
    // anathoreElement
       reactElement
  
)

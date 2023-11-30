
import React, { useEffect } from 'react';
import './App.css'

function App() {
  const date = new Date();
  const [seconds, setSeconds] = React.useState(date.getSeconds());
  const [minutes, setMinutes] = React.useState(date.getMinutes());
  const [hours, setHours] = React.useState(date.getHours());

 setInterval((()=>{
  setSeconds(date.getSeconds());
  setHours(date.getHours());
  setMinutes(date.getMinutes());
 }), 1000)();


  return (
    <div className='parent'>
      <div className="main">
        <div style className='hour'></div>
        <div className='minute'></div>
        <div className='second'></div>
      </div>

    </div>
  )
}

export default App

import React, { useRef } from "react";
import "./styles.css";

const Child = ({passRefUp}) => {
  const ref = useRef(null);

  return (
    <div ref={ref} onClick={() => passRefUp(ref)} style={{width: '300px', height: '300px'}} />
  )
}

export default function App() {
  const passRefUp = (ref) => {
    console.log('Color changed');
    ref.current.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
  }

  return (
    <div className="App">
      <Child passRefUp={passRefUp}/>
    </div>
  );
}

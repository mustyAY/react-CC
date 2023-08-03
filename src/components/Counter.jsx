import React, { useState } from "react";

function Counter() {

    const [arr, setArr] = useState([])

    function remove(){
        setArr((prevArr) => [...prevArr, " m"])
    }

    function add(){
        setArr((prevArr) => [...prevArr, " p"])
    }
 
  return (
    <div>
      <button onClick={remove}>-</button>
      <button onClick={add}>+</button>
      {arr.toString()}
    </div>
  );
}

export default Counter;

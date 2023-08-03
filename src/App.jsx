import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";

function App() {
  const [showModal, setShowModal] = useState(false);

  function onTodoDelete(){
    setShowModal(true)
  }

  function onModalClick(){
    setShowModal(false)
  }

  useEffect(() => {
    console.log('onMount()')
  }, [showModal])

  return (
    <div>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => console.log(event.target.value)}
        />
        <button>Add Todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo clicked={onTodoDelete} title="Finish Frontend Simplified" />
        <Todo clicked={onTodoDelete} title="Finish the interview section" />
        <Todo clicked={onTodoDelete} title="Land a $100K Job" />
      </div>
      {showModal && <Modal clicked={onModalClick} title="Are you sure?" />}
    </div>
  );
}

export default App;

import { useState } from "react";

export const Form = ({ createTodo }) => {
  // 入力値のstate
  const [enteredTodo, setEnteredTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.random() * 11,
      content: enteredTodo,
    };
    createTodo(newTodo);

    setEnteredTodo("");
  };

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        value={enteredTodo}
        onChange={(e) => setEnteredTodo(e.target.value)}
      />
      <button onClick={addTodo}>追加</button>
    </form>
  );
};

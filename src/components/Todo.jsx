import { useState } from "react";
import { Form } from "./Form";
import { List } from "./List";

export const Todo = () => {
  const todosList = [
    {
      id: 1,
      content: "店予約する",
    },
    {
      id: 2,
      content: "卵買う",
    },
    {
      id: 3,
      content: "郵便出す",
    },
  ];

  const [todos, setTodos] = useState(todosList);

  return (
    <>
      <List todos={todos} />
      <Form />
    </>
  );
};

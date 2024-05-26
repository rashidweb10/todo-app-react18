import { useState } from "react";
import TodoItems from "./TodoItems";
import Form from "./Form";
import Footer from "./Footer";
export default function Todo() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <TodoItems todos={todos} setTodos={setTodos} />
      <Footer todos={todos} />
    </>
  );
}

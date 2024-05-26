import { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", status: false });
  function handleSubmilt(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", status: false });
  }
  return (
    <>
      <div className={styles.inputContainer}>
        <form className={styles.todoForm} onSubmit={(e) => handleSubmilt(e)}>
          <input
            className={styles.modernInput}
            type="text"
            name="todo"
            placeholder="Enter"
            onChange={(e) => setTodo({ name: e.target.value, status: false })}
            value={todo.name}
          ></input>
          <button className={styles.modernButton} type="submit">
            Add
          </button>
        </form>
      </div>
    </>
  );
}

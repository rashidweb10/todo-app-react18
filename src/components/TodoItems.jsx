import styles from "./todolist.module.css";

export default function TodoItems({ todos, setTodos }) {
  function handleDelete(e, item) {
    const newTodo = todos.filter((t) => t.name !== item);
    setTodos(newTodo);
  }

  function handleComplete(e, itemName) {
    const newTodo = todos.map((t) =>
      t.name === itemName ? { ...t, status: !t.status } : t
    );
    setTodos(newTodo);
  }

  const sortTodos = todos.toSorted((a, b) => a.status - b.status);

  return (
    <>
      {sortTodos.map((item) => (
        <div className={styles.listData} key={item.name}>
          <span
            className={item.status ? styles.completed : null}
            onClick={(e) => handleComplete(e, item.name)}
          >
            {item.name}
          </span>
          <button onClick={(e) => handleDelete(e, item.name)}>X</button>
        </div>
      ))}
    </>
  );
}

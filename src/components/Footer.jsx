import styles from "./footer.module.css";

export default function Footer({ todos }) {
  return (
    <>
      <div className={styles.footer}>
        <div>Completed : {todos.filter((t) => t.status === true).length}</div>
        <div>Total : {todos.length}</div>
      </div>
    </>
  );
}

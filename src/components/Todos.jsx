import { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext.jsx";
import Todo from "./Todo.jsx";
import styles from "../styles/Todos.module.css";

export default function Todos() {
  const { todos } = useContext(GlobalContext);
  
  return(
    <div className={styles.container}>
      <div>
        <p>Your Tasks</p>
      </div>
      <div>
      {
        todos.map(todo => <Todo data={todo} key={todo.id} />)
      }
      </div>
    </div>)
}
import { useState, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext.jsx";
import styles from "../styles/NewTodo.module.css";

export default function NewTodo({toggle}) {
  const [text, setText] = useState("");
  const { addTodo } = useContext(GlobalContext);
  
  const handler = () => {
    if(text.length > 2){
      let id = parseInt(Date.now() - (Math.random()*1000));
      
      addTodo({
        id,
        text,
        done: false
      })
      toggle()
      setText("")
    } else {
      console.log("Minimum two characters")
    }
  }
  
  return(
    <div className={styles.container}>
      <div>
        <input 
          type="text" 
          placeholder="Add a task" 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
        />
      </div>
      <div>
        <button onClick={handler}>Add Task</button>
      </div>
    </div>)
}
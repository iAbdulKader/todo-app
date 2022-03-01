import { useState } from "react";
import styles from "../styles/AddTodoButton.module.css";
import NewTodo from "./NewTodo.jsx";
import { IoIosAdd } from "react-icons/io";
import { GiCrossedSabres } from "react-icons/gi";
import Roll from 'react-reveal/Roll';
import Rotate from 'react-reveal/Rotate';

export default function AddTodoButton() {
  const [show, setShow] = useState(false)
  
  const toggle = () => {
    setShow(!show)
  }
  return(
    <div className={styles.container}>
      <Roll right opposite when={show}>
        <NewTodo toggle={toggle} />
      </Roll>
      
      <div 
        className={`${styles.btnContainer} center`}
        onClick={toggle}
      >
        <IoIosAdd />
        
      </div>
    </div>)
}
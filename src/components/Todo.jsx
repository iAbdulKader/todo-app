import { useState, useContext, useRef } from "react";
import { GlobalContext } from "../contexts/GlobalContext.jsx";
import styles from "../styles/Todo.module.css";
import { FiEdit3 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCircle, BsCheckCircle } from "react-icons/bs";
import { FiSave } from "react-icons/fi";

export default function Todo({data}) {
  const { deleteTodo, triggerDone, editTodo } = useContext(GlobalContext);
  const [text, setText] = useState(data.text);
  const [edit, setEdit] = useState(false);
  const inputRef = useRef();
  const textBoxRef = useRef();
  
  const doneHandler = () => {
    if(!edit){
      triggerDone(data.id)
    }
  }
  
  const editHandler = () => {
    editTodo(data.id, text)
    setEdit(!edit)
    textBoxRef.current.classList.remove(styles.focus)
  }
  
  const editTrigger = () => {
    setEdit(!edit)
    textBoxRef.current.classList.add(styles.focus)
    inputRef.current.focus()
  }
  
  return(
    <div className={`${styles.container} ${data.done ? styles.done : null}`}>
      <div 
        className={styles.textBox}
        onClick={doneHandler}
        ref={textBoxRef}
      >
        { !data.done ?
          (<BsCircle style={{marginLeft: "10px"}} />)
        : (<BsCheckCircle style={{marginLeft: "10px"}} />)
        }
        <input
          type="text" 
          value={text} 
          onChange={(e) => setText(e.target.value)}
          readOnly={!edit}
          ref={inputRef}
        />
      </div>
      
      <div className={styles.buttonBox}>
        {!edit ? 
        (<>
        <button>
          <FiEdit3 
            onClick={editTrigger}
            style={{ verticalAlign: "middle" }} />
        </button>
        <button 
          onClick={() => deleteTodo(data.id)}
        >
          <AiOutlineDelete 
            style={{ verticalAlign: "middle" }} 
          />
        </button>
        </>)
        :(<button onClick={editHandler}>
          <FiSave style={{ verticalAlign: "middle" }} />
        </button>)}
      </div>
    </div>)
}
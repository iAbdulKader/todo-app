import { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

const initialState = [];

export const GlobalContext = createContext(initialState);

export default function GlobalProvider({children}) {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  
  function addTodo(todo) {
    dispatch({
      type: "ADD_TODO",
      payload: todo
    })
  }
  
  function triggerDone(id) {
    dispatch({
      type: "TRIGGER_DONE",
      payload: id
    })
  }
  
  function deleteTodo(id) {
    dispatch({
      type: "DELETE_TODO",
      payload: id
    })
  }
  
  function editTodo(id, text) {
    dispatch({
      type: "EDIT_TODO",
      id: id,
      payload: text
    })
  }
  
  const value = {
    todos: state,
    addTodo,
    triggerDone,
    deleteTodo,
    editTodo
  }
  return (
    <GlobalContext.Provider value={value}>
     {children}
    </GlobalContext.Provider>)
}
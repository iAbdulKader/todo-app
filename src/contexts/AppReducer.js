import produce from "immer";

export default function AppReducer(state, action){
  switch (action.type) {
    case 'ADD_TODO':
      return produce(state, draft => {
        draft.push(action.payload)
      })
      
    case 'TRIGGER_DONE':
      return change(state, action.payload, "done")
      
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.payload)
      
    case 'EDIT_TODO':
      return change(state, action.id, "text", action.payload)
    
    default:
      return state
  }
}

function change(arr, id, field, data){
  if(arr.length === 0) {
    return []
  }
  if(field === "done"){
    return arr.map(todo => {
      return todo.id === id ? {
        ...todo,
        [field]: !todo.done
      } : todo
    })
  }else {
    return arr.map(todo => {
      return todo.id === id ? {
        ...todo,
        [field]: data
      } : todo
    })
  }
}
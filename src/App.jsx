import GlobalProvider from "./contexts/GlobalContext.jsx";
import Header from "./components/Header.jsx";
import Todos from "./components/Todos.jsx";
import AddTodoButton from "./components/AddTodoButton.jsx";

function App() {

  return (
    <GlobalProvider>
      <Header />
      <Todos />
      <AddTodoButton />
    </GlobalProvider>
  )
}

export default App

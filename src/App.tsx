import "./App.scss";
import ToDoForm from "./components/todoForm/todoForm";
import TodoList from "./components/todoList/todoList";

function App() {
  return (
    <>
      <div>
        <ToDoForm />
        <TodoList />
      </div>
    </>
  );
}

export default App;

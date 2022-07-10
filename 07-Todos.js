import { useState } from "react";

function App() {

  const [Todo, setTodo] = useState("");
  const [Todos, setTodos] = useState([]);

  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (Todo === ""){
      return;
    }
    setTodos((currentArray) => [...Todos, Todo]);
    setTodo("");
  }

  return (
    <div>
      <h3> 현재 입력 배열 길이 ({Todos.length}) </h3>
      <form onSubmit={onSubmit}>
        <input value = {Todo} placeholder="Type" onChange={onChange} />
        <button> Click Me </button>
      </form>
      <hr />
      {Todos.map((item,index) => (<li key={index}> {item} </li>))}
    </div>
  );
}

export default App;

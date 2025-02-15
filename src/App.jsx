import { useState } from "react"

function App() {
 const [todos, setTodos] = useState([
{
  id:1,
  text: "criar funcionalidade x no sistema",
  category: "Trabalho",
  isCompleted: false,
},
{
  id:2,
  text: "Ir pra academia",
  category: "Pessoal",
  isCompleted: false,
},
{
  id:3,
  text: "Estudar React",
  category: "Estudos",
  isCompleted: false,
}
 ]);

  return(
    <div className="app">
      <h1>Todo List</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <div className="content">
              <p>{todo.text}</p> 
               <p className="category">
                ({todo.category})
               </p>
            </div>
            <div>
              <button>Completar</button>
              <button>Excluir</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )}

export default App;
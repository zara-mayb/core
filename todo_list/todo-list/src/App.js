import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import React, {useState} from 'react'
import Display from './components/Display';

function App() {
  const [todos, setTodos] = useState([
    {
      todoText:"Get Mern black belt",
      complete: false
    }
  ])
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }
  const deleteTodo = (deleteIndex) => {
    const filteredTodos = todos.filter((todo, i) =>{
      return i != deleteIndex;
    });
    setTodos(filteredTodos);
}
  return (
    <div className="App">
      <Form addTodo = {addTodo} todos={todos} />
      <Display todos ={todos} deleteTodo = {deleteTodo} setTodos ={setTodos}/>
    </div>
  );
}

export default App;

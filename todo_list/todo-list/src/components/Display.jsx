import React, {useState} from 'react'
import '../App.css';

const Display = (props) => {
    const clickDelete = (todoidx) => {
        props.deleteTodo(todoidx)
    }
    const toggleComplete = (idx) => {
        const crossTodo = props.todos.map((todo, i) => {
            if (idx === i){
                todo.complete = !todo.complete;
            }
            return todo;
        });
        props.setTodos(crossTodo)
    }
    return (
        <div>
            {
                props.todos.map((todo,idx) => {
                    const toDoList = [];
                    if (todo.complete){
                        toDoList.push("strikeTodo")
                    }
                    return(
                        <div key={idx}>
                            <span className={toDoList.join("")}>{todo.todoText}</span>
                            <input type="checkbox" checked = {todo.complete} onChange={(e) => {toggleComplete(idx)}}/>
                            <button onClick={()=> {clickDelete(idx)}}>Delete</button>
                        </div>
                    )
                })
            } 
        </div>
    )
}

export default Display
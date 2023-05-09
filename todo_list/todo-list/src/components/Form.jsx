import React, {useState} from 'react'

const Form = (props) => {
    const [newTodo, setNewTodo] = useState("");
    const formSubmit = (e) => {
        e.preventDefault();
        const newTodoItem = {
            todoText: newTodo,
            complete: false
        }
        props.addTodo(newTodoItem);
        console.log(props.todos)
        setNewTodo("");
    }

    return (
        <div>
            <form onSubmit={formSubmit}> 
                <input type="text" onChange={(e) => setNewTodo(e.target.value)} value ={newTodo}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default Form
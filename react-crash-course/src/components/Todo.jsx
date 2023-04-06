import './Todo.css'

function Todo({ title, deleteConf }) {

    return (
        <div className="todo">
            <p> { title } </p>
        <button onClick={ deleteConf }>Delete</button>
        </div>
    )
}

export default Todo

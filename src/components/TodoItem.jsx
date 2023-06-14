const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <div>
            <input type="checkbox" checked={todo.completed} onChange={toggleTodo} />
            <span>{todo.text}</span>
            <button onClick={deleteTodo}>Удалить</button>
        </div>
    );
};

export default TodoItem;
const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <div className='todo-item'>
            <input 
                className='todo-item__input'
                id={`checkbox-${todo.text}`}  
                type="checkbox" 
                checked={todo.completed} 
                onChange={toggleTodo} />
            <label for={`checkbox-${todo.text}`}></label>
            <span className='todo-item__text'>{todo.text}</span>
            <button className='todo-item__button' onClick={deleteTodo}>Удалить</button>
        </div>
    );
};

export default TodoItem;
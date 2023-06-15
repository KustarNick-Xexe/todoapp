import TodoItem from './TodoItem';
import '../index.css';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <div className='todo-list'>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    toggleTodo={() => toggleTodo(todo.id)}
                    deleteTodo={() => deleteTodo(todo.id)}
                />
            ))}
        </div>
    );
};

export default TodoList;
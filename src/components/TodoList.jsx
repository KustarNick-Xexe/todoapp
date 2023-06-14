import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
    return (
        <div>
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
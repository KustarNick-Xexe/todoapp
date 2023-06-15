import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import '../src/index.css';
import { v4 as uuid } from 'uuid';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodoChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleNewTodo = (e) => {
    e.preventDefault();
    if (newTodo !== "") {
      setTodos([...todos, { id: uuid(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  };

  return (
    <div className='todo-app'>
      <h1 className='todo-app__header'>TODO</h1>
      <form className='todo-app__form' onSubmit={handleNewTodo}>
        <input
          className='todo-app__input'
          placeholder="Новая задача"
          value={newTodo}
          onChange={handleNewTodoChange}
        />
        <button
          className='todo-app__button'
          type="submit">Добавить</button>
      </form>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App

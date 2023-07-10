import { useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import InputTodo from '@/components/InputTodo';
import TodosList from '@/components/TodosList';

const TodosLogic = () => {
  const [todos, setTodos] = useState([
    {
      id: uuidv4(),
      title: 'Setup development environment',
      completed: false,
    },
    {
      id: 2,
      title: 'Develop website and add content',
      completed: false,
    },
    {
      id: 3,
      title: 'Deploy to live serverss',
      completed: false,
    },
  ]);

  const addTodoItem = (title) => {
    // update state with user's input
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  return (
    <div>
      <InputTodo  addTodoItem={addTodoItem}/>
      <TodosList 
        todosProps={todos} 
        handleChange={handleChange} 
        delTodo={delTodo}
        />
    </div>
  );
};
export default TodosLogic;
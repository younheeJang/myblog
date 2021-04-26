import React from "react";
import styles from '../../styles/layout.module.css'

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = props => {
  return (
    <ul className={styles.container}>
      {props.items.map(todo => (
        <li key={todo.id} className="text-white px-6 py-4 border-0 rounded relative mb-4 bg-purple-300">
          <span className="inline-block align-middle mr-8">{todo.text}</span>
          <button className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none" onClick={props.onDeleteTodo.bind(null, todo.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;

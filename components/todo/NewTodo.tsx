import React, { useRef } from 'react';
import styles from '../../styles/layout.module.css'

type NewTodoProps = {
    onAddTodo: (todoText:string)=> void;
}

const NewTodo :React.FC<NewTodoProps>= props => {
    
    //use Ref: connection with input tag: very first time null
    const textInputRef = useRef<HTMLInputElement>(null);
    const todoSubnitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.onAddTodo(enteredText);
        textInputRef.current!.value = '';
    };
    return (
   
    <form onSubmit={todoSubnitHandler} className={styles.container}>
        <div className="flex flex-col overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row"> 
            <input type="text" id="todo-text" className='flex-left px-6 py-3 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent' ref={textInputRef} />
            <button type="submit" className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-200 transform bg-gray-700 hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">ADD TODO</button>
        </div>
    </form>
    );

}

export default NewTodo;
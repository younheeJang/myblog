import React, { useRef } from 'react';
import './style/NewTodo';

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
    };
    return (
    <form onSubmit={todoSubnitHandler}>
        <div>
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" id="todo-text" ref={textInputRef} />
            <button type="submit">ADD TODO</button>
        </div>
    </form>
    );

}

export default NewTodo;
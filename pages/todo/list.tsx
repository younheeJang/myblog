import React, { useState } from 'react';
import Head from 'next/head'
import TodoList from '../../components/todo/TodoList';
import NewTodo from '../../components/todo/NewTodo';
import { Todo } from '../../models/todo.model';

const TodoPage:React.FC = () => {

    const [todos, setTodos]= useState<Todo[]>([]);

    const todoAddHandler = (text:string) => {
        setTodos(prevTodos =>[...prevTodos, {id:Math.random().toString(), text:text}]);
    }

    const todoDeleteHandler = (todoId: string) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => todo.id !== todoId);
        })
    }
    return(
        <>
            <Head>
            <title>TODO</title>
            <link rel="icon" href="/LOGO.ico" />
            <meta name="title" property="og:title" content="next/todo" key="ogtitle" />
            <meta
              name="description"
              property="og:description"
              content="page for todolist" key="ogdes" />
            <meta name="image" property="og:image" content="/images/profile.jpeg" key="ogimage" />
            <meta name="url" property="og:url" content="http://localhost:3000/todo/list" key="ogurl" />
            </Head>
            
            <NewTodo onAddTodo={todoAddHandler}/>
            <TodoList items={todos}  onDeleteTodo={todoDeleteHandler}/>
           
        </>
    )
}

export default TodoPage;
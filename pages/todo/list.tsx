import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import TodoList from '../../components/todo/TodoList';
import NewTodo from '../../components/todo/NewTodo';
import { Todo } from '../../models/todo.model';
import styles from '../../styles/layout.module.css'
import utilStyles from '../../styles/utils.module.css'
import DateClock from '../../components/utils/DateClock'

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
            <div className="bg-purple-200 sticky top-0">
                <div className={styles.container}>
                    <div className="grid grid-cols-6 gap-4">
                        <div className="col-start-1 col-span-5">
                            <div className="float-left">
                                <div className="mt-0.5 ml-1.5 mr-2">
                                    <Image
                                    priority
                                    src="/images/LOGO.jpg"
                                    className={utilStyles.borderCircle}
                                    height={24}
                                    width={24}
                                    />
                                </div>
                            </div>
                            <DateClock />
                        </div>
                        <div className="col-end-7 col-span-1">
                            <div className="relative">
                                <div className="absolute right-0 m-1">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NewTodo onAddTodo={todoAddHandler}/>
            <TodoList items={todos}  onDeleteTodo={todoDeleteHandler}/>
           
        </>
    )
}

export default TodoPage;
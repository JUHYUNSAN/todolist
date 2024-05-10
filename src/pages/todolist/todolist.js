import React from "react";
import {useState, useRef} from 'react';

import { TodolistContainer } from "./styled";
import { TodoListHeader } from "../../components/header/todoListHeader";
import { Editor } from "../../components/editor/editor";
import { List } from "../../components/list/list";

const mockData = [
    {
        id:0,
        isDone: false,
        content: "study react",
        date: new Date().getTime(),
    },
    {
        id:1,
        isDone: false,
        content: "cook bento",
        date: new Date().getTime(),
    },
    {
        id:2,
        isDone: false,
        content: "study Japanese",
        date: new Date().getTime(),
    }
];

export const Todolist = () => {
    
    const [todos, setTodos] = useState(mockData);
    const idRef = useRef(3)
    
    const onCreate = (content) => {
        const newTodo = {
            id : idRef.current++,
            isDone: false,
            content: content,
            date: new Date().getTime()
        }

        setTodos([newTodo, ...todos])

    };

    const onUpdate = (targetId)=>{
        setTodos(todos.map((todo)=>
            todo.id === targetId
                ?{...todo, isDone: !todo.isDone}
                : todo
            )
        );
    };

    const onDelete = (targetId)=>{
        setTodos(todos.filter((todo) => todo.id !== targetId));
    };


    return (
          <TodolistContainer>
              <TodoListHeader />
              <Editor onCreate={onCreate} />
              <List 
                todos={todos} 
                onUpdate={onUpdate} 
                onDelete={onDelete} />
          </TodolistContainer>
      );
  };
import React from "react";
import {useState, useRef, useEffect} from 'react';

import { TodolistContainer } from "./styled";
import { TodoListHeader } from "../../components/header/todoListHeader";
import { Editor } from "../../components/editor/editor";
import { List } from "../../components/list/list";

const mockData = [ //투두아이템 배열(임시데이터)로 만듬
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
    
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : mockData;
      });　//새로운 status에 임시데이터 넣어서 초기화
    const idRef = useRef(3) //mockdata와 겹치지않기 위해
    
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
      }, [todos]);

    const onCreate = (content) => { //추가하기 기능 content매개변수로 받음
        const newTodo = {
            id : idRef.current++, //매번 idRef 추가 
            isDone: false,
            content: content,
            date: new Date().getTime() //현재날짜
        }

        setTodos([newTodo, ...todos]) //setTodos호출해서 인수로 넣어야함

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
              <Editor onCreate={onCreate} /> {/* 에디터컴포넌트에 전달 */}
              <List 
                todos={todos} 
                onUpdate={onUpdate} 
                onDelete={onDelete} />
          </TodolistContainer>
      );
  };
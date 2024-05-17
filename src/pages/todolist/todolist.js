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
    
    const lastId = localStorage.getItem("lastId"); // 로컬 스토리지에서 마지막 할 일 항목의 id 값을 가져옴
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem("todos");
        return storedTodos ? JSON.parse(storedTodos) : mockData;
      });　
    const idRef = useRef(lastId ? parseInt(lastId) + 1 : 3); // 로컬 스토리지에 저장된 id 값이 있으면 그 값을 사용하고 없으면 기본 값인 3으로 설정
    
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
        localStorage.setItem("lastId", idRef.current);
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
              <Editor onCreate={onCreate} /> {/* 에디터컴포넌트에 전달 / onCreate-> 무언가 추가될때 */}
              <List 
                todos={todos} 
                onUpdate={onUpdate} 
                onDelete={onDelete} />
          </TodolistContainer>
      );
  };
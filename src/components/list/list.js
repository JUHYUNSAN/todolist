import React from "react";
import { StyledListContainer, InputSearch } from "./styled";
import { useState } from "react";

import { TodoItem } from "../todoItem/todoItem";

export const List = ({todos}) => {

  const [search, setSearch] = useState("");
  
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () =>{
    if(search === ""){
      return todos;
    }
    return todos.filter((todo)=>todo.content.includes(search))
  };

  const filteredTodos = getFilteredData();

  return (
    <StyledListContainer>
      <p>to do list</p>
      <InputSearch value={search} onChange={onChangeSearch} placeholder="please write what you want to find"></InputSearch>
      {todos.map((todo)=>{
        return <TodoItem key={todo.id} {...todo} />;
      })}
    </StyledListContainer>
  );
};
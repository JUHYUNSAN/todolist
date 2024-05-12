import React from "react";
import { StyledListContainer, InputSearch } from "./styled";
import { useState } from "react";

import { TodoItem } from "../todoItem/todoItem";

export const List = ({todos, onUpdate, onDelete}) => {

  const [search, setSearch] = useState("");
  
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () =>{
    if(search === ""){
      return todos;
    }
    return todos.filter((todo)=>
      todo.content.toLowerCase().includes(search.toLowerCase())
  );
  };

  const filteredTodos = getFilteredData();

  return (
    <StyledListContainer>
      <p>to do list🌱</p>
      <InputSearch value={search} onChange={onChangeSearch} placeholder="please write what you want to find"></InputSearch>
      {filteredTodos.map((todo)=>{
        return <TodoItem 
          key={todo.id} 
          {...todo} 
          onUpdate={onUpdate}
          onDelete={onDelete} />;
      })}
      <hr></hr>
    </StyledListContainer>
  );
};
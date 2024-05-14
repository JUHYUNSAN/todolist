import React from "react";
import { StyledListContainer, InputSearch } from "./styled";
import { useState } from "react";

import { TodoItem } from "../todoItem/todoItem";

export const List = ({todos, onUpdate, onDelete}) => {
//props로 투두리스트레 있는 todos, onUpdate, onDelete 받아옴
  
  const [search, setSearch] = useState("");
  
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () =>{
    if(search === ""){ 
      return todos;
    }
    return todos.filter((todo)=>
      todo.content.toLowerCase().includes(search.toLowerCase()) //서치값이 존재하는 투두를 찾아서 나타내기
  );
  };

  const filteredTodos = getFilteredData();

  return (
    <StyledListContainer>
      <p>To do list🌱</p>
      <InputSearch value={search} onChange={onChangeSearch} placeholder="please write what you want to find"></InputSearch>
      {filteredTodos.map((todo)=>{ //투두를 새로운 배열로 반환함
        return <TodoItem 
          key={todo.id} //고유의 키값을 보내야함
          {...todo} //투두 매개변수에 들어있는 모든 데이터가 props에 있게함
          onUpdate={onUpdate}
          onDelete={onDelete} />;
      })}
      <hr></hr>
    </StyledListContainer>
  );
};
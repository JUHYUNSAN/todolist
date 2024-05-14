import React from "react";
import { TodoListHeaderContainer,TodoListHeaderContainerTitle, TodoListHeaderContainerDate } from "./styled";

export const TodoListHeader = () => {
  //full date 
  const currentDate = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const fullDate = currentDate.toLocaleDateString('en-US', options);

  return (
    <TodoListHeaderContainer>
    <TodoListHeaderContainerTitle> Today is..🗓️</TodoListHeaderContainerTitle>
    <TodoListHeaderContainerDate> {fullDate} </TodoListHeaderContainerDate>
    </TodoListHeaderContainer>
  );
};
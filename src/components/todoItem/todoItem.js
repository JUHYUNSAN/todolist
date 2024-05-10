import React from "react";
import { StyledTodoItemContainer, 
  TodoItemList,
  TodoItemBtn,
  TodoItemInput } from "./styled";

export const TodoItem = ({id, isDone, content, date}) => {
  return (
    <StyledTodoItemContainer>
      <input readOnly checked={isDone} type="checkbox"/>
      <TodoItemInput>{content}</TodoItemInput>
      {new Date(date).toLocaleDateString()}
      <TodoItemBtn>cancle</TodoItemBtn>
    </StyledTodoItemContainer>
  );
};
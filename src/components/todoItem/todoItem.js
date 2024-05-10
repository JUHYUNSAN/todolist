import React from "react";
import { StyledTodoItemContainer, 
  TodoItemList,
  TodoItemBtn,
  TodoItemInput,
   } from "./styled";

export const TodoItem = ({id, isDone, content, date, onUpdate, onDelete}) => {
  const onChangeCheckbox = () =>{
    onUpdate(id);
  }

  const onClickDeletebutton = ()=>{
    onDelete(id)
  };
  
  return (
    <StyledTodoItemContainer>
      <input
        onChange={onChangeCheckbox} 
        readOnly 
        checked={isDone} 
        type="checkbox"/>
      <TodoItemInput>{content}</TodoItemInput>
      {new Date(date).toLocaleDateString()}
      <TodoItemBtn onClick={onClickDeletebutton}>cancle</TodoItemBtn>
    </StyledTodoItemContainer>
  );
};
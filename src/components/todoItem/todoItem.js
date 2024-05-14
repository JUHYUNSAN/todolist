import React from "react";
import { StyledTodoItemContainer, 
  TodoItemList,
  TodoItemBtn,
  TodoItemInput,
  TodoItemCheckBox,
  TodoItemDate
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
      <TodoItemCheckBox
        onChange={onChangeCheckbox} 
        readOnly 
        checked={isDone} 
        type="checkbox"/>
      <TodoItemInput >{content}</TodoItemInput>
      <TodoItemDate>{new Date(date).toLocaleDateString()}</TodoItemDate>
      <TodoItemBtn onClick={onClickDeletebutton}>cancle</TodoItemBtn>
    </StyledTodoItemContainer>
  );
};
import styled from "styled-components";

export const StyledTodoItemContainer = styled.div`
  display: flex;
  gap: 20px;
  padding-bottom: 5px;
  justify-content: center;
  align-items: center;
  boder-bottom: 1px solid;
  
`;

export const TodoItemList = styled.input`
  width: 100%;
  border: none;
  padding: 15px 0px;
`;

export const TodoItemCheckBox = styled.input`
  display: flex;
`;

export const TodoItemInput = styled.div`
  display: flex;
`;

export const TodoItemBtn = styled.button`
  color:red;
  cursor: pointer;
  border: none;
  background: none;
  text-decoration: underline;
`;

export const TodoItemDate = styled.div`
  font-size: small;
  color: grey;
`;
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

export const TodoItemInput = styled.div`
  flex: 1;
`;

export const TodoItemBtn = styled.button`
  color:red;
`;
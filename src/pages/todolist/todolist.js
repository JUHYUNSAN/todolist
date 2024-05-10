import React from "react";
import { TodolistContainer } from "./styled";

import { TodoListHeader } from "../../components/header/todoListHeader";
import { Editor } from "../../components/editor/editor";
import { List } from "../../components/list/list";


export const Todolist = () => {
      return (
          <TodolistContainer>
              <TodoListHeader />
              <Editor />
              <List />
          </TodolistContainer>
      );
  };
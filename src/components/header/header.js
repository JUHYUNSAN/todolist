import React from "react";
import { HeaderContainer, HeaderBtn } from "./styled";

import { useNavigate } from "react-router-dom";

export const Header = () => {

  const navigate1 = useNavigate()

  return (
    <HeaderContainer>
      <HeaderBtn onClick={() => navigate1("/main")}> MAIN</HeaderBtn>
      <HeaderBtn onClick={() => navigate1("/todolist")}> TO DO LIST</HeaderBtn>
      <HeaderBtn onClick={() => navigate1("/search")}> SEARCH</HeaderBtn>
    </HeaderContainer>
);
};
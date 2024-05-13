import React from "react";
import { HeaderContainer, HeaderBtn, TitleContainer, HeaderNav } from "./styled";

import { useNavigate } from "react-router-dom";

export const Header = () => {

  const navigate1 = useNavigate()

  return (
    <HeaderContainer>
      <TitleContainer><h1>DIARY</h1></TitleContainer>
      
      <HeaderNav>
        <HeaderBtn onClick={() => navigate1("/main")}> HOME</HeaderBtn>
        <HeaderBtn onClick={() => navigate1("/todolist")}> TO DO LIST</HeaderBtn>
        <HeaderBtn onClick={() => navigate1("/search")}> WEATHER</HeaderBtn>
      </HeaderNav>
    </HeaderContainer>
);
};
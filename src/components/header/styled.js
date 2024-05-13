import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-conten:space-between;
  align-items:center;
  height:100px;
  font-size:30px;
  margin: 0 auto;
  box-shadow: 0px 2px 5px #c9c9c9;
  margin-bottom: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  margin: 0 auto;
`;

export const HeaderNav = styled.div`
  display: flex;
  gap: 5px;
  margin: 0 auto;
`;

export const HeaderBtn = styled.button`
  display: flex;
  margin: 0 auto;
  color: grey;
  border: none;
  cursor: pointer;
  background-color: white;
`;

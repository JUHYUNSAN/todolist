import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content:center;
  align-items:center;
  font-size:30px;
  margin: 0 auto;
`;


export const MainDirection = styled.div`
  display: flex;
  direction: row;
  align-items:center;
  gap: 20px;
  margin: 6rem 
`;

export const MainIntro = styled.div`
  display: flex;
  flex-direction: column;
  font-size:30px;
  margin: 0 auto;
  color: grey;
`;


export const MainContainerBox = styled.button`
  display: flex;
  padding: 20px;
  gap: 20px;
  justify-content:center;
  align-items:center;
  background-color: white;
  cursor: pointer;
`;
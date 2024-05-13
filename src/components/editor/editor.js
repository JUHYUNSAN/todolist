import React from "react";
import { useState, useRef } from "react";
import { StyledEditorContainer, AddButton , InputList } from "./styled";


export const Editor = ({ onCreate }) => { //투두리스트에 있는 추가기능을 props로 받음

  const [content,setContent] = useState(""); //인풋태그에 있는걸 새로운 status에 보관
  const contentRef = useRef(); //새로운 Ref객체 생성
  
  const onChangeContent = (e) => {
    setContent(e.target.value); 
  }; 

  const onKeydown = (e)=>{ //엔터키눌러도 에드되게
    if(e.keyCode === 13) { //엔터키 코드가 13 그래서 엔터를 눌러도 서밋 기능이 실행되게 하는 코드
      onSubmit(); 
    }
  }

  const onSubmit = () => {
    if(content === ""){
      contentRef.current.focus(); //빈칸이면 입력칸 강조
      return;
    }
    onCreate(content); //인풋에 있는걸 추가기능에 넣음
    setContent(""); //서밋되면 초기화
  };

  return (
    <StyledEditorContainer>
      <InputList 
        ref={contentRef}
        value={content} 
        onKeyDown={onKeydown} //사용자가 키보드를 누를때 발생되는 이벤트ㅁ
        onChange={onChangeContent} 
        placeholder="please add what to do"></InputList>
      <AddButton onClick={onSubmit}>ADD</AddButton>
    </StyledEditorContainer>
  );
};

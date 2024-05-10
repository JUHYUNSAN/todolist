import React from "react";
import { useState, useRef } from "react";
import { StyledEditorContainer, AddButton , InputList } from "./styled";


export const Editor = ({ onCreate }) => {

  const [content,setContent] = useState("");
  const contentRef = useRef();
  
  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeydown = (e)=>{ //엔터키눌러도 에드되게
    if(e.keyCode === 13) {
      onSubmit(); 
    }
  }

  const onSubmit = () => {
    if(content === ""){
      contentRef.current.focus(); //빈칸이면 입력칸 강조
      return;
    }
    onCreate(content);
    setContent(""); //서밋되면 빈칸
  };

  return (
    <StyledEditorContainer>
      <InputList 
        ref={contentRef}
        value={content} 
        onKeyDown={onKeydown}
        onChange={onChangeContent} 
        placeholder="please add what to do"></InputList>
      <AddButton onClick={onSubmit}>ADD</AddButton>
    </StyledEditorContainer>
  );
};

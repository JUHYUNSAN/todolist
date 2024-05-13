import React from "react";
import { FooterContainer, FooterTitle, FooterContent } from "./styled";

export const Footer = () => {

  return (
    <FooterContainer>
      <FooterTitle><h2>Footer</h2></FooterTitle>

      <FooterContent>
        writer : Seo Juhyun <br />
        email : juhyun.alice.seo@gmail.com <br />
        Copyright 2024. All Right Reserved 
      </FooterContent>
    </FooterContainer>
);
};
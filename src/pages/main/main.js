import React from "react";
import { MainContainer, MainContainerBox, MainIntro, MainDirection } from "./styled";

import { useNavigate } from "react-router-dom";

export const Main = () => {

    const navigate = useNavigate();

    return (
    <MainContainer>
        <MainIntro>
            <h2>Hello, </h2> <br />
            <p>
                This is Diary Main page <br />
                If you want to go other page, <br />
                please click below box which you want to go 

            </p>

        </MainIntro>

        <MainDirection>
            <MainContainerBox 
                onClick={() => navigate("/main")}> MAIN
            </MainContainerBox>

            <MainContainerBox 
                onClick={() => navigate("/todolist")}> TO DO LIST
            </MainContainerBox>
            
            <MainContainerBox 
                onClick={() => navigate("/search")}> WEATHER
            </MainContainerBox>
        </MainDirection>
    </MainContainer>
    );
};
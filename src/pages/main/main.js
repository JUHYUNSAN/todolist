import React from "react";
import { MainContainer, MainContainerBox, MainIntro, MainDirection } from "./styled";

import { useNavigate } from "react-router-dom";

export const Main = () => {

    const navigate = useNavigate();

    return (
    <MainContainer>
        <MainIntro>Hello</MainIntro>

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
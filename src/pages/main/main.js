import React from "react";
import { MainContainer, MainContainerBox } from "./styled";

import { useNavigate } from "react-router-dom";

export const Main = () => {

    const navigate = useNavigate();

    return (
    <MainContainer>
        <MainContainerBox 
            onClick={() => navigate("/main")}> MAIN
        </MainContainerBox>

        <MainContainerBox 
            onClick={() => navigate("/todolist")}> TO DO LIST
        </MainContainerBox>
        
        <MainContainerBox 
            onClick={() => navigate("/search")}> WEATHER
        </MainContainerBox>
    </MainContainer>
    );
};
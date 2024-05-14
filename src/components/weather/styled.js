import styled from "styled-components";

export const WeatherContainer = styled.div`
  display: flex;
  gap: 20px;
  padding-bottom: 5px;
  justify-content: center;
  align-items: center;
`
export const WeatherItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const WeatherData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const WeatherCity = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  
  
`

export const WeatherCityBtn = styled.button`
  display: flex;
  height: 1.5rem;
  background-color: aliceblue;
  border: none;
  color: slateblue;
  font-size: larger;
  cursor: pointer;
`
import React, { useEffect, useState } from "react";
import axios from 'axios';
import {WeatherContainer, WeatherItem, WeatherHeading, WeatherData, WeatherCity, WeatherCityBtn} from "./styled";

export const Weather = () => {
    let cityList = ['Seoul','Tokyo','Osaka'];
    
    //state 관리
    const[icon,setIcon] = useState();
    const [city,setCity] = useState("tokyo");
    const [temp,setTemp] = useState();
    const [cloud,setCloud] = useState();

    /** 내가 클릭한 도시를 가져오는 함수 */
    const getCity = (e) => {
        setCity(e.target.innerText)
    }

    const getData = () => {
        console.log(process.env.REACT_APP_WEATHER_KEY)
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_KEY}`

        axios
        .get(url)
             // Axios를 사용하여 주어진 URL에서 데이터를 가져옴
        .then(res => { //비동기 처리로, API 요청에 대한 응답이 도착하면 실행
            //res 매개변수에는 API 응답이 포함
            console.log('getData Function', res.data) //데이터가 잘 받아졌는지 확인

            setTemp(parseInt(res.data.main.temp - 273)) 
             // API 응답에서 온도 정보를 가져와서 섭씨로 변환한 후, React 앱의 상태 중 하나인 temp를 업데이트
             // res.data.main.temp에서 API 응답에서 온도(켈빈단위 - 273이 섭씨온도)를 가져온다음 setTemp 함수사용
            setIcon(`https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`) //아이콘 업데이트
            if(res.data.clouds.all > 90){
                setCloud("very cloudy")
            } else if (res.data.clouds.all > 60){
                setCloud("cloudy")
            } else {
                setCloud("sunny")
            }
        })
        .catch((e) => {
            console.log(e);
        })
    }

    useEffect(()=>{
        console.log("첫 화면 랜더링");
        getData();
       //첫화면 그리고 city가 바뀔때마다 랜더링(getData함수 실행!)
    },[city])
    
    return (
        <WeatherContainer>
            <WeatherItem>
                <WeatherHeading>Today's weather🌎</WeatherHeading>
                <WeatherData>
                    <img src={icon} width='100px' />
                    <h1>{temp}°C</h1>
                    <h3>{city}</h3>
                    <h4>{cloud}</h4>
                </WeatherData>
                <WeatherCity>
                {cityList.map((item, index) => <WeatherCityBtn key={index} onClick={getCity}>{item}</WeatherCityBtn>)}
                {/* cityList.map() -> cityList 배열에 있는 각 도시 이름을 순회하면서 버튼을 생성
                 */}
                </WeatherCity>
            </WeatherItem>
        </WeatherContainer>
        
    );
};
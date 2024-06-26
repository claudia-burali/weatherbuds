import React, { useState, useEffect } from "react";
import SapiensImg from '../assets/sapiens_3.png';
import SapiensImg_1 from '../assets/sapiens_4.png';
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const WBFetch = () => {
  const { dinamicID } = useParams();
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [todayWeather, setTodayWeather] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://api.openweathermap.org/geo/1.0/direct?q=${dinamicID}&appid=e5e4ea9cf3dcca9c18761bb02089cb2e`
        );
        if (!response.ok) {
          throw new Error("City not found");
        }
        const data = await response.json();
        if (data.length > 0) {
          setLatitude(data[0].lat);
          setLongitude(data[0].lon);
          console.log(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (dinamicID) {
      fetchData();
    }
  }, [dinamicID]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (latitude !== null && longitude !== null) {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=e5e4ea9cf3dcca9c18761bb02089cb2e`
          );
          if (!response.ok) {
            throw new Error("Error fetching weather data");
          }
          const todayWeather = await response.json();
          console.log("weather data:", todayWeather);
          setTodayWeather(todayWeather);
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [latitude, longitude]);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        if (latitude !== null && longitude !== null) {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=e5e4ea9cf3dcca9c18761bb02089cb2e`
          );

          if (!response.ok) {
            throw new Error("Error fetching forecast data");
          }

          const forecastData = await response.json();
          setForecastData(forecastData);
          console.log(forecastData);
        }
      } catch (error) {
        console.error("Error fetching forecast data", error);
      }
    };

    fetchForecastData();
  }, [latitude, longitude]);

  return (
    <>
      <div className="d-flex align-items-center justify-content-between"> 
         <Card className="todayCard mx-5">
          {todayWeather && (
          <Card.Body className="text-center">
            <Card.Title>
              <img src={`https://openweathermap.org/img/wn/${todayWeather.weather[0].icon}@2x.png`} alt="Weather icon" />
            </Card.Title>
            <Card.Text>{Math.round(todayWeather.main.temp)}&deg; C</Card.Text>
            <Card.Text>{todayWeather.weather.description}</Card.Text>
            <Card.Text>{todayWeather.name}</Card.Text>
            <Card.Text>Today</Card.Text>
            <Card.Text>Humidity: {todayWeather.main.humidity} %</Card.Text>
            <Card.Text>Wind Speed: {todayWeather.wind.speed} km/h</Card.Text>
          </Card.Body>
           )}
         </Card>
         <img className="imgStyle" src={SapiensImg} alt="avatar" />
     </div>
     <div className="d-flex align-items-center justify-content-between"> 
        <img className="imgStyle" src={SapiensImg_1} alt="avatar" />
        <div>
         <Card className="todayCard mx-5">
          {forecastData && (
          <Card.Body className="text-center">
            <Card.Title>
              <img src={`https://openweathermap.org/img/wn/${forecastData.list[0].weather[0].icon}@2x.png`} alt="Weather icon" />
            </Card.Title>
            <Card.Text>{Math.round(forecastData.list[0].main.temp)}&deg; C</Card.Text>
            <Card.Text>{forecastData.list[0].weather.main}</Card.Text>
          </Card.Body>
           )}
         </Card>
        </div>
     </div>
    </>
  );
};

export default WBFetch;

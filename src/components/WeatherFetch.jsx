import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';

const WBFetch = (props) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [todayWeather, setTodayWeather] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${props.searchQ}&appid=e5e4ea9cf3dcca9c18761bb02089cb2e`);
        if (!response.ok) {
          throw new Error('City not found');
        }
        const data = await response.json();
        if (data.length > 0) {
          setLatitude(data[0].lat);
          setLongitude(data[0].lon);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (props.searchQ) {
      fetchData();
    }
  }, [props.searchQ]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        if (latitude !== null && longitude !== null) {
          const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=e5e4ea9cf3dcca9c18761bb02089cb2e`);
          if (!response.ok) {
            throw new Error('Error fetching weather data');
          }
          const todayWeather = await response.json();
          console.log('weather data:', todayWeather);
          setTodayWeather(todayWeather);
        }
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, [latitude, longitude]);

  return (
    <>
    <Card style={{ width: "100%" }}>
      {todayWeather && (
        <Card.Body className="text-center">
          <Card.Title>
            <img src={`https://openweathermap.org/img/wn/${todayWeather.weather[0].icon}@2x.png`} alt="" />
          </Card.Title>
          <Card.Text>{todayWeather.main.temp}&deg; C</Card.Text>
          <Card.Text>{todayWeather.weather.description}</Card.Text>
          <Card.Text>{todayWeather.name}</Card.Text>
          <Card.Text>Today</Card.Text>
          <Card.Text>Humidity: {todayWeather.main.humidity} %</Card.Text>
          <Card.Text>Wind Speed: {todayWeather.wind.speed} km/h</Card.Text>
        </Card.Body>
      )}
    </Card>
  </>
  );
};

export default WBFetch;
